export default function Item({ item, onDeleteItems, onHandleToggleCheck }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onClick={() => onHandleToggleCheck(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
