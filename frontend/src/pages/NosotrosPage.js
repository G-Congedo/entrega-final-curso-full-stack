import "../styles/components/pages/NosotrosPage.css"

import React from 'react';

const NosotrosPage = (props) => {
    return (
        <section className="holder">
            <div className="historia">
                <h2>Nosotros</h2>
                <div className="imgnosotros"><img src="images/desk.jpg" width="60%" alt="" /></div>
                
                <p className="loremnosotros">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                    qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <h2>Nuestro Staff</h2>
            <div className="contenedorstaff">
                <div className="staff">
                    <img className="cara" src="images/cara1.jpg" width="75" alt="" />
                    <div className="nombre">Mar Paez</div>
                    <div className="cargo">Propietaria</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="staff">
                    <img className="cara" src="images/cara2.jpg" width="75" alt=""/>
                    <div className="nombre">Juan Juarez</div>
                    <div className="cargo">Gerente Gral.</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="staff">
                    <img className="cara" src="images/cara3.jpg" width="75" alt="" />
                    <div className="nombre">Aldo Alvarez</div>
                    <div className="cargo">Chef</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="staff">
                    <img className="cara" src="images/cara4.jpg" width="75" alt=""/>
                    <div className="nombre">Sofia Suarez</div>
                    <div className="cargo">Gerente de Entretenimiento</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                
            </div>
        </section>
    );
}

export default NosotrosPage;
