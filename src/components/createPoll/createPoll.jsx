import { useState } from "react"

// import { } from "../../icons/trash.svg";

const list = [
    {
        'name': 'GTA V',
    },
    {
        'name': 'Red Dead Redemption II',
    },
    {
        'name': 'Black'
    }
]

export function CreatePoll() {

    const [games, setGames] = useState(['', ''])

    let Select = ({ index, value }) => (
        <div className="selectSet">
            <select name="game" id="game" value={value} onChange={(e) => {
                games[index] = e.target.value
                setGames([...games])
            }}>
                <option value=""></option>
                {
                    list.map(e => (
                        <option value={e.name}>
                            <div type="button" className="cancel" />
                            {e.name}
                        </option>
                    ))
                }
            </select>
            {index >1 && <div type="button" className="cancel" onClick={() => {
                games.splice(index, 1)
                setGames([...games])
            }} />}
        </div>
    )

    return (
        <form className="createPoll">
            <fieldset>
                <label htmlFor="games">Choose games:</label>

                {games.length > 0 && games.map((game, index) => {
                    console.log(game)
                    return <Select key={index} index={index} value={game} />
                })}
                <button type="button" className="add" onClick={() => {
                    setGames([...games, ''])
                }}>+ Add More</button>
            </fieldset>
        </form>
    )
}