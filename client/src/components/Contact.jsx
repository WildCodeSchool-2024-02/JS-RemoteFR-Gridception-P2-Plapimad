import "../scss/contact.scss";

function Contact() {
  return (
    <div>
      <section className="backgroundimage" id="backgroundimage">
        <h1 className="titleform">Une idée à suggérer? </h1>
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

        <input className="button" required type="submit" value="Envoyez votre demande" />
      </form>
    </div>
  );
}

export default Contact;
