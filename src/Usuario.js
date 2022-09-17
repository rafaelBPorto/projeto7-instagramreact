function InformacoesUsuario(props) {
    return (
        <div className="usuario">
            <img src={props.img} />
            <div className="texto">
                <strong>{props.login}</strong>
                <span>
                    {props.nome}
                    <ion-icon name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}

export default function Usuario() {

    const usuarioInfo = [
        { login: "catanacomics", nome: "Catana", img: "./assets/img/catanacomics.svg" }
    ]
    return (
        <div>
            {usuarioInfo.map((u, index)=> <InformacoesUsuario key= {index} login = {u.login} nome = {u.nome} img = {u.img} />)}
        </div>
    )
}

{/* <img src="./assets/img/catanacomics.svg" />
<div className="texto">
    <strong>catanacomics</strong>
    <span>
        Catana
        <ion-icon name="pencil"></ion-icon>
    </span>
</div> */}