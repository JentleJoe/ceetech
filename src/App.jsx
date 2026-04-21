
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";

const App = () => (
  <div className="m-0 p-0">
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </div>
);

export default App;
