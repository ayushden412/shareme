import { GoogleOAuthProvider } from "@react-oauth/google"
import React from "react"
import {Routes,Route} from "react-router-dom"
import Login from "./components/Login"
import Home from "./container/Home"

const clientId = "250068797667-ioekk9a0rgon1lmq3p85v9jugu9pblcr.apps.googleusercontent.com"

function App(){
    return(
        <GoogleOAuthProvider clientId={clientId}>
            <Routes>
                <Route path="login" element={<Login/>}/>
                <Route path="/*" element={<Home/>}/>
            </Routes>
        </GoogleOAuthProvider>
    )
}

export default App