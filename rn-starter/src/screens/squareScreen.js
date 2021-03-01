import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 10;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, interval) => {

        switch (color) {
            case 'red':
                red + interval > 255 || red + interval < 0? null :  setRed(red+interval)
                return;
            case 'green':
                green + interval > 255 || green + interval < 0? null :  setGreen(green+interval)
                return;
            case 'blue':
                blue + interval > 255 || blue + interval < 0? null :  setBlue(blue+interval)
                return;
        }
    }

    return (
        <View>
            <Text>Current RGB Value: {red}, {green}, {blue}</Text>
            <ColorCounter
                onIncrease={() => setColor('red', COLOR_INCREMENT )}
                onDecrease={() => setColor('red', COLOR_INCREMENT * -1 )}
                color="Red"
            />
            <ColorCounter
                onIncrease={() => setColor('green', COLOR_INCREMENT )}
                onDecrease={() => setColor('green', COLOR_INCREMENT * -1 )}
                color="Green"
            />
            <ColorCounter
                onIncrease={() => setColor('blue', COLOR_INCREMENT )}
                onDecrease={() => setColor('blue', COLOR_INCREMENT * -1 )}
                color="Blue"
            />
            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
        </View>
    )
}

const styles = StyleSheet.create({});

export default SquareScreen