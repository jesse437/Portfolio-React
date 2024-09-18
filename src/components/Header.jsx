// Here we import the Header.css file to grant access to some additional classNames
import "../styles/Header.css";
import Navbar from "./Navbar";

const styles = {
  headerStyle: {
    background: "black",
    fontSize: "100px",
  },

  navbarStyle: {
    background: "green",
    justifyContent: "flex-end",
    display: "flex",
  },
};

function Header() {
  return (
    <div>
      <Navbar />
    </div>
  );
}
// export header

export default Header;
