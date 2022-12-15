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
          console.log(results)
          setPost(results);
        } else {
          setError("An error occured");
        }
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false)
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
      {post.map(post => (
      <div key={post.id}>
        <h2>{post.title.rendered}</h2>
          <img src={post.better_featured_image.source_url} alt={post.better_featured_image.alt_text} />
      </div>))}
    </div>
  );
}

export default Postlist;
