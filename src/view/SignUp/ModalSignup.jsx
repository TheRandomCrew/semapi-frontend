import React from 'react';
import { Link } from 'react-router-dom'

import SEO from './styles/styles.module.css';

const ModalSignup = ({ layer }) => {
    return (
        <div className={`${layer ? `d-flex`:`d-none`} ${SEO.lForm} ${SEO.modal}`}>
            <Link to="/">
                <h3>¡Gracias por registrarte!</h3>
                <h4>Bienvenido a la familia <strong>Seosemapi</strong><span>!</span> estamos felices de recibirte</h4>
                <p>Pronto recibiras un link de confirmación a tu correo</p>
            </Link>
                <div className={SEO.linkTo}>
                    ¿Ya conoces nuestras ofertas especiales? <Link to="/">Ver</Link>
                </div>
        </div>
    )
}

export default ModalSignup;