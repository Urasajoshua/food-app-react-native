import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const SignUp = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState("")
    const navigation = useNavigation()
  return (
    <View style={{padding:40}}>
      <View style={{padding:10}}>
        <Text style={{textAlign:'center',fontSize:24}}>
            SignUp
        </Text>
      </View>
{/**email */}
      <View style={{alignItems:'center',justifyContent:'center',padding:10}}>
        <TextInput value={email} onChangeText={(text)=>setEmail(text)} style={{borderBottomWidth:1,width:120}} placeholder='write your email'/>
      </View>

      {/**password */}
      <View style={{alignItems:'center',justifyContent:'center',padding:10}}>
        <TextInput value={password} onChangeText={(text)=>setPassword(text)} style={{borderBottomWidth:1,width:120}} placeholder='write your password'/>
      </View>
      {/**login */}

      <View style={{padding:10}}>
        <Pressable style={{borderWidth:1,padding:10}}>
            <Text style={{textAlign:'center'}}>Login</Text>
        </Pressable>
      </View>

      <View>
        <Pressable onPress={()=>navigation.navigate('login')} style={{padding:10}}>
            <Text style={{textAlign:'center'}}>
                dont have account login
            </Text>
        </Pressable>
      </View>
    </View>

    
  )
}

export default SignUp

const styles = StyleSheet.create({})