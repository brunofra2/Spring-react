import axios from "axios"
import notificacao from "../../assets/img/notification-icon.svg"
import { BASE_URL } from "../../utils/request"
import "./style.css"
type Props ={
    saleId : number
}

function handleclick(id : number){
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(Response => {
    console.log(Response.data)
    })
}

function NotificationButton({saleId} : Props) {
    return(
        <div className="Botao-notificacao" onClick={() => {handleclick(saleId)}}>
            <img src={notificacao} alt="Notificar"></img>
        </div>
    )
 }

export default NotificationButton
