import React from 'react';

import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Title from './components/Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import globalStyles from './assets/styles/globalStyles';


const App = () => {

  return (
    <SafeAreaView style={globalStyles.global}>
      <View style={globalStyles.header}>
        <Title title="Let’s Explore" />
        <TouchableOpacity style={globalStyles.messageContainer} onPress={() => { console.log('message clicked'); }}>
          <FontAwesomeIcon icon={faEnvelope} size={20} color={'#898DAE'} />
          <View style={globalStyles.messageCountContainer}>
            <Text style={globalStyles.messageCount}>
              2
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{
        marginLeft: 28,
        marginRight: 27,
        width: 350,
        height: 90,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
          <View style={{ 
            width: 65, 
            height: 65, 
            borderRadius: 65 ,
            borderWidth: 2,
            borderColor: '#F35BAA',
            position: 'absolute',
            top: -5
          }} />
          <View style={{ backgroundColor: '#C4C4C4', width: 56, height: 56, borderRadius: 56 }} />
          <Text style={{color: '#022150', fontFamily: 'Inter-SemiBold', marginTop: 8}}>Jhon Doe</Text>
        </View>

        <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
          <View style={{ 
            width: 65, 
            height: 65, 
            borderRadius: 65 ,
            borderWidth: 2,
            borderColor: '#F35BAA',
            position: 'absolute',
            top: -5
          }} />
          <View style={{ backgroundColor: '#C4C4C4', width: 56, height: 56, borderRadius: 56 }} />
          <Text style={{color: '#022150', fontFamily: 'Inter-SemiBold', marginTop: 8}}>Jhon Doe</Text>
        </View>

        <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
          <View style={{ 
            width: 65, 
            height: 65, 
            borderRadius: 65 ,
            borderWidth: 2,
            borderColor: '#F35BAA',
            position: 'absolute',
            top: -5
          }} />
          <View style={{ backgroundColor: '#C4C4C4', width: 56, height: 56, borderRadius: 56 }} />
          <Text style={{color: '#022150', fontFamily: 'Inter-SemiBold', marginTop: 8}}>Jhon Doe</Text>
        </View>

        <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
          <View style={{ 
            width: 65, 
            height: 65, 
            borderRadius: 65 ,
            borderWidth: 2,
            borderColor: '#F35BAA',
            position: 'absolute',
            top: -5
          }} />
          <View style={{ backgroundColor: '#C4C4C4', width: 56, height: 56, borderRadius: 56 }} />
          <Text style={{color: '#022150', fontFamily: 'Inter-SemiBold', marginTop: 8}}>Jhon Doe</Text>
        </View>

      </View>
    </SafeAreaView>
  );
};



export default App;
