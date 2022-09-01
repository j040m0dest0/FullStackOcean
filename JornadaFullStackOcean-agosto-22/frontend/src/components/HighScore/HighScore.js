import "./HighScore.css";

function HighScore(props){

    fetch("http://localhost:3333/pontuacoes").then(console.log);

    return (
        <div className="HighScore">
            <div>
                você fez <b>{props.pontos}</b> pontos !
            </div>
            <div>
            <h1>HighScore</h1>
            </div>

            <div>joão 100000 pontos</div>

            <div>
                <h1>Registre sua pontuação</h1>
                <form>
                    <input type="text" placehorder="Digite o seu nome ..."/>
                    <input type="submit" value="Enviar"/>

                </form>
            </div>

        </div>
    );
}

export default HighScore;