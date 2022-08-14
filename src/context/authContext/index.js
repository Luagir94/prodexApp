import { createContext, useState, useEffect } from "react";

const AuthContext = createContext()
const AuthProvider = ({ children }) => {
            const [authToken, setAuthToken] = useState('')
            const [user, setUser] = useState('')
            const [isLogged, setIsLogged] = useState(false)

            useEffect(() => {
                if (authToken) {
                    setUser('Loggeado')
                    setIsLogged(true)
                }
                
            }, [authToken])
            

    return (<AuthContext.Provider value={{ authToken, setAuthToken, user, isLogged, setIsLogged}}>{children}</AuthContext.Provider>)
}

export { AuthProvider }
export default AuthContext