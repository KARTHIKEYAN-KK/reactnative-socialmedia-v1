import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: 120,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    scrollContainer: {
        flexDirection: 'row',
        marginRight: 5,
        marginLeft: 5,
    },
    statusOuterContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    statusRingContainerFalse: {
        width: 65,
        height: 65,
        borderRadius: 65,
        borderWidth: 2,
        borderColor: '#C4C4C4',
        position: 'absolute',
        top: -5,
    },
    statusRingContainerTrue: {
        width: 65,
        height: 65,
        borderRadius: 65,
        borderWidth: 2,
        borderColor: '#F35BAA',
        position: 'absolute',
        top: -5,
    },
    statusMediaContainer: {
        backgroundColor: '#C4C4C4',
        width: 56,
        height: 56,
        borderRadius:56,
        marginTop: 17,
    },
    statusTextContainer: {
        color: '#022150',
        fontFamily: 'Inter-SemiBold',
        marginTop: 8,
        width: 75,
        height: 100,
        textAlign: 'center',
    },
});

export default style;
