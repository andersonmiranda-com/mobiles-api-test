import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  loader: {
    height: "100vh",
  },
});

function DataError(props) {
  const { message } = props;
  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      className={classes.loader}
    >
      <h2>{message}</h2>
      <br />

      <Button
        variant="contained"
        color="secondary"
        onClick={() => window.location.reload()}
      >
        Try Again
      </Button>
    </Box>
  );
}

export default DataError;
