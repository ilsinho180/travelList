import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItems,
  onHandleToggleCheck,
  setItems,
}) {
  const [sortedItems, setSortedItems] = useState("description");

  let sortItems;

  if (sortedItems === "input") {
    sortItems = items;
  }

  if (sortedItems === "description") {
    sortItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortedItems === "packed") {
    sortItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  function clearlist(e) {
    const confirmed = window.confirm("Are you sure?");
    if (confirmed) setItems([]);
  }

  return (
    <div className="list">
      <ul>
        {sortItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onHandleToggleCheck={onHandleToggleCheck}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortedItems}
          onChange={(e) => setSortedItems(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={clearlist}>Clear list</button>
      </div>
    </div>
  );
}
