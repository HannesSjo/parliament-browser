import React from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export const Menu = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image source={require('../assets/splash.png')} style={{ height: 400 }}/>
      <TouchableOpacity onPress={() => navigation.navigate('Overview')}>
        <Text style={{ fontSize: 36 }}>Persons</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Roles')}>
        <Text style={{ fontSize: 36 }}>Roles</Text>
      </TouchableOpacity>
    </View>
  );
};