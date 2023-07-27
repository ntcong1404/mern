import { Grid } from "@material-ui/core";
import PostItem from "./Post/index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as actions from "../../redux/actions";
import { postState$ } from "../../redux/selectors";
import EditPostModal from "../EditPostModal";

export default function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(postState$);
  const [post, setPost] = useState();

  useEffect(() => {
    dispatch(actions.getPosts.getPostsRequest());
  }, [dispatch]);

  return (
    <Grid container spacing={2} alignItems="stretch">
      {posts.map((post, index) => (
        <>
          <Grid item xs={12} sm={4}>
            <PostItem key={index} post={post} setPost={setPost} />
          </Grid>
        </>
      ))}
      <EditPostModal post={post} />
    </Grid>
  );
}
