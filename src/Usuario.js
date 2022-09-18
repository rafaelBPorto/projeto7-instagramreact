import React from "react"

function InformacoesUsuario(props) {

    function editarNome() {

        setNome(mudarNome())

        function mudarNome() {
            let novoNome = prompt("Qual o seu nome?")
            while (novoNome === "") {
                novoNome = prompt("Nome Inválido. Insira outro nome:")
            }

            return novoNome;
        }

    }

    function editarImg() {

        setImg(mudarImg())

        function mudarImg() {
            let novaImg = prompt("Insira o link da nova imagem")
            while (novaImg === "") {
                novaImg = prompt("Link Inválido. Insira outro link")
            }

            return novaImg;
        }

    }

    const [nome, setNome] = React.useState(props.nome)
    const [img, setImg] = React.useState(props.img)

    return (
        <div className="usuario">
            <img src={img} onClick={editarImg} />
            <div className="texto">
                <strong>{props.login}</strong>
                <span>
                    {nome}
                    <ion-icon name="pencil" onClick={editarNome}></ion-icon>
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
            {usuarioInfo.map((u, index) => <InformacoesUsuario key={index} login={u.login} nome={u.nome} img={u.img} />)}
        </div>
    )
}

