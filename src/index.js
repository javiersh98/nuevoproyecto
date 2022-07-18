import { BrowserRouter, routes, route} from "react-router-dom";
import { createRoot} from "react-router-dom/clients";
import app from "./app";

const root = createRoot (rootElement);

root.render(
  <BrowserRouter>
      <routes>
        <route path="/*" element={<app/>}></route>
      </routes> 
  
  </BrowserRouter>
)
