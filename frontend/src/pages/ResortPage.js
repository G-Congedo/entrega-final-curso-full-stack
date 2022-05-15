import "../styles/components/pages/ResortPage.css"

import React from 'react';

const ResortPage = (props) => {
    return (
        <section className="holder">
<h2>Resort</h2>

<div class="servicios">
    <img src="images/p2.jpeg" alt="Habitacion"/>
    <div class="info">
        <h4>Confortables Habitaciones</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio at numquam a necessitatibus culpa?
            Saepe,
            repellat id? Placeat tempora dignissimos esse recusandae omnis dolore, porro, modi alias dolores
            sunt
            qui.</p>
    </div>
</div>

<div class="servicios">
    <img src="images/resto.jpg" alt="Resto"/>
    <div class="info">
        <h4>Restaurant Gourmet</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, assumenda optio quasi perspiciatis,
            deleniti adipisci rem hic possimus eaque dolore pariatur cum. Eligendi earum sed laborum enim
            laudantium
            vel. Harum.</p>
    </div>
</div>

<div class="servicios">
    <img src="images/piscina.jpg" alt="Resort"/>
    <div class="info">
        <h4>Piscinas</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus alias atque dolor. Dolorem minus
            quia
            architecto blanditiis perspiciatis incidunt ipsum accusamus modi, officiis hic enim ut ea aperiam
            non
            odit!</p>
    </div>
</div>

<div class="servicios">
    <img src="images/sauna.jpg" alt="Sauna"/>
    <div class="info">
        <h4>Spa & Sauna</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel in exercitationem consectetur commodi
            quibusdam illo est minus magnam nisi accusantium ullam unde, expedita minima ea, facilis obcaecati
            architecto esse. Placeat?</p>
    </div>
</div>
        </section>
    );
}

export default ResortPage;