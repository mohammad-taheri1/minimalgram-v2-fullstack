import React from 'react';
import {IPostDto} from "../../types/post.types";
import {Box, Stack} from "@mui/material";
import {formatDistance} from "date-fns";
import PostCardComponent from "./post-card.component";

interface IPostsComponentProps {
  posts: IPostDto[]
}

const PostsComponent = ({posts}: IPostsComponentProps) => {

  const renderPostCards = () => {
    return posts.map(post => (
      <PostCardComponent key={post.id} post={post}/>
    ))
  }

  return (
    <Stack direction={"row"} flexWrap={"wrap"}>
      {renderPostCards()}
    </Stack>
  );
};

export default PostsComponent;