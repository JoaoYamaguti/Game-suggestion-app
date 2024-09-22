import { useState } from "react"

// import { } from "../../icons/trash.svg";

export function CreatePoll() {

    let Select = ({ setGames }) => (
        <div className="selectSet">
            <select name="game" id="game">
                <option value=""></option>
                <option value="">GTA V</option>
            </select>
            <button type="button">
            </button>
                <img src="../../icons/cancelar.png" alt="cancel" />
        </div>
    )

    const [games, setGames] = useState([''])

    return (
        <form className="createPoll">
            <fieldset>
                <label htmlFor="games">Choose games:</label>
                <Select />

                <Select />

                {games.map((game, index) => {
                    return <Select key={index} />
                })}
                <button type="button" onClick={() => setGames([...games, ''])}>+ Add more Game</button>
            </fieldset>
        </form>
    )
}