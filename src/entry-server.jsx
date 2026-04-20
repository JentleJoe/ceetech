import { renderToString } from "react-dom/server";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StaticRouter } from "react-router-dom/server";
import AppRoutes from "./AppRoutes";

export const render = (url) => {
  const queryClient = new QueryClient();

  const appHtml = renderToString(
    <div className="m-0 p-0">
      <QueryClientProvider client={queryClient}>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </QueryClientProvider>
    </div>,
  );

  return { appHtml };
};
