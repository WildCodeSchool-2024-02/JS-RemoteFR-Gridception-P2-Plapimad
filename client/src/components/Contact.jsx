import "../scss/contact.scss"
function Contact () {

    return(
        <div>
          <section className="backgroundimage"><h1>Nous contacter</h1></section>
          
        <form action="mon formulaire de contact" method="post">
        <ul>
    <li>
      <label className="lastname"></label>
      <input placeholder="Nom*"  />
    </li>
    <li>
      <label className="name"></label>
      <input placeholder="Prénom*" />
    </li>
    <li>
      <label className="mail"></label>
      <input placeholder="Mail*" />
    </li>
        <li>
      <label className="message"></label>
      <textarea  placeholder="Message*"name="messagearea" id="messagearea" cols="30" rows="10"></textarea >
    </li>
      <li>        
      <input className="button" class="styled" type="button" value="Envoyez votre demande" />        
      </li>
    </ul>
        </form>
        </div>

    )

}

export default Contact;