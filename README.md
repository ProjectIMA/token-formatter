# Token Formatter

## Description
This script reads a list of tokens from a file, extracts the relevant portion of each token, and saves the formatted tokens to a new file.

## Features
- Reads tokens from `tokenstoformat.txt`
- Formats each token by extracting the portion after the last `@` and `:` symbol
- Saves the formatted tokens to `formattedtokens.txt`

## Prerequisites
- Node.js installed on your system

## Installation
1. Clone or download this repository.
2. Ensure you have Node.js installed.

## Usage
1. Place your tokens in a file named `tokenstoformat.txt`, ensuring each token is on a new line.
2. Run the script using:
   ```sh
   node index.js
   ```
3. The formatted tokens will be saved in `formattedtokens.txt`.

## Example
### Input (`tokenstoformat.txt`):
```
user@domain:token123
anotheruser@service:token456
simpletoken
```

### Output (`formattedtokens.txt`):
```
token123
token456
simpletoken
```

## Error Handling
- If the input file is missing, an error message will be displayed.
- Any empty lines in the input file are ignored.

## License
This script is open-source. Feel free to modify and distribute as needed.
