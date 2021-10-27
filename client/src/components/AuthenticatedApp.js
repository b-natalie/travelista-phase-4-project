import React from "react";
import { Route, Switch } from "react-router";
import TripsPage from "./TripsPage";

function AuthenticatedApp() {
    return (
        <Switch>
            <Route path="/trips">
                <TripsPage />
            </Route>
        </Switch>
    )
}

export default AuthenticatedApp;