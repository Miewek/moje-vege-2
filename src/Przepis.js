import React from "react";

import przepisy from "./przepisy.json";

import { Link, useParams } from "react-router-dom";

function Przepis ()
{
    let { adres } = useParams();
    const dane = przepisy.find( ( przepis ) => przepis.adres === adres );
    const obrazek = require( `./${ dane.obrazek }` );

    return (
        <div className="przepis">
            <h1>{dane.nazwa}</h1>
            <img className="obrazek" src={obrazek} alt={dane.nazwa} />

            <strong>Składniki</strong>
            <ul className="skladniki">
                {dane.skladniki.map( ( skladnik ) => (
                    <li>{skladnik}</li>
                ) )}
            </ul>

            <span className="czas">Czas przygotowania: {dane.czas}</span>
            <span className="porcje">Porcje: {dane.porcje}</span>

            <strong>Przygotowanie</strong>
            <ol className="przygotowanie">
                {dane.przygotowanie.map( ( krok ) => (
                    <li>{krok}</li>
                ) )}
            </ol>

            <Link className="powrot" to={"/"}>
                Powrót na stronę główną
            </Link>
        </div>
    );
}

export default Przepis;



