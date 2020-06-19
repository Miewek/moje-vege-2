import React from "react";
import StronaGlowna from "./StronaGlowna";
import Przepis from "./Przepis";
import Omnie from "./Omnie";
import Kontakt from "./Kontakt";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App ()
{
    return (
        <Router>
            <header className="naglowek">
                <div className="menu">
                    <Link className="menulink" to={"/"}>
                        Strona główna
                    </Link>
                    <Link className="menulink" to={"/omnie"}>
                        O mnie
                    </Link>
                    <Link className="menulink" to={"/kontakt"}>
                        Kontakt
                    </Link>
                </div>
            </header>

            <div className="aplikacja">
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