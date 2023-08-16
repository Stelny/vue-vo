const formatSecondsToMinutesAndSeconds = (totalSeconds: number): string => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
};

const formatTime = (entry: Date | string): string => {
    let date: Date;
  
    if (typeof entry === "string") {
      date = new Date(entry);
    } else if (entry instanceof Date) {
      date = entry;
    } else {
      return "neplatný datum";
    }
  
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
  
    return `${hours}:${minutes}:${seconds}`;
  };
  

export {
    formatTime,
    formatSecondsToMinutesAndSeconds
}