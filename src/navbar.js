import { Link } from "react-router-dom";
import profileImage from "./assets/user.png";

export default function NavBar() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "10vh",
        backgroundColor: "linen",
        position: "sticky",
        justifyContent: "space-between",
        alignItems: "center",
        top: 0,
      }}
    >
      <div>
        <Link
          to="/books"
          style={{ padding: "12px", margin: "12px", textDecoration: "none" }}
        >
          Books
        </Link>
        <Link
          to="/transactions"
          style={{ padding: "12px", margin: "12px", textDecoration: "none" }}
        >
          Transactions
        </Link>
      </div>
      <Link
        to="/profile"
        style={{
          padding: "12px",
          margin: "12px",
        }}
      >
        <img
          src={profileImage}
          alt="Profile"
          style={{
            tintColor: "white",
            height: "50px",
            width: "50px",
            borderRadius: "100px",
          }}
        />
      </Link>
    </div>
  );
}
