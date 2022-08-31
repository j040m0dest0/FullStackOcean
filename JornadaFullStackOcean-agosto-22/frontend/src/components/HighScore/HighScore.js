import "./HighScore.css";

function HighScore(){
    return (
        <div className="HighScore">
            <div>
                você fez <b>50</b> pontos !
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