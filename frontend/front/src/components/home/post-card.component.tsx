import {useState} from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  Typography,
  Divider
} from '@mui/material';
import IconButton, {IconButtonProps} from '@mui/material/IconButton';
import {red} from '@mui/material/colors';
import {Favorite, Share, Comment, MoreVert} from '@mui/icons-material';
import {IPostDto} from "../../types/post.types";
import {formatDistance} from "date-fns";

interface IPostCardComponentProps {
  post: IPostDto
}

const PostCardComponent = ({post}: IPostCardComponentProps) => {

  const postDate = formatDistance(new Date(post.created_at), new Date())

  return (
    <Card sx={{width: 300, height: 500, m: 2}}>
      <CardHeader
        avatar={
          <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert/>
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader={postDate}
      />
      <Divider sx={{background: "gray"}}/>
      <CardMedia sx={{
        maxWidth: "100%",
        maxHeight: "100%"
      }}
         component="img"
         image={post.image}
         alt="Paella dish"
      />
      <Divider sx={{background: "gray"}}/>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.caption}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite/>
        </IconButton>
        <IconButton aria-label="share">
          <Share/>
        </IconButton>
        <IconButton aria-label="comment">
          <Comment/>
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default PostCardComponent;