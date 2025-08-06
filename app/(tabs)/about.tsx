
import { useState } from 'react';
import { Button, Text, View } from 'react-native';



const Trial=()=>{

  const[ number,setNumber] =useState(["0","1","2"] );

const addOneFriend=()=>setNumber([...number, "4","5",'6']);

return(
    <View>
      <Text>{number}</Text>
        <Button onPress={addOneFriend} title="hitme Babe"/>    
    </View>
);
};

export default Trial;