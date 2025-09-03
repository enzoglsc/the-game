import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput } from 'react-native';
import { stylesSignIn } from './styles';


export function SignIn () {
      return (
    <View style={stylesSignIn.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <TextInput style={{height: 50,width:200,borderBottomWidth:2}} />
    </View>
  );

}

