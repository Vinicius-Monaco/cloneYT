import React from "react"
import '../styles/Aside.css'
import ViniImg from '../imgs/vini.jpg'

function Button(props) {
    return (
        <button className="button">
            <div className="symbolButton">
                <i class={props.icon}></i>
            </div>
            <div className="textButton">
                <span>{props.value}</span>
            </div>
        </button>
    )
}

function Subscription(props) {
    return (
        <button className="button">
            <div className="symbolButton">
                <img className="img" src={props.img}></img>
            </div>
            <div className="textButton">
                <span>{props.value}</span>
            </div>
        </button>
    )
}

function Aside() {
    return (
        <div className="asideBar">
            <div className="buttons">
                <div className="layButtons1">
                    <Button icon="bi bi-house-door-fill" value="[DESCRIPTION]" />
                    <Button icon="bi bi-house-door-fill" value="[DESCRIPTION]" />
                    <Button icon="bi bi-house-door-fill" value="[DESCRIPTION]" />
                </div>
                <hr />
                <div className="layButtons2">
                    <Button icon="bi bi-house-door-fill" value="[DESCRIPTION]" />
                    <Button icon="bi bi-house-door-fill" value="[DESCRIPTION]" />
                    <Button icon="bi bi-house-door-fill" value="[DESCRIPTION]" />
                    <Button icon="bi bi-house-door-fill" value="[DESCRIPTION]" />
                    <Button icon="bi bi-house-door-fill" value="[DESCRIPTION]" />
                    <Button icon="bi bi-house-door-fill" value="[DESCRIPTION]" />
                </div>
                <hr />
                <div className="areaWithLabels">
                    <div className="desc">
                        <span>
                            Subscription
                        </span>
                    </div>
                    <div className="layButtons3">
                        <Subscription img={ViniImg} value="FlarpasGames" />
                        <Subscription img={ViniImg} value="FlarpasGames" />
                        <Subscription img={ViniImg} value="FlarpasGames" />
                        <Subscription img={ViniImg} value="FlarpasGames" />
                        <Subscription img={ViniImg} value="FlarpasGames" />
                        <Subscription img={ViniImg} value="FlarpasGames" />
                        <Subscription img={ViniImg} value="FlarpasGames" />
                        <Button icon="bi bi-house-door-fill" value="[DESCRIPTION]" />
                    </div>
                </div>
                <hr />
                <div className="areaWithLabels">
                    <div className="desc">
                        <span>
                            Explore
                        </span>
                    </div>
                    <div className="layButtons4">
                        <Button icon="bi bi-house-door-fill" value="[DESCRIPTION]" />
                        <Button icon="bi bi-house-door-fill" value="[DESCRIPTION]" />
                        <Button icon="bi bi-house-door-fill" value="[DESCRIPTION]" />
                        <Button icon="bi bi-house-door-fill" value="[DESCRIPTION]" />
                        <Button icon="bi bi-house-door-fill" value="[DESCRIPTION]" />
                        <Button icon="bi bi-house-door-fill" value="[DESCRIPTION]" />
                        <Button icon="bi bi-house-door-fill" value="[DESCRIPTION]" />
                        <Button icon="bi bi-house-door-fill" value="[DESCRIPTION]" />
                        <Button icon="bi bi-house-door-fill" value="[DESCRIPTION]" />
                    </div>
                </div>
                <hr />
                <div className="areaWithLabels">
                    <div className="desc">
                        <span>
                            Explore
                        </span>
                    </div>
                    <div className="layButtons4">
                        <Button icon="bi bi-house-door-fill" value="[DESCRIPTION]" />
                        <Button icon="bi bi-house-door-fill" value="[DESCRIPTION]" />
                        <Button icon="bi bi-house-door-fill" value="[DESCRIPTION]" />
                        <Button icon="bi bi-house-door-fill" value="[DESCRIPTION]" />
                    </div>
                </div>
                <hr />
                <div className="layButtons2">
                    <Button icon="bi bi-house-door-fill" value="[DESCRIPTION]" />
                    <Button icon="bi bi-house-door-fill" value="[DESCRIPTION]" />
                    <Button icon="bi bi-house-door-fill" value="[DESCRIPTION]" />
                    <Button icon="bi bi-house-door-fill" value="[DESCRIPTION]" />
                    <Button icon="bi bi-house-door-fill" value="[DESCRIPTION]" />
                    <Button icon="bi bi-house-door-fill" value="[DESCRIPTION]" />
                </div>
                <hr />
                <div className="sobre">
                    <div className="tags">
                        <ul>
                            <li>
                                <a>Sobre</a>
                                <a>Imprensa</a>
                            </li>
                            <li>
                                <a>Direitos Autorais</a>
                            </li>
                            <li>
                                <a>Entre em contato</a>
                            </li>
                            <li>
                                <a>Criadores de conteúdo</a>
                            </li>
                            <li>
                                <a>Publicidade</a>
                                <a>Desenvolvedores</a>
                            </li>
                            <br />
                            <li>
                                <a>Termos</a>
                                <a>Privacidade</a>
                            </li>
                            <li>
                                <a>Política e segurança</a>
                            </li>
                            <li>
                                <a>Como funciona o youtube</a>
                            </li>
                            <li>
                                <a>Testar novos recursos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aside