import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View, Text, Pressable, BackHandler } from 'react-native';
import Colors from '../../../assets/vars/colors'

// == COMPONENTS
import Timer from './Timer';
import Button from './Button';
import { RootState } from '../../redux';

// == == == == == == == == == == TYPES == == == == == == == == == == //
interface Props {
    concentrationTime: number,
    setConcentrationTime: React.Dispatch<React.SetStateAction<number>>,
    background: string,
    textColor: string,
    button: string,
    isConcentrationOn: boolean,
    setIsConcentrationOn: React.Dispatch<React.SetStateAction<boolean>>
}
// == == == == == == == == == == == == == == == == == == == == == == //


const WorkCard = ({ setConcentrationTime, background, textColor, button, isConcentrationOn, setIsConcentrationOn }: Props) => {
    const { concentrationTime } = useSelector((state: RootState) => state.timer);



    return (
        <View style={styles.container}>
            <Timer 
                time={concentrationTime}
                background={background}
                textColor={textColor}
            />
            <Button
                text={button}
                time={concentrationTime}
                setTime={setConcentrationTime}
                background={isConcentrationOn ? Colors.darkGrey : Colors.pink}
                textBorder={isConcentrationOn ? Colors.pink : Colors.darkGrey}
                isModeOn={isConcentrationOn}
                toggleMode={setIsConcentrationOn}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.darkGrey,
        borderRadius: 15,
    }
})

export default WorkCard;