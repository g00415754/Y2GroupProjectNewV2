function increment(x){
    //alert(22)
    if(x==1){
        // flower garden earrings
        let incr = Number(document.getElementById("quant").textContent);
        incr++;
        document.getElementById("quant").textContent = incr;
        sessionStorage.product1Qty = incr;
    }

    //slet minus = document.getElementsById("quant").value;
    //let newMinus = minus + 1;

    //document.getElementsById("quant").write = newMinus;
}