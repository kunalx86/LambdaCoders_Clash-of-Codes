import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="flex flex-col items-center h-[100vh]">
      <Component {...pageProps} />
    </div>
  );
}
