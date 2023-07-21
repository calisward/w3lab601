const separateOddsAndEvens = function (arr) {
    return arr.reduce(([odd, even], num) => {
        if (num % 2 === 0) {
            even.push(num)
        }
        else {
            odd.push(num)
        }

        return [odd, even];
    }, [[], []]);
};

export { separateOddsAndEvens };