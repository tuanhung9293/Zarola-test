export const checkInvalidMessage = (msg) => {
    const invalid = msg.split(' ').some(word => {
        return word.length > 50
    });

    return invalid;
}
