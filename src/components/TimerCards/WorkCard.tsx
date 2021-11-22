import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View, Text, Pressable, BackHandler } from 'react-native';
import Colors from '../../../assets/vars/colors'

// == COMPONENTS
import Timer from './Timer';
import Button from './Button';
import { RootState } from '../../redux';

// == == == == == == == == == == TYPES == == == == == == == == == == //
// interface Props {
//     background: string,
//     textColor: string,
//     button: string,
// }
// == == == == == == == == == == == == == == == == == == == == == == //


const WorkCard = () => {
    const { concentrationTime } = useSelector((state: RootState) => state.timer);



    return (
        <View style={styles.container}>
            <Timer 
                time={concentrationTime}
            />
            <Button
                time={concentrationTime}
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