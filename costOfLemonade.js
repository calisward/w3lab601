const costOfLemonade = function (numberOfLemonades) {
    if (typeof numberOfLemonades !== 'number' || numberOfLemonades < 0) {
        throw new Error('invalid argument: numberOfLemonades');
    }

    const price = numberOfLemonades < 5 ? 100 : (numberOfLemonades < 10 ? 95 : 90);

    return numberOfLemonades * price;
};

export { costOfLemonade };