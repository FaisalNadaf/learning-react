

function TakeColorProps({ text = "NULL", colour = "NULL" }) {
  const textColor = { color: colour };

  return (
    <>
      <p style={textColor}>{text}</p>
    </>
  );
}

export default TakeColorProps;
