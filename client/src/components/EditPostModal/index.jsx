import { Button, Modal, TextField, TextareaAutosize } from "@material-ui/core";
import FileBase64 from "react-file-base64";
import { useSelector, useDispatch } from "react-redux";
import { modalState$ } from "../../redux/selectors";
import useStyles from "./styles.js";
import { useCallback, useEffect, useState } from "react";
import { hideEditModal, updatePost } from "../../redux/actions";

export default function EditPostModal({ post }) {
  console.log(post);
  const [data, setData] = useState(post);
  const dispatch = useDispatch();
  const { isShowEdit } = useSelector(modalState$);
  const classes = useStyles();

  useEffect(() => {
    if (post) setData(post);
  }, [post]);

  const onClose = useCallback(() => {
    dispatch(hideEditModal());
  }, [dispatch]);

  const onSubmit = useCallback(() => {
    dispatch(updatePost.updatePostRequest(data));
    onClose();
  }, [data, dispatch, onClose]);

  const body = (
    <div className={classes.paper} id="simple-modal-title">
      <h2>Edit Post</h2>
      <form noValidate autoComplete="off" className={classes.form}>
        <TextField
          className={classes.title}
          required
          label="title"
          value={data?.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <TextareaAutosize
          className={classes.textarea}
          minRows={10}
          maxRows={15}
          placeholder="Content..."
          value={data?.content}
          onChange={(e) => setData({ ...data, content: e.target.value })}
        />
        <FileBase64
          accept="image/*"
          multiple={false}
          type="file"
          value={data?.attachment}
          onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
        />
        <div className={classes.footer}>
          <Button
            variant="contained"
            color="primary"
            component="span"
            fullWidth
            onClick={onSubmit}
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <Modal open={isShowEdit} onClose={onClose}>
        {body}
      </Modal>
    </div>
  );
}
