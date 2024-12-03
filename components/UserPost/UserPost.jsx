import { View, Text, Image } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import UserProfile from '../UserProfile/UserProfile';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faCommentAlt, faHeart } from '@fortawesome/free-regular-svg-icons';
import style from './style';

const UserPost = (props) => {
    return (
        <View style={style.userPostContainer}>
            <View style={style.userMainContainer}>
                <View style={style.userContainer}>
                    <UserProfile profileImage={props.profileImage} size={48} />
                    <View style={style.userTextContainer}>
                        <Text style={style.username}>{props.firstName} {props.lastName}</Text>
                        {props.location && <Text style={style.location}>{props.location}</Text>}
                    </View>
                </View>
                <FontAwesomeIcon icon={faEllipsis} color={'#79869F'} size={24} />
            </View>
            <View style={style.postImageContainer}>
                <Image style={style.postImage} source={props.image} />
            </View>
            <View style={style.userPostStats}>
                <View style={style.likesContainer}>
                    <FontAwesomeIcon icon={faHeart} color={'#79869F'}/>
                    <Text style={style.likesText}>{props.likes}</Text>
                </View>

                <View style={style.commentsContainer}>
                    <FontAwesomeIcon icon={faCommentAlt} color={'#79869F'}/>
                    <Text style={style.commentsText}>{props.comments}</Text>
                </View>

                <View style={style.bookmarksContainer}>
                    <FontAwesomeIcon icon={faBookmark} color={'#79869F'}/>
                    <Text style={style.bookmarksText}>{props.likes}</Text>
                </View>
            </View>
        </View>
    );
};

UserPost.propType = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    location: PropTypes.string,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    bookmarks: PropTypes.number.isRequired,
    image: PropTypes.any.isRequired,
    profileImage: PropTypes.any.isRequired,
};

export default UserPost;
