import React from "react";

import przepisy from "./przepisy.json";

import { Link } from "react-router-dom";

class StronaGlowna extends React.Component
{
    constructor ( props )
    {
        super( props );
        this.state = {
            wyszukiwarka: ""
        };

        this.zmiana = this.zmiana.bind( this );
    }

    zmiana ( event )
    {
        this.setState( { wyszukiwarka: event.target.value } );
    }

    render ()
    {
        const wyszukane = this.state.wyszukiwarka !== "" ? przepisy.filter( przepis => przepis.nazwa.toLowerCase().indexOf( this.state.wyszukiwarka ) > -1 ) : przepisy;

        return (
            <div className="strona">
                <div className="wyszukiwarka">
                    Wyszukiwarka: <input value={this.state.wyszukiwarka} onChange={this.zmiana} />
                </div>

                {wyszukane && wyszukane.map( ( przepis ) =>
                {
                    const obrazek = require( `./${ przepis.obrazek }` );
                    return (
                        <Link key={przepis.adres} className="link" to={przepis.adres}>
                            <span>{przepis.nazwa}</span>
                            <img src={obrazek} alt={przepis.nazwa} />
                        </Link>
                    );
                } )}

               
            </div>
        );
    }
}

export default StronaGlowna;

