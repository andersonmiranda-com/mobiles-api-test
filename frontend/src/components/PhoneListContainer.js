import React, { useEffect } from "react";
import List from "@material-ui/core/List";
import { useDispatch, useSelector } from "react-redux";
import { getPhones } from "../store/actions/phonesAction";

import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Dialog from "@material-ui/core/Dialog";

import PhoneDetailComponent from "../components/PhoneDetailComponent";

const Phones = () => {
  const dispatch = useDispatch();
  const phonesList = useSelector((state) => state.phonesList);
  const { loading, error, phones } = phonesList;

  const [phoneDetail, setPhoneDetail] = React.useState({});
  const [open, setOpen] = React.useState(false);

  const handleOpen = (p) => {
    setOpen(true);
    setPhoneDetail(p);
  };
  const handleClose = () => {
    setOpen(false);
    setPhoneDetail({});
  };

  useEffect(() => {
    dispatch(getPhones());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        "Loading..."
      ) : error ? (
        error.message
      ) : (
        <List>
          {phones.map((p) => (
            <>
              <ListItem
                alignItems="flex-start"
                button
                onClick={() => handleOpen(p)}
              >
                <ListItemAvatar>
                  <Avatar variant="square" alt={p.title} src={p.image} />
                </ListItemAvatar>
                <ListItemText primary={p.title} secondary={p.description} />
              </ListItem>
              <Divider component="li" />
            </>
          ))}
        </List>
      )}
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <PhoneDetailComponent detail={phoneDetail} />
      </Dialog>
    </>
  );
};

export default Phones;
