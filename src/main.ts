import { doubled } from "./examples/methods";
import "./style.css";

// Example usage:

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <div class="card">
    the value is  ${doubled.join(", ")}
    </div>
`;
