export default function Input({ type, name, label, value, handleChange }) {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        placeholder="label"
        value={value}
        onChange={(event) => handleChange(event.target.value)}
      />
    </div>
  );
}
