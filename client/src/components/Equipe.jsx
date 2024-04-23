import { Link } from "react-router-dom";
import AbdelDjalil from "../assets/images/AbdelDjalil.png";
import pedro from "../assets/images/pedro.jpg";
import Maeva from "../assets/images/Maeva.jpg";
import lauryn from "../assets/images/lauryn.png";


function Equipe () {
    return( <div>
    <nav className= "EquipeNav">
        <Link to = "/">Accueil</Link>
    </nav>
    <h1>L'équipe Plapimad</h1>
    <section className=""></section>
    <img src={pedro} alt="pedro_img" />
    <img src={Maeva} alt="Maeva_img" />
    <img src={AbdelDjalil} alt="AbdelDjalil_img" />
    <img src={lauryn} alt="lauryn_img" />
    
    </div>

    )
}

export default Equipe;