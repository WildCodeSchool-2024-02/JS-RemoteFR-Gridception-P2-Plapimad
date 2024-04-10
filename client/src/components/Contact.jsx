function Contact () {

    return(
        <div><h1>Nous contacter</h1>
        <form action="mon formulaire de contact" method="post">
        <ul>
    <li>
      <p className="lastname">Nom</p>
      <input  />
    </li>
    <li>
      <p className="name">Prénom</p>
      <input  />
    </li>
    <li>
      <p className="mail">E-mail</p>
      <input  />
    </li>
        <li>
      <p className="message">Message</p>
      <input  />
    </li>
    </ul>
        </form>
        </div>

    )

}

export default Contact;