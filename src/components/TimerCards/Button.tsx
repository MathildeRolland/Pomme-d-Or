// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { SetNewConcentrationTime } from '../../redux/actions';
// import { StyleSheet, Pressable, Text } from 'react-native';
// import Colors from '../../../assets/vars/colors';
// import { RootState } from '../../redux';

// // RN PAPER
// import { Button } from 'react-native-paper';

// export type Props = {
//     time: number,
// };

// const Button: React.FC<Props> = ({ time }: Props) => {
//     const { concentrationTime } = useSelector((state: RootState) => state.timer);
//     const dispatch = useDispatch();

//     // Function to start countdown
//     const timeCountdown = (seconds: number): void => {
//         // Set interval every second => return formated new time string
//         const countdown = setInterval(() => {
//             seconds = seconds - 1;
//             // setNewTime(seconds);
//             dispatch(SetNewConcentrationTime(seconds));
//             if(seconds === 0) {
//                 clearInterval(countdown);
//             }
//         }, 1000);
//     }
    
//     return (
//         <Button
//             mode="contained"
//             style={styles.button}
//             onPress={() => {
//                 timeCountdown(time)
//             }}
//         >
//             {concentrationTime === 0 ? "Chill!" : "Start"}
//         </Button> 
//     )
// }

// const styles = StyleSheet.create({
//     button: {
//         width: '50%',
//         borderWidth: 1,
//         borderColor: Colors.pink,
//         borderRadius: 5,
//         paddingHorizontal: 25,
//         paddingVertical: 10
//     },
//     buttonTitle: {
//         color: Colors.pink,
//         marginHorizontal: 25,
//         marginVertical: 5
//     }
// });

// export default Button;