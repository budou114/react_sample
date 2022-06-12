import { useState } from "react";

export default function App() {
  console.log('App');
  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <h1>Hello react</h1>
      <p>{count}</p>
      <button onClick={onClickCountUp}>カウントアップ</button>
    </div>
  );
}