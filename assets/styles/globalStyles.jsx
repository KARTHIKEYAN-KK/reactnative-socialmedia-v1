import { StyleSheet } from 'react-native';
import { horizontalScale, scaleFontSize, verticalScale } from './scaling';

const globalStyles = StyleSheet.create({
    global: {
        // width: '100%',
        // height: '100%',
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: horizontalScale(27),
        marginRight: horizontalScale(17),
        marginTop: verticalScale(30),
    },
    messageContainer: {
        padding: horizontalScale(14),
        backgroundColor: '#F9FAFB',
        borderRadius: 100,
        height: scaleFontSize(48),
        width: scaleFontSize(48),
        justifyContent: 'center',
        alignItems: 'center',
    },
    messageCountContainer: {
        backgroundColor: '#F35BAC',
        width: scaleFontSize(12),
        height: scaleFontSize(12),
        borderRadius: scaleFontSize(12),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        right: 6,
        top: 8,
    },
    messageCount: {
        color: '#FFFFFF',
        fontSize: scaleFontSize(8),
        fontFamily: 'Inter-SemiBold',
    },
    userStoryContainer: {
        marginTop: verticalScale(20),
        marginHorizontal: horizontalScale(10),
    },
    userPostContainer: {
        marginHorizontal: horizontalScale(24),
    },
});

export default globalStyles;
