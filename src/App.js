import React from "react";
import StronaGlowna from "./StronaGlowna";
//import Przepis from "./Przepis";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="aplikacja">
                <h1>Moje vege</h1>
                <h2>Czyli moje wegańskie i wegetarianśkie przepisy</h2>

                <Switch>
                    <Route path="/:adres">
                        {/*<Przepis />*/}
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
