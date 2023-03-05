import AuthProvider from "@/providers/AuthProvider";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className="flex flex-col items-center">
          <Component {...pageProps} />
        </div>
      </AuthProvider>
    </QueryClientProvider>
  );
}
