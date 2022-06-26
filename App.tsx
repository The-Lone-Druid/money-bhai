import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import tw from "./constants/tailwind";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { store } from "./redux/store";
import AuthProvider from "./screens/auth/AuthContext";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <AuthProvider>
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
          </SafeAreaProvider>
        </AuthProvider>
      </Provider>
    );
  }
}
