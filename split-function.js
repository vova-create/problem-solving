function split(string, divider, limit){
    if(divider == undefined){
        return [string]
    }
    let start = 0;
    let dividerPosition = 0;
    const arr = [];
    for(let i = 0; i < string.length; i++){
        if(arr.length === limit){
            return arr
        }
        const currentSymbol = string[i]
        if(divider === ''){
            arr.push(currentSymbol)
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
    return arr
}

console.log(split('asdasdasd', '', 5 ))
