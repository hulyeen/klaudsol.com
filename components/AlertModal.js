import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "../styles/Modal.module.css"

export default function AlertModal({show, onClose, modalMainMessage, modalSubMessage, imgURL}){
    // initialize constants
    const [isBrowser, setIsBrowser] = useState(false);


    useEffect(()=> {
        setIsBrowser(true);

        // Enable ESC key to close the modal
        const close = (e) => {
            if(e.keyCode === 27){
              onClose();
            }
          }
          window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
        
    }, []);

    const handleClose = (e) =>{
        e.preventDefault();
        onClose();
    }

    // content of modal
    const modalContent = show ? (
        <div className={styles.alertModal_overlay}>
            <div className={styles.alertModal}>
                <div className={styles.alertModal_header}>
                    <a href="#" onClick={handleClose}>
                        <button className={styles.alertModal_imgbtn}>
                            <img className={styles.alertModal_imgclose}></img>
                        </button>
                    </a>
                </div>
                <img src={imgURL} className="col-md-4 col-xs-4"></img>
                <div className="container">
                   <h3 className="col-xl-8 col-md-8 col-sm-8 col-xs-8">{modalMainMessage}</h3> 
                   <p className="col-xl-8 col-md-4 col-sm-8 col-xs-8">{modalSubMessage}</p>
                </div>
            </div>
        </div>
    ) : null;

    if (isBrowser) {
        return ReactDOM.createPortal(
          modalContent,
          document.getElementById("modal-root")
        );
      } else {
        return null;
      }
}