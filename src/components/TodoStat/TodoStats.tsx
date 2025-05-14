export default function TodoStats({ count }) {
  return (
    <div style={{ padding: '0.5rem', borderBottom: '1px solid lightgray' }}>
      Total Todos: {count}
    </div>
  );
}
