//Using index as key - not recommended
export default function App() {
  const [items, setItems] = useState([
    { id: 1, value: "A" },
    { id: 2, value: "B" },
    { id: 3, value: "C" },
  ]);

  const addToStart = () => {
    setItems([{ id: Date.now(), value: "X" }, ...items]);
  };

  return (
    <div>
      <button onClick={addToStart}>Add X at Start</button>

      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  );
}

function Item({ item }) {
  const [text, setText] = useState("");

  return (
    <div style={{ marginBottom: 8 }}>
      <span>{item.value}: </span>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: 100 }}
      />
    </div>
  );
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
