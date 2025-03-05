const fs = require('fs');

function formatToken(token) {
    const parts = token.split('@');
    if (parts.length < 2) {
        return token;
    }

    const tokenPart = parts[parts.length - 1].split(':').pop();
    return tokenPart;
}

function main() {
    fs.readFile('tokenstoformat.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }

        const tokens = data.split('\n').filter(token => token.trim() !== '');

        const formattedTokens = tokens.map(token => formatToken(token.trim()));

        fs.writeFile('formattedtokens.txt', formattedTokens.join('\n'), (err) => {
            if (err) {
                console.error('Error writing to the file:', err);
            } else {
                console.log("Tokens have been formatted and saved to 'formattedtokens.txt'.");
            }
        });
    });
}

main();
