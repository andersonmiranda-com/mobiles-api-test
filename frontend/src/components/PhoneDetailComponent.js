import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

function PhoneDetailComponent(props) {
  const { detail, onClose } = props;
  return (
    <>
      <DialogTitle>{detail.title}</DialogTitle>
      <DialogContent>{detail.description}</DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </>
  );
}

export default PhoneDetailComponent;
