import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={karki.container}
    >
      <Text style={karki.text} >Edit expo</Text>
    </View>
  );
}

const karki=StyleSheet.create({
    container:{
      flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"rgb(10, 10, 10)"
    },
    text:{
      color:"white",
    }
})
