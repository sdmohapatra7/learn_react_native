import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={style.container}>
      <Text style={style.content}>Hello World. Welcome!!</Text>
      <Link href="/about">visit new screen</Link>
    </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  content:{
    fontSize:30,
    color:"red"
  }
})