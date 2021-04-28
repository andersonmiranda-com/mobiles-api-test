import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  loader: {
    height: "100vh",
  },
});

function Loading() {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      className={classes.loader}
    >
      <CircularProgress />
    </Box>
  );
}

export default Loading;
