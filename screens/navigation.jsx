import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import Homepage from './screens/homepage';
import Loginpage from './loginpage';
import Registerpage from './registerpage';
//import Userpage from './userpage';
import Settings from './settings';
//import { AntDesign } from '@expo/vector-icons';
import Books from './books';
import Landing from './landingpage';
import ProfileScreen from './profileScreen';



//install the following components
//npm install react-native-gesture-handler react-native-reanimated
//npm install react-native-screens react-native-safe-area-context
//npm install @react-navigation/native @react-navigation/native-stack




const Stack = createNativeStackNavigator();

const Nav = ({navigation}) => {
  return (
    <NavigationContainer independent='true'>
      <Stack.Navigator>
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{headerShown:false}}
        />
        <Stack.Screen name="register" component={Registerpage}
        options={{headerShown:false}} />



        <Stack.Screen name = "Books" component={Books}
        options={{headerShown:true}} />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignContent:'center',
    justifyContent:'center',
    
  },
});

export default Nav;
