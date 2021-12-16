import React from "react";
import {Link } from 'react-router-dom'
import './notfound.css'

export default function NotFoundPage() {
    return(
        <div className="NotFoundPage">
            {/* <!--dust particel--> */}
            <div>
            <div class="starsec"></div>
            <div class="starthird"></div>
            <div class="starfourth"></div>
            <div class="starfifth"></div>
            </div>
            {/* <!--Dust particle end---> */}

            <h1>404</h1>
            <p>Oops! Página não encontrada.</p>
            <Link class="button" to="/"> Volte a página inicial.</Link>
        </div>
    )
}

