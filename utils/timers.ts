export const convertToTimeStringFormat = (minuteStr: string): string => {
    const minutes = Number(minuteStr);

    const dateObj = new Date(minutes * 60 * 1000); // Converts minutes to milliseconds
    const hours = dateObj.getUTCHours();
    const mins = dateObj.getUTCMinutes();
    const secs = dateObj.getUTCSeconds();

    const formatedTime = `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    return formatedTime;
}

export const timeCountdown = (minutes: string): void => {
    // Convert to seconds.
    let seconds = Number(minutes) * 60;

    // Set interval every second => return formated new time string
    setInterval(() => {
        seconds = seconds - 1;
        const dateObj = new Date(seconds * 1000);

        const hours = dateObj.getUTCHours();
        const mins = dateObj.getUTCMinutes();
        const secs = dateObj.getUTCSeconds();

        const formatedTime = `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        console.log(formatedTime);
        // set newTime
;
    }, 1000)
}