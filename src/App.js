import { useState, useCallback } from "react";
import { ChildArea } from "./ChildArea";

export default function App() {
  console.log('App');
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onClickCountUp = () => {
    setCount(count + 1);
  }

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  return (
    <div className="App">
      <h1>Hello react</h1>
      <p>{count}</p>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />

      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}