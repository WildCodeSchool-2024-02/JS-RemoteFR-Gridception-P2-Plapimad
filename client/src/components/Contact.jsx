import "../scss/contact.scss";

function Contact() {
  return (
    <div>
      <section className="backgroundimage" id="backgroundimage">
        <h1 className="titleform">Une idée à suggérer? </h1>
      </section>

      <form>
        <ul className="contact-ul">
          <li>
            <label className="form-lastname"/>
            <input placeholder="Nom*" />
          </li>
          <li>
            <label className="form-name"/>
            <input placeholder="Prénom*" />
          </li>
          <li>
            <label className="form-mail"/>
            <input placeholder="Mail*" />
          </li>
          <li>
            <label className="form-message"/>
            <textarea
              placeholder="Message*"
              name="messagearea"
              id="messagearea"
              cols="30"
              rows="10"
           />
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
