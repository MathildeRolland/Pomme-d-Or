
export const convertToTimeStringFormat = (seconds: number): string => {
    const dateObj = new Date(seconds * 1000); // Converts minutes to milliseconds
    const hours = dateObj.getUTCHours();
    const mins = dateObj.getUTCMinutes();
    const secs = dateObj.getUTCSeconds();

    const formatedTime = `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    return formatedTime;
}
