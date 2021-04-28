function PhoneItem(props) {
  const { phone } = props;
  return (
    <>
      <h3>{phone.title}</h3>
      <p>{phone.description}</p>
    </>
  );
}

export default PhoneItem;
