import Base_url from "../../constants/api/Base_url"
import { useState, useEffect } from 'react'
import { json } from 'react-router-dom';

function Postlist() {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState([true]);
    const [error, setError] = useState([null]);

    useEffect(() => {
        async function getPost(){
          const response = await fetch(Base_url);

          if(response.ok){
            const results = await response.json();
            console.log(results);
            setPost(json)
          }
          

        }
        getPost()
    })

  return (
    <div>

    </div>
  )
}

export default Postlist;