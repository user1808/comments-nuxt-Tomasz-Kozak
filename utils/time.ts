export function formatTimeDiff(time: Date): string {
    const then = time.getTime()
    const now = new Date().getTime();

    const seconds = Math.floor((now - then)/1000);
    const minutes = Math.floor(seconds/60);
    const hours = Math.floor(minutes/60);
    const days = Math.floor(hours/24);

    if (days > 1) {
        return `${days} dni`;
    } else if (days === 1) {
        return `${days} dzień`;
    }

    if (hours > 4 && hours < 22) {
        return `${hours} godzin`;
    } else if ((hours > 1 && hours <= 4) || hours >= 22) {
        return `${hours} godziny`;
    } else if (hours === 1) {
        return `${hours} godzinę`;
    }

    if (minutes > 1) {
        return `${minutes} minut`;
    } else if (minutes === 1) {
        return `${minutes} minutę`;
    }

    return `${seconds} sekund`;
}