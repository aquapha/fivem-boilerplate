import { type PropsWithChildren } from "react";
import { QueryClientProvider as IQueryClientProvider } from "@tanstack/react-query";

import queryClient from "./query-client";

type QueryClientProviderProps = PropsWithChildren;

function QueryClientProvider({ children }: QueryClientProviderProps) {
  return (
    <IQueryClientProvider client={queryClient}>{children}</IQueryClientProvider>
  );
}

export { QueryClientProvider };
