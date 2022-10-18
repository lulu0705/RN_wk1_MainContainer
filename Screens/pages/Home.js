import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import Header from "../components/Header";
import ContentMain from "../components/ContentMain";


function Home(){
    return(
        <SafeAreaView style={styles.container}>
        <StatusBar />
        <Header />
        <ContentMain />
      </SafeAreaView>  
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFAF2",
    },
  });
  
export default Home;