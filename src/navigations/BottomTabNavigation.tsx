import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import Home from '../screens/Home'
import Search from '../screens/Search'
import Favotire from '../screens/Favotire'

const Tab = createBottomTabNavigator()

function BottomTabNavigation(): JSX.Element {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="home" size={28} color={color} />
                    ),
                    headerShown: false,
                }}
            />

            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="heart" size={28} color={color} />
                    ),
                    headerShown: false,
                }}
            />

            <Tab.Screen
                name="Favotire"
                component={Favotire}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="heart" size={28} color={color} />
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation
