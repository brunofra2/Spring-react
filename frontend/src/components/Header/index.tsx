import logo from "../../assets/img/logo.svg"
import "./style.css"
function Header() {
    return(
        <header> 
        <div className="dsmeta-logo-container">
            <img src = {logo} alt="logo" />
            <h1>SpringReact</h1>
            <p>
                Desenvolvido por
                <a href = "https://www.linkedin.com/in/bruno-alves-carneiro-075b92236"> Bruno Alves carneiro </a>
            </p>
        </div>  
    </header>
    )
 }

export default Header