import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Queue } from "./components/queue";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Queue />
    </QueryClientProvider>
  );
}

export default App;
