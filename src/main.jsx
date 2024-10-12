import ReactDOM from "react-dom/client"; // Correct import
import App from "./App.jsx";
import "./index.css";

const rootElement = document.getElementById("root");

// Create a root using createRoot
const root = ReactDOM.createRoot(rootElement);

// Use hydrateRoot for SSR or normal rendering based on whether the root has children
if (rootElement.hasChildNodes()) {
  root.hydrate(<App />); // For SSR content
} else {
  root.render(<App />); // For client-side rendering
}
