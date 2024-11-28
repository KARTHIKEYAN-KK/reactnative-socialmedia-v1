import React from 'react';

import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Title from './components/Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import globalStyles from './assets/styles/globalStyles';
// import Status from './components/Status/Status';
import UserStories from './components/UserStories/UserStories';
import userStoryData from './sample_data';

const App = () => {
  console.log(userStoryData)
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
      <View style={globalStyles.userStoryContainer}>
        <FlatList
          data={userStoryData}
          renderItem={({ item }) => (<UserStories firstName={item.firstName} profileImage={item.profileImage} />)}
          horizontal={true}
        />
      </View>
    </SafeAreaView>
  );
};



export default App;
