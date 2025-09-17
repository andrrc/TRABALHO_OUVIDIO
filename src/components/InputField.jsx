function InputField({ label, type, placeholder }) {
  return (
    <div className="flex flex-col text-left">
      <label className="font-semibold">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="border p-2 rounded-lg mt-1 focus:ring-2 focus:ring-black"
      />
    </div>
  );
}

export default InputField;