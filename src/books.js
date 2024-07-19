import { useEffect, useState } from "react";
import { getBooks } from "./api";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    (async () => {
      setBooks(await getBooks({}));
    })();
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {books.map(({ name, _id, author }) => (
        <div
          style={{
            width: "30%",
            height: "30%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "aquamarine",
            margin: "8px",
          }}
        >
          <div key={_id + name}>Book Name: {name}</div>
          <div key={_id + author}>Author Name: {author}</div>
        </div>
      ))}
    </div>
  );
}
