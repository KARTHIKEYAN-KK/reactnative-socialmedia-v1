import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
    global: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 27,
        marginRight: 17,
        marginTop: 30,
    },
    messageContainer: {
        padding: 14,
        backgroundColor: '#F9FAFB',
        borderRadius: 100,
        height: 48,
        width: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },
    messageCountContainer: {
        backgroundColor: '#F35BAC',
        width: '10',
        height: '10',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        right: 10,
        top: 12,
    },
    messageCount: {
        color: '#FFFFFF',
        fontSize: 6,
        fontFamily: 'Inter-SemiBold',
    },
    userStoryContainer: {
        marginTop: 20,
        marginHorizontal: 10,
    },
    userPostContainer: {
        marginHorizontal: 24,
    },
});

export default globalStyles;
