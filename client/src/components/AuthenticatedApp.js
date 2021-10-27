import React from "react";
import { Route, Switch } from "react-router";
import Header from "./Header";
import TripsPage from "./TripsPage";

function AuthenticatedApp() {
    return (
        <>
        <Header />
            <Switch>
                <Route path="/trips">
                    <TripsPage />
                </Route>
            </Switch>
        </>
    )
}

export default AuthenticatedApp;