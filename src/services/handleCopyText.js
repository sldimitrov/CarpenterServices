let number = "087 6173123";

export default function handleCopyText() {
  navigator.clipboard.writeText(number);
  alert("Text copied to clipboard.");
}
