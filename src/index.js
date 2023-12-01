import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

import users from "./users-data";

function App() {
  return (
    <div className="App">
      <div className="page-deets">
        <div className="users">
          {users.map((user) => {
            return (
              <div>
                {" "}
                <Data {...user} key={user.id} />{" "}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Data(props) {
  const { name, location, car, id } = props;
  console.log(props);
  return (
    <div>
      <h1>{name}</h1>
      <h3>{location}</h3>
      <h3>{car}</h3>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
