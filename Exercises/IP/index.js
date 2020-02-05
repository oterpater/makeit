function defangIPaddr(address){
    var arr = address.split("");
    for (i = 0; i < arr.length; i++){
        var elem = arr[i];
        if (elem === "."){
            arr[i] = "[.]";
        }
    }
    address = arr.join("");
    return address;
};

module.exports = defangIPaddr;