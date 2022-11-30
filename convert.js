
// units
var first=document.getElementById("unit1");
var second=document.getElementById("unit2");

// numbers
var output=document.getElementById("output");

function change(){
    //units
    if(first.value != second.value){
	    var temp;
	    temp=second.value;
	    second.value=first.value;
	    first.value=temp;
        input.value = "";
        output.value = "";
    }
    else{
        // alert('both units are same!');
        input.value = "";
        output.value = "";
    }
}

function converts(){
    var input=document.getElementById("input");
    // decimal to hexadecimal
    if(first.value == "decimal" && second.value == "hex"){
        if(decValidator(input.value)){
            output.textContent = parseInt(input.value, 10).toString(16);
        }
        else{
            input.value = "";
            output.value = "";
            alert(input.value+" is not a decimal number!");
        }
    }

    // decimal to octal
    if(first.value == "decimal" && second.value == "octal"){
        if(decValidator(input.value)){
            output.textContent = parseInt(input.value, 10).toString(8);
        }
        else{
            input.value = "";
            output.value = "";
            alert(input.value+" is not a decimal number!");
        }
    }

    // decimal to binary
    if(first.value == "decimal" && second.value == "binary"){
        if(decValidator(input.value)){
            output.textContent = parseInt(input.value, 10).toString(2);
        }
        else{
            input.value = "";
            output.value = "";
            alert(input.value+" is not a decimal number!");
        }
    }

    // hexadecimal to decimal
    if(first.value == "hex" && second.value == "decimal"){
        if(hexValidator(input.value)){
            output.textContent = parseInt(input.value, 16).toString(10);
        }
        else{
            input.value = "";
            output.value = "";
            alert(input.value+" is not a hexadecimal number!");
        }
    }

    // hexadecimal to octal
    if(first.value == "hex" && second.value == "octal"){
        if(hexValidator(input.value)){
            output.textContent = parseInt(input.value, 16).toString(8);
        }
        else{
            input.value = "";
            output.value = "";
            alert(input.value+" is not a hexadecimal number!");
        }
    }

    // hexadecimal to binary
    if(first.value == "hex" && second.value == "binary"){
        if(hexValidator(input.value)){
            output.textContent = parseInt(input.value, 16).toString(2);
        }
        else{
            input.value = "";
            output.value = "";
            alert(input.value+" is not a hexadecimal number!");
        }
    }

    // octal to decimal
    if(first.value == "octal" && second.value == "decimal"){
        if(octValidator(input.value)){
            output.textContent = parseInt(input.value, 8).toString(10);
        }
        else{
            input.value = "";
            output.value = "";
            alert(input.value+" is not a octal number!");
        }
    }

    // octal to hexadecimal
    if(first.value == "octal" && second.value == "hex"){
        if(octValidator(input.value)){
            output.textContent = parseInt(input.value, 8).toString(16);
        }
        else{
            input.value = "";
            output.value = "";
            alert(input.value+" is not a octal number!");
        }
    }

    // octal to binary
    if(first.value == "octal" && second.value == "binary"){
        if(octValidator(input.value)){
            output.textContent = parseInt(input.value, 8).toString(2);
        }
        else{
            input.value = "";
            output.value = "";
            alert(input.value+" is not a octal number!");
        }
    }

    // binary to decimal
    if(first.value == "binary" && second.value == "decimal"){
        if(binValidator(input.value)){
            output.textContent = parseInt(input.value, 2).toString(10);
        }
        else{
            input.value = "";
            output.value = "";
            alert(input.value+" is not a binary number!");
        }
    }

    // binary to hexadecimal
    if(first.value == "binary" && second.value == "hex"){
        if(binValidator(input.value)){
            output.textContent = parseInt(input.value, 2).toString(16);
        }
        else{
            input.value = "";
            output.value = "";
            alert(input.value+" is not a binary number!");
        }
    }
    
    // binary to octal    
    if(first.value == "binary" && second.value == "octal"){
        if(binValidator(input.value)){
            output.textContent = parseInt(input.value, 2).toString(8);
        }
        else{
            input.value = "";
            output.value = "";
            alert(input.value+" is not a binary number!");
        }
    }  
}

function binValidator(num) {
    for (let i = 0; i < num.length; i++) {
      if (num[i] != "0" && num[i] != "1") {
        return false;
      }
    }
    return true;
}

function hexValidator(val){
    var str = val.toString();
    regexp = /^[0-9a-fA-F]+$/;
    return regexp.test(str);
}

function octValidator(str) {
    const isOctal = () => /^(0o)?[0-7]+$/i.test(str);
    return isOctal;
}

function decValidator(inp){
    return !isNaN(parseFloat(inp)) && isFinite(inp);
}