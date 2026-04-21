import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import AppRoutes from "./AppRoutes";

export const render = (url) => {
  const appHtml = renderToString(
    <div className="m-0 p-0">
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </div>,
  );

  return { appHtml };
};
