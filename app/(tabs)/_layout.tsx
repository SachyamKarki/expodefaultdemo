import { Tabs } from "expo-router";

export default function TabsasLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{
        headerTitle: "StickerSmash", 
        headerLeft:()=> <> </>
      }}/>
      <Tabs.Screen name="about" options={{
        headerTitle:" About"
      }}/>
    <Tabs.Screen
    name="not-found"
    options={{
      headerShown:false,
    }}/>
    </Tabs>
  )
}
