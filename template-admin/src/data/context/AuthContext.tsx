import { createContext, useEffect, useState } from 'react'
import Usuario from '@/model/Usuario'
import { User } from 'firebase/auth'
import { auth, app } from '../../firebase/config'
import { signInWithPopup, GoogleAuthProvider, getAuth, onIdTokenChanged, signOut } from 'firebase/auth'
import Cookies from 'js-cookie';


import route from 'next/router'

interface AuthContextProps {
    usuario?: Usuario
    loginGoogle?: () => Promise<void>,
    logout?: () => Promise<void>,
    carregando? : boolean
}

const AuthContext = createContext<AuthContextProps>({})




export function AuthProvider(props: any) {

    const [carregando, setCarregando] = useState(true)
    const [usuario, setUsuario] = useState<Usuario | null | undefined>(null);

    async function configurarSecao(usuarioFirebase: User | null) {

        if (usuarioFirebase?.email) {
            const usuario = await usuarioNormalizado(usuarioFirebase)
            setUsuario(usuario)
            gerenciarCookie(true)
            setCarregando(false)
            return usuario.email
        } else {
            gerenciarCookie(false)
            setUsuario(null)
            setCarregando(false)
            return false
        }
    }
    async function usuarioNormalizado(usuarioFirebase: User): Promise<Usuario> {
        const token = await usuarioFirebase.getIdToken()
        return {
            uid: usuarioFirebase.uid,
            nome: usuarioFirebase.displayName || '',
            email: usuarioFirebase.email || '',
            token,
            provedor: usuarioFirebase.providerData[0].providerId,
            imagemUrl: usuarioFirebase.photoURL || ''
        }
    }

    async function loginGoogle() {
        try{
            setCarregando(true)
            const resp = await signInWithPopup(
                getAuth(app), new GoogleAuthProvider()
            )
             configurarSecao(resp.user)
            route.push('/')
    
        }finally{
            setCarregando(false)
        }

   
    }
    async function logout(){
        try{
            await signOut(auth)
            await configurarSecao(null)
            setCarregando(true)
        }finally{
            setCarregando(false)
        }
    }
    function gerenciarCookie(logado: boolean) {
        if (logado) {   
            Cookies.set('admin-template-cod3r-auth', 'true', {
                expires: 7
            })
        } else {
            Cookies.remove('admin-template-cod3r-auth')
        }
    }
    useEffect(() => {
        if(Cookies.get('admin-template-cod3r-auth')){

            
            console.log("Usuário atual:", auth.currentUser);
            onIdTokenChanged(auth, async (usuarioFirebase) => {
                console.log('bbbbbbbbb')
                await configurarSecao(usuarioFirebase)
            }) // Verifica se existe um id do token 
        }else{
            setCarregando(false)
        }
        
    }, [])

    return (
        <AuthContext.Provider value={{
            usuario: usuario || undefined,
            loginGoogle,
            logout,
            carregando
        }}>
            {props.children}
        </AuthContext.Provider>
    )


}

export default AuthContext