import notificacao from "../../assets/img/notification-icon.svg"
import "./style.css"
function NotificationButton() {
    return(
        <div className="Botao-notificacao">
            <img src={notificacao} alt="Notificar"></img>
        </div>
    )
 }

export default NotificationButton
