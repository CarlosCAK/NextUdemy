import { createContext } from "react";

const AppContext = createContext({
    nome : ''
})


export function AppProvider(props : any) {

    return(
        <AppContext.Provider value={{
            nome : "Teste context API  "
        }} >
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContext;