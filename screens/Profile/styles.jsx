import { StyleSheet } from 'react-native';
import { scaleFontSize, verticalScale, horizontalScale } from '../../assets/styles/scaling';

const styles = StyleSheet.create({
    ProfileImageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: verticalScale(25),
    },
    userName: {
        marginTop: verticalScale(15),
        textAlign: 'center',
        fontFamily: 'Inter-Bold',
        fontSize: scaleFontSize(20),
    },
    statAmount: {
        textAlign: 'center',
        fontFamily: 'Inter-Bold',
        fontSize: scaleFontSize(20),
        color: '#022150',
    },
    statValue: {
        textAlign: 'center',
        fontFamily: 'Inter-Regular',
        fontSize: scaleFontSize(15),
        color: '#79869F',
    },
    statContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: horizontalScale(30),
        paddingVertical: verticalScale(20),
        borderBottomWidth: 1,
        borderColor: '#E9EFF1',
    },
    statBorder: {
        borderRightWidth: 1,
        borderColor: '#E9EFF1',
    },
    statContent: {
        flex: 1,
    },
    scrollViewCont: {
        flexGrow: 1,
    },
});

export default styles;
