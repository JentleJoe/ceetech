
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";

const queryClient = new QueryClient();

const App = () => (
  <div className="m-0 p-0">
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  </div>
);

export default App;
