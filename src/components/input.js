export default function Input({ placeholder, type, onChange, value }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      style={{ margin: "4px", padding: "4px" }}
      onChange={(e) => onChange(e.target.value)}
      value={value}
    />
  );
}
