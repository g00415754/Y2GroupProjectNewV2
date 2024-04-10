function increment(x){
    //alert(22)
    if(x==1){
        // flower garden earrings
        let incr = Number(document.getElementById("quant").textContent);
        incr++;
        document.getElementById("quant").textContent = incr;
        sessionStorage.product1Qty = incr;
    }
}

function decrement(x){
    if(x==1){
        // flower garden earrings
        let decr = Number(document.getElementById("quant").textContent);
        decr--;
        if(decr >= 0){
            document.getElementById("quant").textContent = decr;
            sessionStorage.product1Qty = decr;
        }
        
    }
}
