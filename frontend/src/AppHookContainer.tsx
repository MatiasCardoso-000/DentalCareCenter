import App from "./App";
import { AppRouter } from "./AppRouter";
import { AuthProvider } from "./context/AuthProvider";

export const AppHookContainer = () => {
  return (
    <AuthProvider>
      <App>
        <AppRouter />
      </App>
    </AuthProvider>
  );
};
