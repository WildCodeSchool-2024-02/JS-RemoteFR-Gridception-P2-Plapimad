import "../scss/contact.scss"
function Contact () {

    return(
        <div>
          <section className="backgroundimage"><h1>Nous contacter</h1></section>
          
        <form action="mon formulaire de contact" method="post">
        <ul>
    <li>
      <label className="lastname">Nom</label>
      <input placeholder="Nom"  />
    </li>
    <li>
      <label className="name">Prénom</label>
      <input placeholder="Prénom" />
    </li>
    <li>
      <label className="mail">E-mail</label>
      <input placeholder="Mail" />
    </li>
        <li>
      <label className="message">Message</label>
      <textarea name="messagearea" id="messagearea" cols="30" rows="10"></textarea >
    </li>
      <li>
      <input type="submit" value="envoyer" />
      </li>
    </ul>
        </form>
        </div>

    )

}

export default Contact;