import React, { useEffect, useState } from 'react';

import {
  FlatList,
  SafeAreaView,
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
import UserPost from './components/UserPost/UserPost';
import userSampleData from './sample_data';
import { scaleFontSize } from './assets/styles/scaling';

const App = () => {

  const userStoriesPageSize = 5;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const userPostPageSize = 2;
  const [userPostCurrentPage, setUserPostCurrentPage] = useState(1);
  const [userPostRenderedData, setUserPostRenderedData] = useState([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    setIsLoadingUserPosts(true);
    const getIntialData = pagination(userSampleData.userStoryData, 1, userStoriesPageSize);
    const getIntialPost = pagination(userSampleData.userPostData, 1, userPostPageSize);
    setUserStoriesRenderedData(getIntialData);
    setUserPostRenderedData(getIntialPost);
    setIsLoadingUserStories(false);
    setIsLoadingUserPosts(false);
  }, []);

  return (
    <SafeAreaView style={globalStyles.global}>
      <View>
        <FlatList data={userPostRenderedData}
          ListHeaderComponent={<>
            <View style={globalStyles.header}>
              <Title title="Let’s Explore" />
              <TouchableOpacity style={globalStyles.messageContainer} onPress={() => { console.log('message clicked'); }}>
                <FontAwesomeIcon icon={faEnvelope} size={scaleFontSize(24)} color={'#898DAE'} />
                <View style={globalStyles.messageCountContainer}>
                  <Text style={globalStyles.messageCount}>
                    2
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={globalStyles.userStoryContainer}>
              <FlatList
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                  if (isLoadingUserStories) {
                    return;
                  }
                  setIsLoadingUserStories(true);
                  const contentToAppend = pagination(userSampleData.userStoryData, userStoriesCurrentPage + 1, userStoriesPageSize);
                  if (contentToAppend.length > 0) {
                    setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                    setUserStoriesRenderedData((prev) => [...prev, ...contentToAppend]);
                  }
                  setIsLoadingUserStories(false);
                }}
                data={userStoriesRenderedData}
                renderItem={({ item }) => (<UserStories key={'userStory' + item.id} firstName={item.firstName} profileImage={item.profileImage} />)}
                horizontal={true}
              />
            </View></>}

          renderItem={({ item }) => (<View style={globalStyles.userPostContainer}>
            <UserPost
              firstName={item.firstName}
              lastName={item.lastName}
              location={item.location}
              likes={item.likes}
              comments={item.comments}
              bookmarks={item.bookmarks}
              image={item.image}
              profileImage={item.profileImage}
            />
          </View>)}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadingUserPosts) {
              return;
            }
            setIsLoadingUserPosts(true);
            const postToAppend = pagination(userSampleData.userPostData, userPostCurrentPage + 1, userPostPageSize);
            if (postToAppend.length > 0) {
              setUserPostCurrentPage(userPostCurrentPage + 1);
              setUserPostRenderedData((prev) => [...prev, ...postToAppend]);
            }
            setIsLoadingUserPosts(false);
            console.log(`Post page --- ${userPostCurrentPage}`);
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};



export default App;
