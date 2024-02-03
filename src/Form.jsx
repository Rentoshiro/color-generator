import { useState } from "react";

function Form({ addColor }) {
  const [color, setColor] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    addColor(color);
  }

  return (
    <section className="container">
      <h4>color generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(event) => setColor(event.target.value)}
        />
        <input
          type="text"
          value={color}
          onChange={(event) => setColor(event.target.value)}
          placeholder="#4ec6b8"
        />
        <button className="btn" style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  );
}

export default Form;
