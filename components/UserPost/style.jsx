import { StyleSheet } from 'react-native';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
    userContainer: {
        flexDirection: 'row',
    },
    userTextContainer: {
        justifyContent: 'center',
        marginLeft: horizontalScale(10),
    },
    userMainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    username: {
        color: '#000',
        fontFamily: 'Inter-SemiBold',
        fontSize: scaleFontSize(20),
    },
    location: {
        color: '#79869F',
        fontFamily: 'Inter-ExtraLight',
        fontSize: scaleFontSize(14),
        marginTop: verticalScale(1),
    },
    userPostContainer: {
        marginTop: verticalScale(20),
        borderBottomWidth: verticalScale(1),
        paddingBottom: verticalScale(15),
        borderBottomColor: '#EFF2F6',
    },
    postImageContainer: {
        alignItems: 'center',
        marginVertical: verticalScale(10),
    },
    postImage: {
        resizeMode: 'contain',
        width: '100%',
    },
    bookmarksContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: horizontalScale(26),
    },
    bookmarksText: {
        marginLeft: horizontalScale(3),
        color: '#79869F',
    },
    commentsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: horizontalScale(26),
    },
    commentsText: {
        marginLeft: horizontalScale(3),
        color: '#79869F',
    },
    likesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    likesText: {
        marginLeft: horizontalScale(3),
        color: '#79869F',
    },
    userPostStats: {
        marginLeft: horizontalScale(10),
        flexDirection: 'row',
    },
});

export default style;
