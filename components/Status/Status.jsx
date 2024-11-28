import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import style from './style';

const Status = () => {
    const [isStatus, setIsStatus] = useState(true);
    const array = Array(10).fill(0);
    return (
        <View style={style.container}>
            <ScrollView horizontal={true} style={style.scrollContainer}>
                {
                    array.map((_, value) => {
                        const statusCondition = value % 4 === 0; // Check if divisible by 4
                        return (
                            <View key={value} style={style.statusOuterContainer}>
                                <View style={statusCondition ? style.statusRingContainerTrue : style.statusRingContainerFalse} />
                                <View style={style.statusMediaContainer} />
                                <Text style={style.statusTextContainer}>Jhon Doe {value}</Text>
                            </View>
                        )
                    })
                }

            </ScrollView>

        </View>
    )
}

export default Status