import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../assets/styles/scaling";

const styles = StyleSheet.create({
    profileTabContentconainer: {
        backgroundColor: '#FFFFFF',
    },
    profileTabconainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: horizontalScale(20),
        justifyContent: 'space-between',
    },
    image: {
        width: horizontalScale(140),
        height: verticalScale(90),
        resizeMode: 'contain',
    },

});

export default styles;
