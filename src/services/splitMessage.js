export const splitMessage = (msg) => {
    const trimMsg = msg.trim().split(/\s+/).join(' ');
    let msgType, msgValue;

    if (trimMsg.length <= 50) {
        msgType = 'string';
        msgValue = trimMsg;
    } else {
        msgType = 'array';

        const msgArray = trimMsg.split(/\s+/);

        const reduceArray = msgArray.reduce((allValues, word) => {
            let lastIndex = allValues.length - 1;
            if (allValues[lastIndex].length === 0) {
				allValues[lastIndex] += word;
			} else if ((allValues[lastIndex].length + word.length) < 50) {
                allValues[lastIndex] += ' ';
                allValues[lastIndex] += word;
            } else {
                allValues[lastIndex + 1] = word;
            }
			return allValues
        }, [''])

        msgValue = reduceArray.map((item, index) => {
            return `${index + 1}/${reduceArray.length} ${item}`
        })
    }

    return {msgType, msgValue}
}