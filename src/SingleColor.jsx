import { toast } from "react-toastify";

function SingleColor({ index, color }) {
  const { hex, weight } = color;

  async function saveToCplipboard() {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Color copied to clipboard");
      } catch (error) {
        toast.error("Failed to copy color to clipboard");
      }
    } else {
      toast.error("Clipboard access not available");
    }
  }

  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
      onClick={saveToCplipboard}
    >
      <p className="percent-value">{weight}% </p>
      <p className="color-value">#{hex}</p>
    </article>
  );
}

export default SingleColor;
