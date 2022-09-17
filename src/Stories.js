function Story(props) {
    return (
        <div className="story">
            <div className="imagem">
                <img src= {props.imagem}/>
            </div>
            <div className="usuario">
                {props.usuario}
            </div>
        </div>
    )
}

export default function Stories() {

    const stories = [
        {usuario: "9gag", imagem: "./assets/img/9gag.svg" },
        {usuario: "meowed" , imagem: "./assets/img/meowed.svg" },
        {usuario: "barked", imagem: "./assets/img/barked.svg"},
        {usuario: "nathanwpylestrangeplanet", imagem: "./assets/img/nathanwpylestrangeplanet.svg"},
        {usuario: "wawawicomics", imagem: "./assets/img/wawawicomics.svg"},
        {usuario: "respondeai", imagem: "./assets/img/respondeai.svg"},
        {usuario: "filomoderna", imagem: "./assets/img/filomoderna.svg"},
        {usuario: "memeriagourmet", imagem: "./assets/img/memeriagourmet.svg"}

    ]
    return (
        <div className="stories">
            {stories.map((s, index)=> <Story key= {index} usuario={s.usuario} imagem={s.imagem}/>)}
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>

    )
}
