import { useState } from "react";
import "./App.css";
import Logo from "../src/logo.svg";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <header>
        <img src={Logo} alt="Logo" />
        <p>Qarbon IT - zadanie rekrutacyjne React</p>
        <p>
          Korzystając z API i szablonu stwórz prostą wyszukiwarkę użytkowników.
          Wyszukiwanie ma następować po wpisaniu odpowiedniego username'u w{" "}
          <u>input</u> (poniżej lista istniejących nazw użytkownika).
        </p>
        <p>
          Wyszukiwanie ma następować po wpisaniu <u>dokładnej</u> nazwy
          użytkownika (czyli np. "Bret", a nie "bret").
        </p>
        <p>
          Link API:
          https://jsonplaceholder.typicode.com/users?username=UŻYTKOWNIK
        </p>
        <p>Lista istniejących username'ów:</p>
        <p>
          Bret, Antonette, Samantha, Karianne, Kamren, Leopoldo_Corkery,
          Elwyn.Skiles, Maxime_Nienow, Delphine, Moriah.Stanton
        </p>
      </header>
      <form>
        <label htmlFor="search">Search user</label>
        <input type="search" id="search" />
      </form>
      {/* Każdy wyszukany użytkownik ma wyświetlać imię i adres. */}
      {users.map((user) => (
        <div className="user-found">
          <p className="user-found__name">NAME</p>
          <p className="user-found__address">STREET SUITE, ZIPCODE CITY</p>
        </div>
      ))}
    </div>
  );
}

export default App;
