function Sugestao(props) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={props.img} />
                <div className="texto">
                    <div className="nome">{props.nome}</div>
                    <div className="razao">{props.razao}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    )

}
export default function Sugestoes() {

    const sugestoes = [
        {img:"./assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes", razao: "Segue você"},
        {img:"./assets/img/chibirdart.svg", nome: "chibirdart", razao: "Segue você"},
        {img:"./assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar", razao: "Novo no Instagram"},
        {img:"./assets/img/adorable_animals.svg", nome: "adorable_animals", razao: "Segue você"},
        {img: "./assets/img/smallcutecats.svg", nome: "smallcutecats", razao: "Segue você"}
    ]
    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {sugestoes.map((s, index) => <Sugestao key= {index} img={s.img} nome={s.nome} razao={s.razao} />)}

        </div>

    )
}