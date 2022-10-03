function caesarCipher(string, shift) {
    let resultsArr = [];
    for (let i = 0; i < string.length; i++) {
        let code = string.charCodeAt(i) + shift
        while (code  > 122) {
            code = (code - 122) + 96
        }
        resultsArr.push(String.fromCharCode(code))
    }
    return resultsArr.join("")
    }
console.log(caesarCipher("fcjjm", 2))