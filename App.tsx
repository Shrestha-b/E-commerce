import React from "react";
import { Text, View } from "react-native";
import MyComponent from "./src/todoComponent/todo";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./src/app/store";
import HomeNavigation from "./src/Navigation/HomeNaviagtion";

const App = () => {
  return (
    <>
      <ReduxProvider store={store}>
        <PaperProvider>
          <HomeNavigation />
          {/* <MyComponent /> */}
        </PaperProvider> 
      </ReduxProvider>
    </>
  );
};

export default App;
