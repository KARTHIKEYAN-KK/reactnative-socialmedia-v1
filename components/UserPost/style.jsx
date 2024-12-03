import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    userContainer: {
        flexDirection: 'row',
    },
    userTextContainer: {
        justifyContent: 'center',
        marginLeft: 10,
    },
    userMainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    username: {
        color: '#000',
        fontFamily: 'Inter-SemiBold',
        fontSize: 16,
    },
    location: {
        color: '#79869F',
        fontFamily: 'Inter-ExtraLight',
        fontSize: 12,
        marginTop: 2,
    },
    userPostContainer: {
        marginTop: 35,
        borderBottomWidth: 1,
        paddingBottom: 20,
        borderBottomColor: '#EFF2F6',
    },
    postImageContainer: {
        alignItems: 'center',
        marginVertical: 10,
    },
    postImage: {
        resizeMode: 'contain',
        width: '100%',
    },
    bookmarksContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 27,
    },
    bookmarksText: {
        marginLeft: 3,
        color: '#79869F',
    },
    commentsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 27,
    },
    commentsText: {
        marginLeft: 3,
        color: '#79869F',
    },
    likesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    likesText: {
        marginLeft: 3,
        color: '#79869F',
    },
    userPostStats: {
        marginLeft: 10,
        flexDirection: 'row',
    },
});

export default style;
