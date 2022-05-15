import React, { useState } from 'react';
import axios from 'axios';

import "../styles/components/pages/ContactoPage.css"

const ContactoPage = (props) => {


    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: '',
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`, formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }



    return (
        <main className="holder">
            <div className="columna left">
                <h2>Formulario de contacto</h2>

                <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit} >
                    <p>
                        <label>Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange} />
                    </p>
                    <p>
                        <label>Telefono</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                    </p>
                    <p>
                        <label>Comentario</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>
                    <p className="centrar"><input type="submit" value="Enviar" /></p>
                </form>

                {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}

            </div>
            <div className="columna right">
                <h2>Otras vias de contacto</h2>
                <p>Tambien puedes contactarte con nosotros usando los siguientes medios:</p>
                <ul>
                    <li>Telefono: 4444-4444</li>
                    <li>Email: contacto@lasolashotel.com.ar</li>
                    <li>Redes Sociales:
                        <a href="https://www.instagram.com" target="_blank"><img height="25" src="images/Instagram-logo.png" alt="" /></a>
                        <a href="https://www.facebook.com" target="_blank"><img height="25" src="images/facebook-logo.png" alt="" /></a>
                        <a href="https://www.twitter.com" target="_blank"><img height="25" src="images/Twitter-logo.png" alt="" /></a>
                        <a href="https://www.linkedin.com/" target="_blank"><img height="25" src="images/LinkedIn_logo_initials.png" alt="" /></a>
                        <a href="https://www.whatsapp.com/" target="_blank"><img height="25" src="images/logowhatsapp.png" alt="" /></a>
                        <a href="https://web.telegram.org/" target="_blank"><img height="25" src="images/logotelegram.png" alt="" /></a></li>
                </ul>
            </div>
        </main>
    );
}

export default ContactoPage;
