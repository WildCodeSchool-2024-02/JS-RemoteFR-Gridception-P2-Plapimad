import "../scss/contact.scss";

function Contact() {
  return (
    <div>
      <section className="backgroundimage" id="backgroundimage">
        <h1 className="titleform">Une idée à suggérer? </h1>
      </section>

      <form>
        <input placeholder="Nom*" />

        <input placeholder="Prénom*" />

        <input placeholder="Mail*" />

        <textarea
          placeholder="Message*"
          name="messagearea"
          id="messagearea"
          cols="30"
          rows="10"
        />

        <input className="button" type="submit" value="Envoyez votre demande" />
      </form>
    </div>
  );
}

export default Contact;
