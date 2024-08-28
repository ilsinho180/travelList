import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import Stats from "./Stats";
import PackingList from "./PackingList";

export default function App() {
  const [items, setItems] = useState([]);

  function addItems(item) {
    setItems((items) => [...items, item]);
  }

  function deleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleCheck(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={addItems} />
      <PackingList
        items={items}
        onDeleteItems={deleteItems}
        onHandleToggleCheck={handleToggleCheck}
        setItems={setItems}
      />
      <Stats items={items} />
    </div>
  );
}
