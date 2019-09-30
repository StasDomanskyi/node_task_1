Implement CLI tool that will encode and decode a text file by Caesar cipher https://en.wikipedia.org/wiki/Caesar_cipher.

1. CLI tool should accept 4 options:
    - an action: encode/decode
    - a shift
    - an input file
    - an output file
2. Action (encode/decode) and the shift are required, if one of them missed - an error should be shown.
3. If the input file is missed - use stdin as an input source.
4. If the output file is missed - use stdout as an output destination.
5. If the input file is given but doesn't exist or you can't read it (e.g. because of permissions or it is a directory) - human-friendly error should be printed in stderr.
6. If the output file is given and exist or you can't write it (e.g. because of permissions or it is a directory) - human-friendly error should be printed in stderr.
7. If passed params are fine the output file should contain encoded/decoded content of input file.
8. For encoding/decoding use only the English alphabet (lower-case), all other characters should be kept untouched.
9. Streams should be used for reading, writing and transforming.
10. Test cases:
```
"the quick brown fox jumps over the lazy dog" => "aol xbpjr iyvdu mve qbtwz vcly aol shgf kvn"
"aol xbpjr iyvdu mve qbtwz vcly aol shgf kvn" => "the quick brown fox jumps over the lazy dog"
```

For command-line arguments could be used one of https://www.npmjs.com/package/commander, https://www.npmjs.com/package/minimist or any other module
For communication with FS build-in module would be enough (you still could use any you want)
