import "../../styles/components/layout/Header.css"

import React from 'react';


const Header = (props) => {
    return (

        <header>
            <title>Hotel Las Olas</title>
            <div className="holder">
                <div>
                    <img className="logo" src="images/logo.png" with="100" alt="Hotel Las Olas" />
                    <h1>Hotel Las Olas</h1>

                </div>
            </div>
        </header>
    );
}

export default Header;