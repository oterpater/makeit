
function caracteresEnComun(str1,str2){
        arr = [];
        var letters1 = str1.split("");
        var letters2 = str2.split("");
        for (i=0;i<letters1.length;i++){
                for(j=0;j<letters2.length;j++){
                        if (letters1[i] === letters2[j] && arr.indexOf(letters1[i]) === -1){
                                arr.push(letters1[i]);
                        }
                }
        }
        
return arr;
};

console.log(caracteresEnComun("german", "gabriela"));