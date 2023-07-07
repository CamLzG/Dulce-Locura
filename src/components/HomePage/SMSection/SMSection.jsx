import "./SMSection.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const SMSection = () => {
    return(
        <section>
            <div className="smContainer" data-aos="fade-up"data-aos-duration="1000">
                <p className="smText">¡No olvides seguirnos en nuestras redes sociales para no perderte las novedades!</p>
                <div className="smImgContainer">
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><img className="smImg" src="https://firebasestorage.googleapis.com/v0/b/dulce-locura.appspot.com/o/General%2Fred%20(2).png?alt=media&token=a1ce1108-4f43-4167-83f4-be8280b61911" alt="facebook" /></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img className="smImg" src="https://firebasestorage.googleapis.com/v0/b/dulce-locura.appspot.com/o/General%2Fred%20(3).png?alt=media&token=b73b2f2e-1ea8-4566-a0ba-22b5366170f4" alt="instagram" /></a>
                    <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer"><img className="smImg" src="https://firebasestorage.googleapis.com/v0/b/dulce-locura.appspot.com/o/General%2Fred%20(1).png?alt=media&token=b29ccbf2-5252-4a09-a80a-2db82aa59fac" alt="Tiktok" /></a>
                </div>
            </div>
        </section>
    )
}

export default SMSection;