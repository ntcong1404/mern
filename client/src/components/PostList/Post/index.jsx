import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  Button,
  Popover,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteIcon from "@material-ui/icons/Favorite";
import moment from "moment";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import {
  updatePost,
  setAnchorEl,
  clearAnchorEl,
  showEditModal,
} from "../../../redux/actions";
import { anchorElSelector$ } from "../../../redux/selectors";

export default function PostItem({ post, setPost }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { anchorEl } = useSelector(anchorElSelector$);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = useCallback(
    (event) => {
      setPost(post);
      console.log(post);
      dispatch(setAnchorEl(event.currentTarget));
    },
    [dispatch]
  );

  const handleClose = useCallback(() => {
    dispatch(clearAnchorEl());
  }, [dispatch]);

  const handleOpenEditPostModal = useCallback(() => {
    dispatch(showEditModal());
    handleClose();
  }, [dispatch, handleClose]);

  const onLikeBtnClick = useCallback(() => {
    dispatch(
      updatePost.updatePostRequest({ ...post, likeCount: post.likeCount + 1 })
    );
  }, [dispatch, post]);

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Avatar>A</Avatar>}
        title={post.author}
        subheader={moment(post.updatedAt).format("HH:MM MMM DD, YYYY")}
        action={
          <div>
            <IconButton aria-describedby={id} onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Button variant="contained" fullWidth>
                Delete
              </Button>
              <Button
                variant="contained"
                fullWidth
                onClick={handleOpenEditPostModal}
              >
                Edit
              </Button>
            </Popover>
          </div>
        }
      />
      <CardMedia
        image={post.attachment}
        title="Title"
        className={classes.media}
      />
      <CardContent>
        <Typography className={classes.title} variant="h5" color="textPrimary">
          {post.title}
        </Typography>
        <Typography
          className={classes.content}
          variant="body2"
          component="p"
          color="textSecondary"
        >
          {post.content}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={onLikeBtnClick}>
          <FavoriteIcon />
          <Typography component="span" color="textSecondary">
            {`${post.likeCount} like`}
          </Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
}
