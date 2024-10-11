import { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import Details from "./components/Details";

function App() {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState<number|null>(null);

  useEffect(() => {
    fetch(import.meta.env.VITE_URL)
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
      });
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setUserId(Number((event.target as HTMLElement).getAttribute("user-id")));
    document.querySelectorAll('.user').forEach((user)=> {
      user.className = "user"
    });

    (event.target as HTMLElement).className = "user active"

  };

  return (
    <div className="app">
      <List users={users} handleClick={handleClick} />
      {userId && <Details id={userId} />}
    </div>
  );
}

export default App;
