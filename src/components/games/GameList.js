import { useState, useEffect } from "react";
import { API } from "../../constants/api"



function GameList() {

    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchGames() {
            try{
                const response = await fetch(API);

                if(response.ok){
                    const results = await response.json()
                    console.log(results)
                    setGames(results);
                }
            }catch(error){
                console.log(error)
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
    <div>GameList</div>
  )
}

export default GameList