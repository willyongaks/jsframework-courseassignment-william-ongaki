import React from 'react'
import { useEffect, useState} from "react";
import { API } from "../../constants/api"

function PostList() {
    const [post, usePost] = useState([]);
    const [loading, useLoading] = useState(true);
    const [error, useError] = useState(null);

    useEffect(function () {
        async function fetchData() {
            
        }
    })


  return (
    <div>whaat</div>
  )
}

export default PostList