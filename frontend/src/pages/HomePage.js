import "../styles/components/pages/HomePage.css"

import React from 'react';

const HomePage = (props) => {
    return (
        <main className="holder">
            <h2>Bienvenidos</h2>
            <div className="homeimg">
                <img src="images/frente.jpg" alt="Portada" />
            </div>
            
                <div className="cuerpohome">
                    
                    <p className="loremhome">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                


                <div className="premiohome">
                    <img height={200} src="images/premio.png" alt="Portada" />
                </div>
                </div>
            
        </main>
    );
}

export default HomePage;
