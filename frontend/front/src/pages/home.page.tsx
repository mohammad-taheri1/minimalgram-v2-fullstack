import React, {useEffect, useState} from 'react';
import {IPostDto} from "../types/post.types";
import config from "../utils/config.json";
import httpClient from "../services/http.service";
import {ToastContainer} from "react-toastify";
import {Box} from "@mui/material";
import PostCardComponent from "../components/home/post-card.component";
import PostsComponent from "../components/home/posts.component";

const HomePage = () => {
  const [posts, setPosts] = useState<IPostDto[]>([])

  const getPostsFromServer = async () => {
    const postsUrl = `${config.apiBaseUrl}/post`
    const {data} = await httpClient.get(postsUrl);
    setPosts(data);
  }

  useEffect(() => {
    getPostsFromServer();
  }, [])

  return (
    <div>
      <Box sx={{
        m: 2,
        border: "2px solid black"
      }}>
        <h3>Latest posts</h3>
        <div className="posts">
          {posts.length > 0 && <PostsComponent posts={posts}/>}
        </div>
        <ToastContainer/>
      </Box>
    </div>
  );
};

export default HomePage;