import { useState } from "react";
import "../scss/contact.scss";
import Popup from "./Popup";


function Contact() {
const [showPopup, setShowPopup] = useState(false);

const togglePopup = (() => {
  setShowPopup(!showPopup);  
});
const togglePopupClose = (() => {
  setShowPopup(showPopup);
  if (!showPopup){
    window.location.reload();
  }
})
 
  return (
    <div>
      <section className="backgroundimage" id="backgroundimage">
        <h1 className="titleform">Une idée à suggérer ? </h1>
      </section>

      <form>
        <input className="nom-container" required placeholder="Nom*" />

        <input required placeholder="Prénom*" />

        <input className="mail-container" required placeholder="Mail*" />

        <textarea required
          className="textarea-container"
          placeholder="Message*"
          name="messagearea"
          id="messagearea"
          cols="30"
          rows="10"
        />
      
    <input className="button" onClick={togglePopup} value="Envoyez votre demande" />
    
{/* Afficher Popup si tous les champs sont renseignés */}
    
    {showPopup && (
    <div className="popupContainer">
      <Popup />
      <button className="closePopup" onClick={togglePopupClose}>Confirmer</button>
    </div>
  )}
      </form>


    </div>
  );
}

export default Contact;
