import "../styles/chats.css";
import "../styles/auth.css";
import "../styles/index.css";

import { ContextProvider } from "../context";

// wrap Component with ContextProvider so all pages have access to username and secret
function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;
