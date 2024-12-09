import { StyleSheet } from 'react-native';
import { horizontalScale, scaleFontSize } from '../../assets/styles/scaling';

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Inter-Bold',
        fontSize: scaleFontSize(16),
        color: '#022150',
        padding: horizontalScale(15),
    },
    titleNotActive: {
        color: '#79869F',
        fontFamily: 'Inter-Regular',
    },
});

export default styles;
