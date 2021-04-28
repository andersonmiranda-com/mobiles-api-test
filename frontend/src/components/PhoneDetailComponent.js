import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles({
  root: {
    width: 400,
  },
  media: {
    maxHeight: 300,
  },
  closeButton: {
    position: "absolute",
    right: 2,
    top: 2,
  },
});

function PhoneDetailComponent(props) {
  const { detail, onClose } = props;
  const classes = useStyles();
  return (
    <>
      <DialogTitle className={classes.root}>
        {detail.title}
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box display="flex" justifyContent="center">
          <img
            alt={detail.title}
            className={classes.media}
            src={detail.image}
          />
        </Box>
        <p>{detail.description}</p>
        <p>Color: {detail.color}</p>
        <p>Memory: {detail.memory} GB</p>
        <p>Manufacturer: {detail.manufacturer}</p>
        <Box display="flex" justifyContent="flex-end">
          <h2>{detail.price} €</h2>
        </Box>
      </DialogContent>
    </>
  );
}

export default PhoneDetailComponent;
