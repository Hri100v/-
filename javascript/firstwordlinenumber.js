var textData = `Fast Fourier transforms are widely used for applications in engineering, music, science, and mathematics.
The basic ideas were popularized in 1965,
but some algorithms had been derived as early as 1805.
In 1994, Gilbert Strang described the FFT as "the most important numerical algorithm of our lifetime",[3][4] and it was included in
Top 10 Algorithms of 20th Century by the IEEE magazine Computing in Science & Engineering.[5]`;

var wordsArray = textData.replace(/^(\S+).*[0-9].*$/gm, "$1").split("\n").map(x => {
    if(x.match(/^.*\s.*$/g)) {
        return x;
    }
    
    return x.toUpperCase();
});

console.table(wordsArray);
