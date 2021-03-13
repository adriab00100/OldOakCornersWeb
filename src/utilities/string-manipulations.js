
const toKebabCase = (inputString) => {
    return inputString.toLowerCase().replace(' ', '-')
};

exports.toKebabCase = toKebabCase;