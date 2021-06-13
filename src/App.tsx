import { useState } from "react";
import "./App.css";

const App = () => {
  let data = [
    "Andi",
    "Abdul",
    "Ahmad",
    "Budiono",
    "Budi",
    "Rizal",
    "Raffi",
    "Putri",
    "William",
    "Zaki",
    "Rifat",
    "Cinta",
    "Kirana",
    "Samsul",
    "Burhan",
    "Vannisa",
    "Meidiana",
    "Nadiem",
    "Nadia",
  ];
  const [value, setValue] = useState<string>();
  const [list, setList] = useState<any>();
  const setInputValue = (e: any, item: any) => {
    setValue(item);
  };
  let suggestions: Array<string> = [];
  const autocomplete = (event: any) => {
    setValue(event.target.value);
    data.forEach((item) => {
      if (
        item.substring(0, event.target.value.length).toLowerCase() ===
        event.target.value.toLowerCase()
      ) {
        suggestions.push(item);
        setList(
          suggestions.map((item, idx) => {
            return (
              <p
                className='suggestion'
                onClick={(e) => setInputValue(e, item)}
                key={idx}
              >
                {item}
              </p>
            );
          })
        );
      }
      if (event.target.value.length === 0) {
        setList("");
      }
    });
  };
  return (
    <div className='container'>
      <h2>Autocomplete Implementation</h2>
      <input
        value={value}
        type='text'
        className='autocomplete'
        onChange={(e) => autocomplete(e)}
        placeholder='enter your name'
      />
      <div className='suggestion-box'>{list}</div>
    </div>
  );
};

export default App;
