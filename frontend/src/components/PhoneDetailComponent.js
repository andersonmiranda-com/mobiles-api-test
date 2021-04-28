function PhoneDetailComponent(props) {
  const { detail } = props;
  return (
    <>
      <h3>{detail.title}</h3>
      <p>{detail.description}</p>
    </>
  );
}

export default PhoneDetailComponent;
