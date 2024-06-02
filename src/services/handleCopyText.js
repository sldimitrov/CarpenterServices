let number = "0876533802";

export default function handleCopyText() {
  navigator.clipboard.writeText(number);
  alert("Text copied to clipboard.");
}
