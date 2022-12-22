import { useState, useEffect } from "react";
import { API } from "../../constants/api"

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4318904c87mshcf8fcdc984cadc9p1f8d99jsn9790322cce04',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};


function GameList() {

    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchGames() {
            try{
                const response = await fetch(API , options);

                if(response.ok){
                    const results = await response.json()
                    console.log(results)
                    setGames(results);
                }
            }catch(error){
                setError()
            }finally{
                setLoading(false)
            }
        }
        fetchGames();
    }, [])

    if(error){
        return <div>{error}</div>
    }
    if(loading){
        return <div>loading</div>
    }

  return (
    <div>
        {games.map((game) => {
            return <div key={game.id}>
                <h2>{game.title}</h2>
                <img src={game.thumbnail} alt={game.title} />

            </div>
        })}
    </div>
  )
}

export default GameList