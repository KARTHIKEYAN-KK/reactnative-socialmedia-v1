import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    storyContainer: {
        marginRight: horizontalScale(9),
        marginLeft: horizontalScale(4),
    },
    firstName: {
        fontFamily: 'Inter-Regular',
        fontSize: scaleFontSize(17),
        color: '#022150',
        textAlign: 'center',
        marginTop: verticalScale(6),
    },
});

export default style;
