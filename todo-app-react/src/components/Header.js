const headerStyle = {
  border: '3px solid red',
  textAlign: 'center',
  width: '80%',
  position: 'relative',
  left: '10%'
};

function Header() {
  return (
    <>
      <h1 style={headerStyle}>Todo App</h1>
    </>
  );
}

export default Header;