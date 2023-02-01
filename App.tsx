/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

function App(): JSX.Element {
  const [digit1, setdigit1] = useState('');
  const [digit2, setdigit2] = useState('');
  const [ans, setAns] = useState('');
  const [visible, setvisible] = useState(false);
  const calLCM = () => {
    let d1 = parseInt(digit1, 10);
    let d2 = parseInt(digit2, 10);
    let min = d1 > d2 ? d1 : d2;
    while (true) {
      if (min % d1 === 0 && min % d2 === 0) {
        break;
      }
      min++;
    }
    setAns(min.toString());
    setvisible(true);
  };

  const resetLCM = () => {
    setdigit1('');
    setdigit2('');
    setAns('');
    setvisible(false);
  }

  return (
    // <SafeAreaView style={backgroundStyle}>
    <View style={{flex: 1}}>
      <View style={{flex: 0.1}}>
        <Text style={{fontSize:30,color:'black',fontWeight: 'bold' , marginTop:30, }}>LCM Calculator</Text>
      </View>
      <View style={{flex: 0.5, margin:10}}>
        <TextInput
          placeholder="Enter First Digit"
          onChangeText={setdigit1}
          value={digit1}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Enter Second Digit"
          onChangeText={setdigit2}
          value={digit2}
          keyboardType="numeric"
        />
        <Button onPress={calLCM} title="Calculate LCM" color="#1fbbe7" />
        <Button onPress={resetLCM} title="Reset" color='red' />
      </View>
      <View style={{flex: 0.4, alignItems: 'center'}}>
      {visible === false ? <Text> </Text> : <Text>Answer is : {ans}</Text>}
      </View>
    </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  buttons: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
