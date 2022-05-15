import "../styles/components/pages/HabitacionesPage.css"

import React from 'react';

const HabitacionesPage = (props) => {
    return (
        <section className="holder">
            <h2>Habitaciones</h2>


<h3 class="habitacion">Standard</h3>
<p class="habitaciondesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, a nulla modi laborum similique illum suscipit
    quam eaque aspernatur molestias officiis, eum iste voluptas sed numquam earum, beatae eos facilis.</p>

<div class="galeria">
    <div class="foto">
        <a href="images/hab9.jpeg" target="_blank"><img src="images/hab9.jpeg" alt="S1"/></a>
    </div>
    <div class="foto">
        <a href="images/hab2.jpeg" target="_blank"><img src="images/hab2.jpeg" alt="S2"/></a>
    </div>
    <div class="foto">
        <a href="images/hab7.jpeg" target="_blank"><img src="images/hab7.jpeg" alt="S3"/></a>
    </div>
    <div class="foto">
        <a href="images/hab12.jpeg" target="_blank"><img src="images/hab12.jpeg" alt="S4"/></a>
    </div>
    
</div>
<hr/>

<h3 class="habitacion">Deluxe</h3>
<p class="habitaciondesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas adipisci expedita culpa nihil? Ipsum eos et perferendis quaerat mollitia possimus exercitationem aliquid earum enim dolore voluptatem sint, omnis, illum voluptatum.</p>

<div class="galeria">
    <div class="foto">
        <a href="images/hab1.jpg" target="_blank"><img src="images/hab1.jpg" alt="d1"/></a>
    </div>
    <div class="foto">
        <a href="images/hab6.jpeg" target="_blank"><img src="images/hab6.jpeg" alt="d2"/></a>
    </div>
    <div class="foto">
        <a href="images/hab3.jpeg" target="_blank"><img src="images/hab3.jpeg" alt="d3"/></a>
    </div>
    <div class="foto">
        <a href="images/hab13.jpeg" target="_blank"><img src="images/hab13.jpeg" alt="d4"/></a>
    </div>
    
</div>
<hr/>

<h3 class="habitacion">Suite Presidencial</h3>
<p class="habitaciondesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit pariatur excepturi numquam rerum illo odio a dolores! Debitis deserunt officiis dolorum non tempora. Est voluptate dolores quas eligendi eum at!</p>
<div class="galeria">
    <div class="foto">
        <a href="images/hab4.jpeg" target="_blank"><img src="images/hab4.jpeg" alt="p1"/></a>
    </div>
    <div class="foto">
        <a href="images/hab5.jpeg" target="_blank"><img src="images/hab5.jpeg" alt="p2"/></a>
    </div>
    <div class="foto">
        <a href="images/hab11.jpeg" target="_blank"><img src="images/hab11.jpeg" alt="p3"/></a>
    </div>
    <div class="foto">
        <a href="images/hab14.jpeg" target="_blank"><img src="images/hab14.jpeg" alt="p4"/></a>
    </div>
</div>
        </section>
    );
}

export default HabitacionesPage;