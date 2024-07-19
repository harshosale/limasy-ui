import { useEffect, useState } from "react";
import { getUser } from "./api";
import { useDispatch, useSelector } from "react-redux";
import Button from "./components/button";

export default function Profile() {
  const [user, setUser] = useState([]);
  const token = useSelector((state) => state.token);

  const { username, email, name, phone } = user || {};
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem("TOKEN");
    dispatch({
      type: "TOKEN",
      payload: {},
    });
    window.location.replace("/");
  };

  useEffect(() => {
    (async () => {
      setUser(await getUser({ token }));
    })();
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        fontWeight: "300",
        fontSize: "16px",
        flexDirection: "column",
      }}
    >
      <div>User Name: {username}</div>
      <div>Email: {email}</div>
      <div>Name: {name}</div>
      <div>Phone: {phone}</div>

      <Button title={"Log out"} onClick={logout} />
    </div>
  );
}
