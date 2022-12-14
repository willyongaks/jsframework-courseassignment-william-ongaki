import { API } from '../../constants/api';
import { useState, useEffect } from 'react'
import { json } from 'react-router-dom';

function Postlist() {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState([true]);
    const [error, setError] = useState([null]);

    useEffect(() => {
        async function getPost(){
          try {
            const response = await fetch(API);

            if(response.ok){
              const results = await response.json();
              console.log(results);
              setPost(json) 
            } else {
              setError("An error occured")
            }
          }catch(error){
            console.log(error)
          }finally{
            setLoading(false)
          }
        }
        getPost()
    },[]);

    if(loading){
      return <div>Loading....</div>
    }

  if (error) {
    return <div>Error: An error occured....</div>
  }

  return (
    <>
      {post.map(function(post){
        return <div key={post.id}>{post.slug}</div>
      })}
    </>
  )
}

export default Postlist;