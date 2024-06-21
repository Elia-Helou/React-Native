import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native';
import Home from './src/screens/home/Home';
import BookDetails from './src/screens/bookDetails/BookDetails';
import colors from './src/constants/colors';
import BackHeader from './src/components/BackHeader/BackHeader';
import CustomBookDetailsTabBar from './src/components/CustomBookDetails/CustomBookDetailsTabBar';
import MyMap from './src/screens/MyMap/MyMap';

 
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name='Maps' component={MyMap} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
};

const BookDetailsTabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <CustomBookDetailsTabBar {...props} />}>
      <Tab.Screen name="BookDetails" component={BookDetails} />
    </Tab.Navigator>
  );
};

const SettingsScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings Screen</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="MyCustomPage"
          component={MainTabNavigator}
          options={{
            headerShown: true,
            header: props => <BackHeader {...props} />,
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="BookDetailsScreen"
          component={BookDetailsTabNavigator}
          options={{
            headerTitle: () => (
              <Text
                style={{fontWeight: 'bold', fontSize: 22, color: colors.black}}>
                Book Details
              </Text>
            ),
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
