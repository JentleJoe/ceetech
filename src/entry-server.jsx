import { renderToString } from "react-dom/server";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";

export const render = (url) => {
  const queryClient = new QueryClient();

  const appHtml = renderToString(
    <div className="m-0 p-0">
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={[url]}>
          <AppRoutes />
        </MemoryRouter>
      </QueryClientProvider>
    </div>,
  );

  return { appHtml };
};
