import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Application from "./common/application";
import { getRootElement } from "./common/utils/get-root-element";

import "./common/styles/index.css";

function bootstrap() {
  const rootElement = getRootElement();

  try {
    createRoot(rootElement).render(
      <StrictMode>
        <Application />
      </StrictMode>
    );
  } catch {
    // eslint-disable-next-line no-console
    console.error("Failed to render the app");
  }
}

bootstrap();
