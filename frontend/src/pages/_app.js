import AuthProvider from "@/providers/AuthProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <div className="flex flex-col items-center">
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  );
}
