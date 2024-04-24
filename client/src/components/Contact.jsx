import { useState } from "react";
import "../scss/contact.scss";
import Popup from "./Popup";

function Contact() {
  const [showPopup, setShowPopup] = useState(false);

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChangeFirstName = (event) => {
    if (event.target.value !== null) {
      setFirstName(event.target.value);
    }
  };

  const handleChangeLastName = (event) => {
    if (event.target.value !== null) {
      setLastName(event.target.value);
    }
  };

  const handleChangeEmail = (event) => {
    if (event.target.value !== null) {
      setEmail(event.target.value);
    }
  };

  const handleChangeMessage = (event) => {
    if (event.target.value !== null) {
      setMessage(event.target.value);
    }
  };

  const togglePopup = () => {
    if (firstName !== "" && email !== "" && lastName !== "" && message !== "") {
      setShowPopup(true);
    }
  };

  const togglePopupClose = () => {
    setShowPopup(false);
    window.location.reload();
  };

  return (
    <div>
      <section className="backgroundimage" id="backgroundimage">
        <h1 className="titleform">Une idée à suggérer ? </h1>
      </section>

      <form onSubmit={(event) => event.preventDefault()}>
        <input
          className="nom-container"
          required
          placeholder="Nom*"
          value={lastName}
          onChange={handleChangeLastName}
        />

        <input
          required
          placeholder="Prénom*"
          value={firstName}
          onChange={handleChangeFirstName}
        />

        <input
          className="mail-container"
          required
          placeholder="Mail*"
          value={email}
          onChange={handleChangeEmail}
        />

        <textarea
          required
          className="textarea-container"
          placeholder="Message*"
          name="messagearea"
          id="messagearea"
          cols="30"
          rows="10"
          value={message}
          onChange={handleChangeMessage}
        />

        <button className="button" onClick={togglePopup}>
          Envoyez votre demande
        </button>

        {showPopup && (
          <div className="popupContainer">
            <Popup />
            <button className="closePopup" onClick={togglePopupClose}>
              Confirmer
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Contact;
