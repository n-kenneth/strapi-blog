export default function Button({ label, type }) {
  return (
    <div>
      <button type={type}>{label}</button>
    </div>
  );
}
