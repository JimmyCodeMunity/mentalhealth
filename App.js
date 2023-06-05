import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import Homepage from './screens/homepage';
import Loginpage from './screens/loginpage';
import Registerpage from './screens/registerpage';
import Userpage from './screens/userpage';
import Settings from './screens/settings';
//import { AntDesign } from '@expo/vector-icons';
import Books from './screens/books';
import Landing from './screens/landingpage';
import ProfileScreen from './screens/profileScreen';
import Nav from './screens/navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



//install the following components
//npm install react-native-gesture-handler react-native-reanimated
//npm install react-native-screens react-native-safe-area-context
//npm install @react-navigation/native @react-navigation/native-stack




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = ({navigation}) => {
  return (
    <NavigationContainer independent='true'>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Loginpage}
          options={{headerShown:false}}
        />
        <Stack.Screen name="register" component={Registerpage}
        options={{headerShown:false}} />



        <Stack.Screen name = "userpage" component={Userpage}
        options={{headerShown:false}} />

         <Stack.Screen name = "landing" component={Nav}
        options={{headerShown:true}} />

<Stack.Screen name = "Settings" component={Settings}
        options={{headerShown:true}} />

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

export default App;
