function SubmitButton({ text }) {
  return (
    <button
      type="submit"
      className="w-full bg-black text-white p-3 rounded-lg shadow-md hover:bg-gray-800 transition"
    >
      {text}
    </button>
  );
}

export default SubmitButton;