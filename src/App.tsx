import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainComponents from "./component";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Provider store={store}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <MainComponents />
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;
