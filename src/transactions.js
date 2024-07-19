import { useEffect, useState } from "react";
import { getUserTransactions } from "./api";
import { useSelector } from "react-redux";
import Line from "./components/line";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const token = useSelector((state) => state.token);

  useEffect(() => {
    (async () => {
      setTransactions(await getUserTransactions({ token }));
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
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "8px",
        }}
      >
        {["User Name", "Book Name", "Type"].map((title) => (
          <div key={title}>{title}</div>
        ))}
      </div>

      <Line />

      {transactions.map(({ book, user, due_date, type, _id }) => (
        <>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              key={_id + user.name}
              style={{
                padding: "2px",
              }}
            >
              {user.name}
            </div>
            <div
              key={_id + book.name}
              style={{
                padding: "2px",
              }}
            >
              {book.name}
            </div>

            <div
              key={_id + book.name}
              style={{
                padding: "2px",
              }}
            >
              {type}
            </div>
          </div>
          <Line />
        </>
      ))}
    </div>
  );
}
