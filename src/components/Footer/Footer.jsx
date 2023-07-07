import "./Footer.css"

const Footer = () =>{
    return(
        <div className="footerContainer" id="contact">
            <div className="footerContact">
                <h3>Contactanos:</h3>
                <div className="footerSubText">
                    <p>contacto@contacto.com</p>
                    <p>+598 - 123456789</p>
                    <p>Montevideo, Uruguay</p>
                </div>
            </div>
            <div className="footerPaid">
                <h3>Medios de pagos:</h3>
                <img className="imgMPagos" src="https://firebasestorage.googleapis.com/v0/b/dulce-locura.appspot.com/o/General%2Fmp.png?alt=media&token=cf809f8b-30ee-439b-85f5-1f812274b28e" alt="Mercado pago" />
                <img className="imgMPagos" src="https://firebasestorage.googleapis.com/v0/b/dulce-locura.appspot.com/o/General%2Fvisa.png?alt=media&token=40bfe0de-a559-49b4-b1b4-42e7437620df" alt="Visa" />
                <img className="imgMPagos" src="https://firebasestorage.googleapis.com/v0/b/dulce-locura.appspot.com/o/General%2Fmc.png?alt=media&token=b4b0a000-34a4-4432-afd6-0b34b583b624" alt="MasterCard" />
            </div>
        </div>
    )
}

export default Footer;