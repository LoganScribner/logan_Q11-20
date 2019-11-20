//11th method
function firstLast6(arr){
    if(arr[0] == 6 || arr[arr.length - 1] == 6){
        return true;
    }
    return false;
}

//12th method
function has23(arr) {
    if((arr[0] > 3) && (arr[1] > 3)){
        return false
    }
    if(arr[0] == 2 || 3){
        return true;
    }
    if(arr[1] == 2 || 3){
        return true;
    }
}

//13th method
function fix23(arr){
    if((arr[0] == 2) && (arr[1] == 3)){
        arr[1] = 0;
        return arr;
    }
    if((arr[1] ==2) && (arr[2] == 3)){
        arr[2] = 0;
        return arr;
    }else{
        return arr;
    }
}

//14th method
function countYZ(arr){
    var count = 0;
    if(arr[arr.length - 1] == "z" || arr[arr.length - 1] == "y" || arr[arr.length - 1] == "Z" || arr[arr.length - 1] == "Y"){
        count += 1;
    }
    for(var i = 0; i <= arr.length; i++){
        if((arr[i] == " ") && (arr[i - 1] == "z" || arr[i - 1] == "y" || arr[i - 1] == "Z" || arr[i - 1] == "Y")){
                count += 1;
        }
    }
    return count;
}

//15th method
function endOther(str1, str2){
    var shorter = 0;
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    if(str1.length > str2.length){
        shorter = str2.length;
        if(str1.substring(str1.length - shorter) == str2){
            return true;
        }
    }
    if(str2.length > str1.length){
        shorter = str1.length;

        if(str2.substring(str2.length - shorter) == str1){
            return true;
        }
    }
    if(str1 == str2){
        return true;
    }
    return false;
}

//16th method
function starOut(str){
    var ans = "";
    for(var i = 0; i < str.length; i++){
        if(!(str.substring(i, i + 1) == "*" || str.substring(i + 1, i + 2) == "*" || str.substring(i - 1, i) == "*")){
            ans += str.substring(i, i + 1);
        }
    }
    return ans;
}

//17th method
function getSandwich(str){
    var sand = "";
    var backBread = 0;
    var frontBread = 0;
    for(var i = 0; i < str.length; i++){
        if(str.indexOf("bread") != str.lastIndexOf("bread")){
            backBread += str.lastIndexOf("b");
            frontBread += str.indexOf("d");
            sand += str.substring(frontBread + 1, backBread);
            return sand;
        }
    }
    return sand;
}

//18th method
function canBalance(arr){
    var frontNum = 0;
    var backNum = 0;
    for(var i = 0; i < arr.length; i++) {
        frontNum += arr[i];
        for(var j = i + 1; j < arr.length; j++){
            backNum += arr[j];
        }
        if(backNum == frontNum){
            return true;
        }
        backNum = 0;
    }
    return false;
}

//19th method
function countClumps(arr){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
       if((arr[i] == arr[i + 1]) && (arr[i + 1] != arr[i + 2])){
           count += 1;
       }
    }
    return count;
}

//20th method
function evenlySpaced(a, b, c){
    if((b - a) == (c - b)){
        return true;
    }
    if((a - b) == (c - a)){
        return true;
    }
    if((a - c) == (c - b)){
        return true;
    }
    return false;
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += firstLast6(true, false);
    document.getElementById("output").innerHTML += has23(true, false);
    document.getElementById("output").innerHTML += fix_23(true, false);
    document.getElementById("output").innerHTML += countYZ(true, false);
    document.getElementById("output").innerHTML += endOther(true, false);
    document.getElementById("output").innerHTML += starOut(true, false);
    document.getElementById("output").innerHTML += getSandwich(true, false);
    document.getElementById("output").innerHTML += canBalance(true, false);
    document.getElementById("output").innerHTML += countClumps(true, false);
    document.getElementById("output").innerHTML += evenlySpaced(true, false);
}

