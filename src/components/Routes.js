import React, {useState} from 'react'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'

import Storelocations from "../pages/Storelocations/Storelocations";



const Routes = () => {

    return (

        <Switch>
            <Route exact path="/">
                <Redirect to="/Store_locations"/>
            </Route>
            <Route path="/Store_locations" component={Storelocations}/>
        </Switch>


    )
}

export default Routes