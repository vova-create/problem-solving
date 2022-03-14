function split(string, divider, limit){
    if(divider == undefined){
        return [string]
    }
    let start = 0;
    let dividerPosition = 0;
    const arr = [];
    for(let i = 0; i < string.length; i++){
        const currentSymbol = string[i]
        if(divider === ''){
            arr.push(string.slice(start, i + 1))
            start = i + 1
            continue
        }
        if(currentSymbol === divider){
            dividerPosition = i
            arr.push(string.slice(start, i))
            start = i + 1
        }
    }
    if(dividerPosition !== string.length){
        arr.push(string.slice(start, string.length))
    }
    return arr.slice(0, limit || string.length)
}

console.log(split('asdasdasd'))
