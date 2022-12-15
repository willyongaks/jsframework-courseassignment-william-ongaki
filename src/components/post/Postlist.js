import { API } from '../../constants/api';
import { useState, useEffect } from 'react'

function Postlist() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function getPost() {
      try {
        const response = await fetch(API);

        if (response.ok) {
          const results = await response.json();
          setPost(results);
        } else {
          setError("An error occured");
        }
      } catch (error) {
        console.log(error);
      }
    }
    getPost();
  }, []);

  if (loading) {
    return <div>Loading....</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div>
      {post.map(post => <div key={post.id}>`&{post.slug}`</div>)}
    </div>
  );
}

export default Postlist;
