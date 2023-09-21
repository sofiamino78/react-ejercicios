import { useModal } from "../hooks/useModal";
import ContactForm from "./ContactForm";
import Modal from "./Modal";
import ModalPortal from "./ModalPortal";

const Modals = () => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(true);
    const [isOpenModal2, openModal2, closeModal2] = useModal(false);
    const [isOpenContact, openModalContact, closeModalContact] = useModal(false);
    const [isOpenPortal, openModalPortal, closeModalPortal] = useModal(false);
    return(
        <div>
            <h2>Modales</h2>
            <button onClick={openModal1}>Modal 1</button>
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                <h3>Modal 1</h3>
                <p>Hola este es el contenido de mi modal 1</p>
                <img src="https://www.britishcouncil.org.mx/sites/default/files/animales_en_ingles.jpeg" width="400px" height="400px" alt="Perrito"/>
            </Modal>
            <button onClick={openModal2}>Modal 2</button>
            <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
                <h3>Otro Modal</h3>
                <p>
                    lorem ipsum i have to find you tell you i need you
                </p>
                <img src="https://gcdn.emol.cl/vida-salvaje/files/2015/07/animales-miniatura-1.jpg" alt="Perrito 2"/>
            </Modal>
            <button onClick={openModalContact}>Modal Contacto</button>
            <Modal isOpen={isOpenContact} closeModal={closeModalContact}>
                <ContactForm/>
            </Modal>
            <button onClick={openModalPortal}>Modal en Portal</button>
            <ModalPortal isOpen={isOpenPortal} closeModal={closeModalPortal}>
                <h3>Modal en Portal</h3>
                <p>
                    Este es el contenido de un modal que carga en otro nodo del DOM 
                    difrente a donde carga nuestra app de React, gracias a 
                    un React Portal.
                </p>
                <img src="https://usil-blog.s3.amazonaws.com/PROD/blog/image/tecnologia-informacion-empresas.jpg" alt="Tecnología"/>
            </ModalPortal>
            
        </div>
    )
}

export default Modals;