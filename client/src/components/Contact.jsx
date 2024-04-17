import "../scss/contact.scss";

function Contact () {

    return(
        <div>
          <section className="backgroundimage"><h1>Une idée à suggérer? </h1></section>
          
        <form  >
        <ul className= "contact-ul">
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
      <input className="button"  type="submit" value="Envoyez votre demande" />        
      </li>
    </ul>
        </form>
        </div>

    )

}

export default Contact;