import { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "./components/input";
import Button from "./components/button";
import { getRole, login } from "./api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Input
        placeholder={"Enter Your Email..."}
        type={"email"}
        onChange={setEmail}
        value={email}
      />
      {isAdmin && (
        <Input
          placeholder={"Enter Your Password..."}
          type={"password"}
          onChange={setPassword}
          value={password}
        />
      )}
      <Button
        title={isAdmin ? "Log In" : "Next"}
        onClick={async () => {
          if (isAdmin) {
            let resp = await login({ email, password });
            localStorage.setItem("TOKEN", resp.token);
            dispatch({
              type: "TOKEN",
              payload: { token: resp.token },
            });
          } else {
            let resp = await getRole({ email });
            if (resp.isAdmin === true) {
              setIsAdmin(resp.isAdmin);
            } else {
              localStorage.setItem("TOKEN", resp.token);
              dispatch({
                type: "TOKEN",
                payload: { token: resp.token },
              });
            }
          }
        }}
      />
    </div>
  );
}
