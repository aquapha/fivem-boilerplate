import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";

const queryCache = new QueryCache();
const mutationCache = new MutationCache();

const queryClient = new QueryClient({
  queryCache,
  mutationCache,
  defaultOptions: {
    queries: {
      retry: false,
      refetchInterval: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default queryClient;
