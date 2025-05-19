import "./bubble_chat.css";

export default function BubbleChat({ text, sender }) {
  return (
    <div className={`bubble ${sender}`}>
      <span>{text}</span>
    </div>
  );
}
