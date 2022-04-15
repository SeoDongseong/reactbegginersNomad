import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run every time");
  useEffect(() => {
    console.log("Call the API...");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("Searching for", keyword);
    }
  }, [keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Counter</button>
    </div>
  );
}

export default App;
