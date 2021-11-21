export const convertToTimeStringFormat = (seconds: number): string => {
    const dateObj = new Date(seconds * 1000); // Converts minutes to milliseconds
    const hours = dateObj.getUTCHours();
    const mins = dateObj.getUTCMinutes();
    const secs = dateObj.getUTCSeconds();

    const formatedTime = `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    return formatedTime;
}

export const timeCountdown = (seconds: number, setNewTime: React.Dispatch<React.SetStateAction<number>>, isModeOn: boolean): void => {
    // Set interval every second => return formated new time string
    const countdown = setInterval(() => {
        seconds = seconds - 1;
        setNewTime(seconds);
        if(seconds === 0) {
            clearInterval(countdown);
        }
    }, 1000);
}


// export const timeCountdown = setInterval((seconds: number, setNewTime: React.Dispatch<React.SetStateAction<number>>, isModeOn: boolean) => {
//     seconds = seconds - 1;
//     setNewTime(seconds);
//     if(seconds === 0 || !isModeOn) {
//         clearInterval(timeCountdown);
//     }
// }, 1000);