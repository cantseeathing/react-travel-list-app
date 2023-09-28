export default function Stats({ items }) {
  const totalItems = items.length;
  const itemsPacked = items.filter((item) => item.packed === true).length;
  const itemsPercentage = (itemsPacked / totalItems) * 100;
  return (
    <footer className="stats">
      {itemsPercentage === 100 ? (
        <em>You got everything packed!</em>
      ) : (
        <em>
          You have {totalItems} items on your list, you already packed{" "}
          {itemsPacked} items ({itemsPercentage} %)
        </em>
      )}
    </footer>
  );
}
