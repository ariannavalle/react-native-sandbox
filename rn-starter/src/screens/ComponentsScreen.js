import React from 'react'
import { Text, StyleSheet, View} from 'react-native' 

const ComponentsScreen = () => {
    const name = 'Arianna'

    return (
    <View>
        <Text style={styles.headerStyle}>This is the Components Screen</Text>
        <Text style={styles.textStyle}>My name is {name}</Text>
    </View> 
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 45
    },
    textStyle: {
        fontSize: 20
    }
})

export default ComponentsScreen