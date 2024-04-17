import "../scss/contact.scss";

function Contact() {
  return (
    <div>
      <section className="backgroundimage" id="backgroundimage">
        <h1 className="Title-form">Une idée à suggérer? </h1>
      </section>

      <form>
        <ul className="contact-ul">
          <li>
            <label className="form-lastname"></label>
            <input placeholder="Nom*" />
          </li>
          <li>
            <label className="form-name"></label>
            <input placeholder="Prénom*" />
          </li>
          <li>
            <label className="form-mail"></label>
            <input placeholder="Mail*" />
          </li>
          <li>
            <label className="form-message"></label>
            <textarea
              placeholder="Message*"
              name="messagearea"
              id="messagearea"
              cols="30"
              rows="10"
            ></textarea>
          </li>
          <li className="button-li">
            <input
              className="button"
              type="submit"
              value="Envoyez votre demande"
            />
          </li>
        </ul>
      </form>
    </div>
  );
}

export default Contact;
