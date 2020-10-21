import React from "react"
import Authform from "./components/Authform"
import Homepage from "./components/Homepage"
import Account from "./components/Account"
import ShoppingList from "./components/ShoppingList"
import {Switch, Route} from "react-router-dom"
import Nav from "./components/Nav"
import "./index.css"
const App = () => {
    return(
        <>
        <Nav />
        <Switch>
            <Route exact path="/">
                <Authform />
            </Route>
            <Route path="/home">
                    <Homepage />
            </Route>
            <Route path="/shopping">
                <ShoppingList />
            </Route>
            <Route path="/account">
        <Account />
            </Route>
        </Switch>
        </>
        
    )
}

export default App