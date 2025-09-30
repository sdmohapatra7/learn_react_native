
import React from 'react'
import { Tabs } from 'expo-router'
import {Ionicons} from '@expo/vector-icons'
export default function TabsLayout() {
  return (
    <Tabs
    screenOptions={{
        tabBarActiveTintColor:"#e00202ff",
        tabBarInactiveTintColor:"#068a1cff",
        tabBarStyle:{
            backgroundColor:"#02083fff",
            borderTopWidth:1,
            borderTopColor:"#636161ff",
            height:90,
            paddingBottom:30,
            paddingTop:10,
        },
        tabBarLabelStyle:{
            fontSize:12,
            fontWeight:600
        },
        headerShown:false,
    }}
    >
      <Tabs.Screen
      name='index'
      options={{
        title:'Todos',
        tabBarIcon:({color,size})=>(
            <Ionicons name='flash-outline' size={size} color={color}/>
        )
      }}
      />
      <Tabs.Screen
      name='settings'
      options={{
        title:'Settings',
        tabBarIcon:({color,size})=>(
            <Ionicons name='settings' size={size} color={color}/>
        )
      }}
      />
    </Tabs>
  )
}