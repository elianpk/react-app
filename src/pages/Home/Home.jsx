import React from "react";
import {Link} from "react-router-dom"

const Home = props => (
    <div className="Home">
        <h1>Component Home</h1>
        <nav>
            <ul>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/dashboard'>Dashboard (Protected)</Link></li>
            </ul>
        </nav>
    </div>
)

export default Home