export default function Item({ item, onClickDelete, onToggleHandle }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleHandle(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onClickDelete(item.id)}>❌</button>
    </li>
  );
}
