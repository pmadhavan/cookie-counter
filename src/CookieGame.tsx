import { useState } from "react";

const CookieGame = () => {
    const cookie_emoji = "\u{1F36A}"
    const [counter, setCounter] = useState(0);
    const [cookies, setCookies] = useState<number[]>([]);
    const showVictory = counter >= 10;
    const handleClick = () => {
        setCounter(counter + 1)
        setCookies([...cookies, counter]);
    }

    return (<div className="cookie_game_container">
        <h1>Cookie Game</h1>
        <div className="main_container">
            {showVictory && <h3>Victory!!!</h3>}
            <h4>Cookies purchased: {counter} </h4>
            <div className="cookies">
                {
                    cookies.map(() => <div>{cookie_emoji}</div>)
                }
            </div>
            <button className="big_cookie" onClick={handleClick}>{cookie_emoji}</button>
        </div>
    </div>)
}

export default CookieGame;