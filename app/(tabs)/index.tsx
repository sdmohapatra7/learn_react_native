import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useTheme from "../hooks/useTheme";

export default function Home() {
  const {toggleDarkMode} = useTheme()
  return (
    <View style={style.container}>
      <Text style={style.content}>Hello World. Welcome!!</Text>
      <Link href="/about">visit new screen</Link>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle Mode</Text>
      </TouchableOpacity>
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