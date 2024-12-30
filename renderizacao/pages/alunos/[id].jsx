import React from 'react'

export async function getStaticPaths(){

    const tutores = await fetch(`http://localhost:3000/api/alunos/tutores`)
    const ids = await tutores.json()

    const paths = ids.map(id => {
        return {params : {id : `${id}`}}
    })

    return{
        fallback : false,
        paths
    }

}

export async function getStaticProps(context){
    const resp = await fetch(`http://localhost:3000/api/alunos/${context.params.id}`)
    const aluno = await resp.json()
    return{
        props:{
            aluno
        }
    }
}

const AlunoPorId = ({aluno}) => {
  return (
    <div>
        <h1>Detalhe do Aluno</h1>
        <li>{aluno.id}</li>
        <li>{aluno.nome}</li>
        <li>{aluno.email}</li>
    </div>
  )
}

export default AlunoPorId