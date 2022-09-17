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
            {stories.map((s)=> <Story usuario={s.usuario} imagem={s.imagem}/>)}
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>

    )
}

{/* <div className="story">
                <div className="imagem">
                    <img src="assets/img/meowed.svg" />
                </div>
                <div className="usuario">
                    meowed
                </div>
            </div>

            <div className="story">
                <div className="imagem">
                    <img src="assets/img/barked.svg" />
                </div>
                <div className="usuario">
                    barked
                </div>
            </div>

            <div className="story">
                <div className="imagem">
                    <img src="assets/img/nathanwpylestrangeplanet.svg" />
                </div>
                <div className="usuario">
                    nathanwpylestrangeplanet
                </div>
            </div>

            <div className="story">
                <div className="imagem">
                    <img src="assets/img/wawawicomics.svg" />
                </div>
                <div className="usuario">
                    wawawicomics
                </div>
            </div>

            <div className="story">
                <div className="imagem">
                    <img src="assets/img/respondeai.svg" />
                </div>
                <div className="usuario">
                    respondeai
                </div>
            </div>

            <div className="story">
                <div className="imagem">
                    <img src="assets/img/filomoderna.svg" />
                </div>
                <div className="usuario">
                    filomoderna
                </div>
            </div>

            <div className="story">
                <div className="imagem">
                    <img src="assets/img/memeriagourmet.svg" />
                </div>
                <div className="usuario">
                    memeriagourmet
                </div>
            </div>

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div> */}