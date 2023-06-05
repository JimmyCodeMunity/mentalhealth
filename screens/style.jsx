import React from 'react';
import {View,Text} from 'react-native';
const CardStory =(props)=>{
return(
<View
style={{
borderRadius:2,
padding:20,
marginLeft:20
}}>
<Text style={{ fontSize:20}}>
{props.Username.Username.Username}
</Text>

</View>
)
}
export default CardStory;