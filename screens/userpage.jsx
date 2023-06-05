import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Loginpage from './loginpage';
import {FlashMessage} from 'react-native-flash-message';
import Homepage from './homepage';
import { AntDesign } from '@expo/vector-icons';
import Landing from './landingpage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';
//import Profile from './profile';
import Settings from './settings';
import Search from './search';
import RegisterPage from './registerpage';
import Nav from './navigation';
import Books from './books';
import Music from './music';
import Tips from './tips';
import Survey from './survey';
import Doctors from './doctors';
import Profile from './profileScreen'
import DetailScreen from './details';
import QuizScreen from './quizscreen';
import ResultScreen from './resultScreen';
import AboutTheAppScreen from './aboutus';
import BookingPage from './book';
import Welcome from './welcome';
import Video from './videochat';
import Payment from './pay';
import Category from './categories';
import Bookings from './bookings';



//install the following components
//npm install react-native-gesture-handler react-native-reanimated
//npm install react-native-screens react-native-safe-area-context
//npm install @react-navigation/native @react-navigation/native-stack




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



function Userpage({navigation,route}){
  const {Username,Email} = route.params;
  
  
  return (
    <NavigationContainer independent='true'>
      <Tab.Navigator
      
      
      screenOptions={({route}) =>({
        tabBarIcon:({focused,size,colour}) =>{
          let iconName;
          if(route.name === "Home"){
            iconName = focused ? 'home':'home-outline';
          }
          else if(route.name === "Search"){
            iconName = focused ? 'search':'search';
          }
          else if(route.name === "Settings"){
            iconName = focused ? 'cog':'cog-outline';
          }
          return <Ionic name={iconName} size={size} colour={colour}/>;
        },
        style: styles.tabBar,
        
      })}>
        <Tab.Screen name="Home" component={Landing} options={{headerShown:false}}/>
        <Tab.Screen name="Search" component={Search} options={{headerShown:false}}/>
        <Tab.Screen name="Settings" component={Settings} options={{headerShown:true}}/>
      </Tab.Navigator>
      
      
      
    </NavigationContainer>
    

  
  );
};
function Auth({route}){
  const {Username} = route.params;
  return (
    <NavigationContainer independent='true'>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Landing}
          options={{headerShown:false}}
          initialParams={{Username}}
        />
        
        

<Stack.Screen name="login" component={Loginpage}
        options={{headerShown:false}} />

        <Stack.Screen name = "userpage" component={Userpage}
        options={{headerShown:false}} />
        
         <Stack.Screen name = "landing" component={Nav}
        options={{headerShown:true}} />

<Stack.Screen name = "Settings" component={Settings}
        options={{headerShown:true}} />

        <Stack.Screen name = "Books" component={Books}
        options={{headerShown:true}} />

        <Stack.Screen name = "Music" component={Music}
        options={{headerShown:true}} />

<Stack.Screen name = "Doctors" component={Doctors}
        options={{headerShown:true,title:"Choose"}} />

        <Stack.Screen name = "Tips" component={Tips}
        options={{headerShown:true}} />

        <Stack.Screen name = "Survey" component={Survey}
        options={{headerShown:false}} />

        <Stack.Screen name = "Profile" component={Profile}
        options={{headerShown:false}} />
        <Stack.Screen name = "Details" component={DetailScreen}
        options={{headerShown:true}} />

<Stack.Screen name = "questions" component={QuizScreen}
        options={{headerShown:true}} />

        <Stack.Screen name = "results" component={ResultScreen}
        options={{headerShown:false}} />

<Stack.Screen name = "About" component={AboutTheAppScreen}
        options={{headerShown:true}} />


<Stack.Screen name = "Booking" component={BookingPage}
        options={{headerShown:false}} />
        

<Stack.Screen name = "Welcome" component={Welcome}
        options={{headerShown:false}} />
        
<Stack.Screen name = "Video" component={Video}
        options={{headerShown:true}} />
<Stack.Screen name = "payments" component={Payment}
        options={{headerShown:false}} />

<Stack.Screen name = "categories" component={Category}
        options={{headerShown:true}} />

<Stack.Screen name = "bookings" component={Bookings}
        options={{headerShown:false}} />

        
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5EFEF',
    
  },
  tabBar: {
    backgroundColor: 'green', // Change background color here
    borderTopLeftRadius: 10, // Change border radius here
    borderTopRightRadius: 10, // Change border radius here
  },
});

export default Auth;