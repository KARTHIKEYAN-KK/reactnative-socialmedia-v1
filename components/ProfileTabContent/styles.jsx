import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../assets/styles/scaling";

const styles = StyleSheet.create({
    profileTabContentconainer: {
        backgroundColor: '#FFFFFF',
    },
    profileTabconainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: horizontalScale(21),
        justifyContent: 'space-between',
    },
    image: {
        // backgroundColor: 'red',
        width: horizontalScale(140),
        height: verticalScale(75.5),
        resizeMode: 'contain',
        marginTop: verticalScale(11),
    },

});

export default styles;
