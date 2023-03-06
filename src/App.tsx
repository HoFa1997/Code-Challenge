import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainComponents from "./component";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <MainComponents />
      </QueryClientProvider>
    </>
  );
}

export default App;
