function check(){
    let num = +document.getElementById("num").value;
    let counter = true;
    if(num===2){
        document.getElementById("result").innerHTML= num + " is a prime number";
    } else {
        if(num>2) {
            for (let i = 2; i < num; i++) {
                if ((num % i) === 0){
                    counter = false;
                break;
                }
            }
        }
        if(counter === true) {
            document.getElementById("ressult").innerHTML = num + " is a prime number";
        } else {
            document.getElementById("ressult").innerHTML= num + " is NOT a prime number";
        }
    }

}
