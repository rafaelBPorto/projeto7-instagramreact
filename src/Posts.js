import React from "react"
function Post(props) {

    const [salvarPost, setSalvarPost] = React.useState("bookmark-outline")
    const [curtirPost, setCurtirPost] = React.useState("heart-outline")
    const [cor, setCor] = React.useState("black")
    const [like, setLike] = React.useState(props.curtidaQuantidade)

    function postSalvo() {
        setSalvarPost("bookmark")
    }

    function curtir() {
        if (cor === "black") {
            setCurtirPost("heart")
            setCor("red")
            setLike(like + 1)
        }else{
            setCurtirPost("heart-outline")
            setCor("black")
            setLike(like - 1) 
        }

    }

    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.postImgUsuario} />
                    {props.postUsuario}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={props.postImg} onClick={curtir} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name={curtirPost} style={{ color: `${cor}` }} onClick={curtir}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={salvarPost} onClick={postSalvo}></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.curtidaImg} />
                    <div className="texto">
                        Curtido por <strong>{props.curtidaUsuario}</strong> e <strong>outras {like} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Posts() {
    const posts = [
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
            postImgUsuario: "./assets/img/barked.svg",
            postImg: "./assets/img/dog.svg",
            curtidaUsuario: "adorable_animals",
            curtidaImg: "./assets/img/adorable_animals.svg",
            curtidaQuantidade: 99159
        },
    ]

    return (
        <div className="posts">
            {posts.map((p, index) => <Post
                key={index}
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
