const fibonacci = function(member) {
    let memberNumber = Number(member);
    if (memberNumber < 0) return "OOPS";
    
    const fibList = [0,1];

    for (let i = 2; i <= member; i++) {
        fibList.push(fibList[i-1] + fibList[i-2]);
    }
    return fibList[memberNumber];
}; 

// Do not edit below this line
module.exports = fibonacci;
