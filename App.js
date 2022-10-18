import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";

import MainContainer from "./MainContainer";

const App = () => {
  return (
    <MainContainer/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAF2",
  },
});

export default App;
