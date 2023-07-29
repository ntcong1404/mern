import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  card: {
    height: 600,
  },
  title: {
    height: 70,
    overflow: "hidden",
  },
  content: {
    height: 70,
    overflow: "auto",
  },
  media: {
    height: 250,
    objectFit: "cover",
  },
  button: {
    fontSize: 16,
  },
}));
