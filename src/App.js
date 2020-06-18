import React from "react";
import StronaGlowna from "./StronaGlowna";
import Przepis from "./Przepis";
import Omnie from "./Omnie";
import Kontakt from "./Kontakt";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="aplikacja">
                <h1>Moje vege</h1>
                <h2>Czyli moje wegańskie i wegetarianśkie przepisy</h2>

                <Switch>
                    <Route path="/kontakt">
                        <Kontakt />
                    </Route>
                    <Route path="/omnie">
                        <Omnie />
                    </Route>
                    <Route path="/:adres">
                        <Przepis />
                    </Route>
                    <Route path="/">
                        <StronaGlowna />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
