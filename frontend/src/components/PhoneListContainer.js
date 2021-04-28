import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhones } from "../store/actions/phonesAction";

import PhoneItem from "./PhoneItem";

const Phones = () => {
  const dispatch = useDispatch();
  const phonesList = useSelector((state) => state.phonesList);
  const { loading, error, phones } = phonesList;
  useEffect(() => {
    dispatch(getPhones());
  }, [dispatch]);
  return (
    <>
      {loading
        ? "Loading..."
        : error
        ? error.message
        : phones.map((p) => <PhoneItem phone={p} />)}
    </>
  );
};

export default Phones;
