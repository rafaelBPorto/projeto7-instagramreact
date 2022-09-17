function Post(props) {
    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.postImgUsuario}/>
                    {props.postUsuario}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={props.postImg} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src="assets/img/respondeai.svg" />
                    <div className="texto">
                        Curtido por <strong>{props.curtidaUsuario}</strong> e <strong>outras {props.curtidaQuantidade} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Posts() {
    const post = [
        {
            postUsuario: "meowed",
            postImgUsuario: "./assets/img/meowed.svg",
            postImg: "./assets/img/gato-telefone.svg",
            curtidaUsuario: "respondeai",
            curtidaImg: "./assets/img/respondeai.svg",
            curtidaQuantidade: 101523
        },

        {
            postUsuario: "barked",
            postImgUsuario: "assets/img/barked.svg",
            postImg: "assets/img/dog.svg",
            curtidaUsuario: "assets/img/adorable_animals.svg",
            curtidaImg: "adorable_animals",
            curtidaQuantidade: 99159
        },
    ]

    return (
        <div className="posts">
            {post.map((p) => <Post
                postUsuario={p.postUsuario}
                postImgUsuario={p.postImgUsuario}
                postImg={p.postImg}
                curtidaUsuario={p.curtidaUsuario}
                curtidaImg={p.curtidaImg}
                curtidaQuantidade={p.curtidaQuantidade}
            />)}
        </div>
    )
}

{/* <div className="post">
<div className="topo">
    <div className="usuario">
        <img src="assets/img/meowed.svg" />
        meowed
    </div>
    <div className="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
    </div>
</div>

<div className="conteudo">
    <img src="assets/img/gato-telefone.svg" />
</div>

<div className="fundo">
    <div className="acoes">
        <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
            <ion-icon name="bookmark-outline"></ion-icon>
        </div>
    </div>

    <div className="curtidas">
        <img src="assets/img/respondeai.svg" />
        <div className="texto">
            Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
        </div>
    </div>
</div>
</div>

<div className="post">
<div className="topo">
    <div className="usuario">
        <img src="assets/img/barked.svg" />
        barked
    </div>
    <div className="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
    </div>
</div>

<div className="conteudo">
    <img src="assets/img/dog.svg" />
</div>

<div className="fundo">
    <div className="acoes">
        <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
            <ion-icon name="bookmark-outline"></ion-icon>
        </div>
    </div>

    <div className="curtidas">
        <img src="assets/img/adorable_animals.svg" />
        <div className="texto">
            Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
        </div>
    </div>
</div>
</div> */}