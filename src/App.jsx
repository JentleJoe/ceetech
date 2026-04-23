
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";

const App = () => (
  <div className="m-0 p-0">
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppRoutes />
    </BrowserRouter>
  </div>
);

export default App;
