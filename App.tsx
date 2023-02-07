/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

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
  };

  return (
    // <SafeAreaView style={backgroundStyle}>
    <ScrollView>
      <View>
        <ImageBackground
          source={require('./assests/abs.png')}
          resizeMode="cover"
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          <View style={{flex: 1}}>
            <View
              style={{
                flex: 0.2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 45,
                  color: '#F1A632',
                  fontWeight: 'bold',
                  marginTop: 30,
                }}>
                LCM Calculator
              </Text>
            </View>
            <View
              style={{
                //backgroundColor: 'blue',
                height: 767,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flex: 0.6,
                  backgroundColor: '#feffd3',
                  width: '80%',
                  borderRadius: 15,
                  elevation: 25,
                  shadowColor: 'white',
                  shadowOffset: 45,
                }}>
                <View
                  style={{
                    backgroundColor: '#eeecbb',
                    marginBottom: '5%',
                    borderWidth: 1,
                    borderColor: 'gray',
                    margin: '3%',
                    elevation: 15,
                    borderRadius: 5,
                  }}>
                  <TextInput
                    placeholder="Enter First Digit"
                    onChangeText={setdigit1}
                    value={digit1}
                    keyboardType="numeric"
                  />
                </View>
                <View
                  style={{
                    backgroundColor: '#eeecbb',
                    marginBottom: '5%',
                    borderWidth: 1,
                    borderColor: 'gray',
                    margin: '3%',
                    elevation: 15,
                    borderRadius: 5,
                  }}>
                  <TextInput
                    placeholder="Enter Second Digit"
                    onChangeText={setdigit2}
                    value={digit2}
                    keyboardType="numeric"
                  />
                </View>
                <View>
                  <TouchableOpacity
                    onPress={calLCM}
                    style={{alignItems: 'center', margin: '2%'}}>
                    <View
                      style={{
                        backgroundColor: '#F0ED3A',
                        height: 40,
                        width: 150,
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text style={{color: 'black', fontWeight: '600'}}>
                        Calculate LCM
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={resetLCM}
                    style={{alignItems: 'center'}}>
                    <View
                      style={{
                        backgroundColor: '#292824',
                        height: 40,
                        width: 150,
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text style={{color: 'white', fontWeight: '600'}}>
                        Reset
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flex: 0.6,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      backgroundColor: '#f9e47e',
                      marginTop: '10%',
                      width: '70%',
                      borderRadius: 25,
                      justifyContent: 'center',
                    }}>
                    {visible === false ? (
                      <Text> </Text>
                    ) : (
                      <>
                        <Text
                          style={{
                            color: 'black',
                            fontWeight: '900',
                            fontSize: 20,
                          }}>
                          Answer is
                        </Text>
                        <Text
                          style={{
                            color: 'black',
                            fontWeight: '900',
                            fontSize: 40,
                          }}>
                          {ans}
                        </Text>
                      </>
                    )}
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
