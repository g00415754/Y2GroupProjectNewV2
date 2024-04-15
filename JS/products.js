//let items = document.getElementById("cart").value;
//let basket = JSON.parse(sessionStorageStorage.getItem("data")) || [];

function increment(x){
    //alert(22)
    if(x==1){
        // flower garden earrings
        let incr = Number(document.getElementById("quant1").textContent);
        incr++;
        document.getElementById("quant1").textContent = incr;
        sessionStorage.product1Qty = incr;
        let totalContent = document.getElementById("cart").textContent;
        document.getElementById("cart").textContent = Number(totalContent) + 1;

        
        sessionStorage.flowerGardenEarrings = document.getElementById("FlowerGardenEarrings");
    }
    if(x==2){
        let incr = Number(document.getElementById("quant2").textContent);
        incr++;
        document.getElementById("quant2").textContent = incr;
        sessionStorage.product2Qty = incr;
        let totalContent = document.getElementById("cart").textContent;
        document.getElementById("cart").textContent = Number(totalContent) + 1;

        sessionStorage.daisyEarrings = document.getElementById("DaisyEarrings");
    }
    if(x==3){
        let incr = Number(document.getElementById("quant3").textContent);
        incr++;
        document.getElementById("quant3").textContent = incr;
        sessionStorage.product3Qty = incr;
        let totalContent = document.getElementById("cart").textContent;
        document.getElementById("cart").textContent = Number(totalContent) + 1;

        sessionStorage.purpleDropEarringsShort =document.getElementById("PurpleDropEarringsShort");
    }
    
    if(x==4){
        let incr = Number(document.getElementById("quant4").textContent);
        incr++;
        document.getElementById("quant4").textContent = incr;
        sessionStorage.product4Qty = incr;
        let totalContent = document.getElementById("cart").textContent;
        document.getElementById("cart").textContent = Number(totalContent) + 1;

        sessionStorage.atomEarrings = document.getElementById("AtomEarrings");
    }
    if(x==5){
        let incr = Number(document.getElementById("quant5").textContent);
        incr++;
        document.getElementById("quant5").textContent = incr;
        sessionStorage.product5Qty = incr;
        let totalContent = document.getElementById("cart").textContent;
        document.getElementById("cart").textContent = Number(totalContent) + 1;

        sessionStorage.headgehogEarrings = document.getElementById("HeadgehogEarrings");
    }
    if(x==6){
        let incr = Number(document.getElementById("quant6").textContent);
        incr++;
        document.getElementById("quant6").textContent = incr;
        sessionStorage.product6Qty = incr;
        let totalContent = document.getElementById("cart").textContent;
        document.getElementById("cart").textContent = Number(totalContent) + 1;

        sessionStorage.ladybirdEarrings = document.getElementById("LadybirdEarrings");
    }
    if(x==7){
        let incr = Number(document.getElementById("quant7").textContent);
        incr++;
        document.getElementById("quant7").textContent = incr;
        sessionStorage.product7Qty = incr;
        let totalContent = document.getElementById("cart").textContent;
        document.getElementById("cart").textContent = Number(totalContent) + 1;

        sessionStorage.prideEarringsLong =document.getElementById("PrideEarringsLong");
    }
    if(x==8){
        let incr = Number(document.getElementById("quant8").textContent);
        incr++;
        document.getElementById("quant8").textContent = incr;
        sessionStorage.product8Qty = incr;
        let totalContent = document.getElementById("cart").textContent;
        document.getElementById("cart").textContent = Number(totalContent) + 1;

        sessionStorage.pinkFlowerFairyEarrings =document.getElementById("PinkFlowerFairyEarrings");
    }
    if(x==9){
        let incr = Number(document.getElementById("quant9").textContent);
        incr++;
        document.getElementById("quant9").textContent = incr;
        sessionStorage.product9ty = incr;
        let totalContent = document.getElementById("cart").textContent;
        document.getElementById("cart").textContent = Number(totalContent) + 1;

        sessionStorage.greenDropEarrings = document.getElementById("GreenDropEarrings");
    }
    if(x==10){
        let incr = Number(document.getElementById("quant10").textContent);
        incr++;
        document.getElementById("quant10").textContent = incr;
        sessionStorage.product10Qty = incr;
        let totalContent = document.getElementById("cart").textContent;
        document.getElementById("cart").textContent = Number(totalContent) + 1;

        sessionStorage.autumnEarrings = document.getElementById("AutumnEarrings");

    }
    if(x==11){
        let incr = Number(document.getElementById("quant11").textContent);
        incr++;
        document.getElementById("quant11").textContent = incr;
        sessionStorage.product11Qty = incr;
        let totalContent = document.getElementById("cart").textContent;
        document.getElementById("cart").textContent = Number(totalContent) + 1;

        sessionStorage.ladybugEarringsLong = document.getElementById("LadybugEarringsLong");
    }
    if(x==12){
        let incr = Number(document.getElementById("quant12").textContent);
        incr++;
        document.getElementById("quant12").textContent = incr;
        sessionStorage.product12Qty = incr;
        let totalContent = document.getElementById("cart").textContent;
        document.getElementById("cart").textContent = Number(totalContent) + 1;

        sessionStorage.spookyEarrings = document.getElementById("SpookyEarrings");
    }
    if(x==13){
        let incr = Number(document.getElementById("quant13").textContent);
        incr++;
        document.getElementById("quant13").textContent = incr;
        sessionStorage.product13Qty = incr;
        let totalContent = document.getElementById("cart").textContent;
        document.getElementById("cart").textContent = Number(totalContent) + 1;

        sessionStorage.acornPendant =document.getElementById("AcornPendant");

    }
    if(x==14){
        let incr = Number(document.getElementById("quant14").textContent);
        incr++;
        document.getElementById("quant14").textContent = incr;
        sessionStorage.product14Qty = incr;
        let totalContent = document.getElementById("cart").textContent;
        document.getElementById("cart").textContent = Number(totalContent) + 1;

        sessionStorage.amethystPendant = document.getElementById("AmethystPendant");
    }
    if(x==15){
        let incr = Number(document.getElementById("quant15").textContent);
        incr++;
        document.getElementById("quant15").textContent = incr;
        sessionStorage.product15Qty = incr;
        let totalContent = document.getElementById("cart").textContent;
        document.getElementById("cart").textContent = Number(totalContent) + 1;

        sessionStorage.daisyPendant = document.getElementById("DaisyPendant");
    }
    if(x==16){
        let incr = Number(document.getElementById("quant16").textContent);
        incr++;
        document.getElementById("quant16").textContent = incr;
        sessionStorage.product16Qty = incr;
        let totalContent = document.getElementById("cart").textContent;
        document.getElementById("cart").textContent = Number(totalContent) + 1;

        sessionStorage.whiteFlowerPendant = document.getElementById("WhiteFlowerPendant");
    }
    if(x==17){
        let incr = Number(document.getElementById("quant17").textContent);
        incr++;
        document.getElementById("quant17").textContent = incr;
        sessionStorage.product17Qty = incr;
        let totalContent = document.getElementById("cart").textContent;
        document.getElementById("cart").textContent = Number(totalContent) + 1;

        sessionStorage.hedgehogPendant = document.getElementById("HedgehogPendant");
    }
    if(x==18){
        let incr = Number(document.getElementById("quant18").textContent);
        incr++;
        document.getElementById("quant18").textContent = incr;
        sessionStorage.product18Qty = incr;
        let totalContent = document.getElementById("cart").textContent;
        document.getElementById("cart").textContent = Number(totalContent) + 1;

        sessionStorage.moonPendant =  document.getElementById("MoonPendant");
    }
    if(x==19){
        let incr = Number(document.getElementById("quant19").textContent);
        incr++;
        document.getElementById("quant19").textContent = incr;
        sessionStorage.product19Qty = incr;
        let totalContent = document.getElementById("cart").textContent;
        document.getElementById("cart").textContent = Number(totalContent) + 1;

        sessionStorage.atomPendant = document.getElementById("AtomPendant");
    }
    if(x==20){
        let incr = Number(document.getElementById("quant20").textContent);
        incr++;
        document.getElementById("quant20").textContent = incr;
        sessionStorage.product20Qty = incr;
        let totalContent = document.getElementById("cart").textContent;
        document.getElementById("cart").textContent = Number(totalContent) + 1;

        sessionStorage.mermaidPendant =document.getElementById("MermaidPendant");

    }
    if(x==21){
        let incr = Number(document.getElementById("quant21").textContent);
        incr++;
        document.getElementById("quant21").textContent = incr;
        sessionStorage.product21Qty = incr;
        let totalContent = document.getElementById("cart").textContent;
        document.getElementById("cart").textContent = Number(totalContent) + 1;

        sessionStorage.irishUnakite = document.getElementById("IrishUnakite");
    }
    if(x==22){
        let incr = Number(document.getElementById("quant22").textContent);
        incr++;
        document.getElementById("quant22").textContent = incr;
        sessionStorage.product22Qty = incr;
        let totalContent = document.getElementById("cart").textContent;
        document.getElementById("cart").textContent = Number(totalContent) + 1;

        sessionStorage.irishQuartz = document.getElementById("IrishQuartz");
    }
    if(x==23){
        let incr = Number(document.getElementById("quant23").textContent);
        incr++;
        document.getElementById("quant23").textContent = incr;
        sessionStorage.product23Qty = incr;
        let totalContent = document.getElementById("cart").textContent;
        document.getElementById("cart").textContent = Number(totalContent) + 1;

        sessionStorage.irishUnite2 = document.getElementById("IrishUnite2");
    }
    if(x==24){
        let incr = Number(document.getElementById("quant24").textContent);
        incr++;
        document.getElementById("quant24").textContent = incr;
        sessionStorage.product24Qty = incr;
        let totalContent = document.getElementById("cart").textContent;
        document.getElementById("cart").textContent = Number(totalContent) + 1;

        sessionStorage.smokeyQuartz = document.getElementById("SmokeyQuartz");

    }
    if(x==25){
        let incr = Number(document.getElementById("quant25").textContent);
        incr++;
        document.getElementById("quant25").textContent = incr;
        sessionStorage.product25Qty = incr;
        let totalContent = document.getElementById("cart").textContent;
        document.getElementById("cart").textContent = Number(totalContent) + 1;

        sessionStorage.irishGoethite = document.getElementById("IrishGoethite");
    }
    if(x==26){
        let incr = Number(document.getElementById("quant26").textContent);
        incr++;
        document.getElementById("quant26").textContent = incr;
        sessionStorage.product26Qty = incr;
        let totalContent = document.getElementById("cart").textContent;
        document.getElementById("cart").textContent = Number(totalContent) + 1;

        sessionStorage.irishConnelite = document.getElementById("IrishConnelite");

    }
    if(x==27){
        let incr = Number(document.getElementById("quant27").textContent);
        incr++;
        document.getElementById("quant27").textContent = incr;
        sessionStorage.product27Qty = incr;
        let totalContent = document.getElementById("cart").textContent;
        document.getElementById("cart").textContent = Number(totalContent) + 1;

        sessionStorage.crystalTealight = document.getElementById("CrystalTealight");
    }
    if(x==28){
        let incr = Number(document.getElementById("quant28").textContent);
        incr++;
        document.getElementById("quant28").textContent = incr;
        sessionStorage.product28Qty = incr;
        let totalContent = document.getElementById("cart").textContent;
        document.getElementById("cart").textContent = Number(totalContent) + 1;

        sessionStorage.prehniteHanging = document.getElementById("PrehniteHanging");
    }

}

function decrement(x){
    if(x==1){
        // flower garden earrings
        let decr = Number(document.getElementById("quant1").textContent);
        decr--;
        if(decr >= 0){
            document.getElementById("quant1").textContent = decr;
            sessionStorage.product1Qty = decr;
            let totalContent = document.getElementById("cart").textContent;
            document.getElementById("cart").textContent = Number(totalContent) - 1;

            sessionStorage.flowerGardenEarrings = document.getElementById("FlowerGardenEarrings");
        }
        
    }
    if(x==2){
        // flower garden earrings
        let decr = Number(document.getElementById("quant2").textContent);
        decr--;
        if(decr >= 0){
            document.getElementById("quant2").textContent = decr;
            sessionStorage.product2Qty = decr;
            let totalContent = document.getElementById("cart").textContent;
            document.getElementById("cart").textContent = Number(totalContent) - 1;

            sessionStorage.daisyEarrings = document.getElementById("DaisyEarrings");
        }
        
    }
    if(x==3){
        // flower garden earrings
        let decr = Number(document.getElementById("quant3").textContent);
        decr--;
        if(decr >= 0){
            document.getElementById("quant3").textContent = decr;
            sessionStorage.product3Qty = decr;
            let totalContent = document.getElementById("cart").textContent;
            document.getElementById("cart").textContent = Number(totalContent) - 1;

            sessionStorage.purpleDropEarringsShort =document.getElementById("PurpleDropEarringsShort");
        }
        
    }
    if(x==4){
        // flower garden earrings
        let decr = Number(document.getElementById("quant4").textContent);
        decr--;
        if(decr >= 0){
            document.getElementById("quant4").textContent = decr;
            sessionStorage.product4Qty = decr;
            let totalContent = document.getElementById("cart").textContent;
            document.getElementById("cart").textContent = Number(totalContent) - 1;

            sessionStorage.atomEarrings  =document.getElementById("AtomEarrings");
        }
        
    }
    if(x==5){
        let decr = Number(document.getElementById("quant5").textContent);
        decr--;
        if(decr >= 0){
            document.getElementById("quant5").textContent = decr;
            sessionStorage.product5Qty = decr;
            let totalContent = document.getElementById("cart").textContent;
            document.getElementById("cart").textContent = Number(totalContent) - 1;

            sessionStorage.headgehogEarrings = document.getElementById("HeadgehogEarrings");
        }
        
    }
    if(x==6){
        let decr = Number(document.getElementById("quant6").textContent);
        decr--;
        if(decr >= 0){
            document.getElementById("quant6").textContent = decr;
            sessionStorage.product6Qty = decr;
            let totalContent = document.getElementById("cart").textContent;
            document.getElementById("cart").textContent = Number(totalContent) - 1;

            sessionStorage.ladybirdEarrings = document.getElementById("LadybirdEarrings");
        }
        
    }
    if(x==7){
        let decr = Number(document.getElementById("quant7").textContent);
        decr--;
        if(decr >= 0){
            document.getElementById("quant7").textContent = decr;
            sessionStorage.product7Qty = decr;
            let totalContent = document.getElementById("cart").textContent;
            document.getElementById("cart").textContent = Number(totalContent) - 1;

            sessionStorage.prideEarringsLong =document.getElementById("PrideEarringsLong");
        }
        
    }
    if(x==8){
        let decr = Number(document.getElementById("quant8").textContent);
        decr--;
        if(decr >= 0){
            document.getElementById("quant8").textContent = decr;
            sessionStorage.product8Qty = decr;
            let totalContent = document.getElementById("cart").textContent;
            document.getElementById("cart").textContent = Number(totalContent) - 1;

            sessionStorage.pinkFlowerFairyEarrings =document.getElementById("PinkFlowerFairyEarrings");
        }
        
    }
    if(x==9){
        let decr = Number(document.getElementById("quant9").textContent);
        decr--;
        if(decr >= 0){
            document.getElementById("quant9").textContent = decr;
            sessionStorage.product9Qty = decr;
            let totalContent = document.getElementById("cart").textContent;
            document.getElementById("cart").textContent = Number(totalContent) - 1;

            sessionStorage.greenDropEarrings = document.getElementById("GreenDropEarrings");
        }
        
    }
    if(x==10){
        let decr = Number(document.getElementById("quant10").textContent);
        decr--;
        if(decr >= 0){
            document.getElementById("quant10").textContent = decr;
            sessionStorage.product10Qty = decr;
            let totalContent = document.getElementById("cart").textContent;
            document.getElementById("cart").textContent = Number(totalContent) - 1;

            sessionStorage.autumnEarrings = document.getElementById("AutumnEarrings");
        }
        
    }
    if(x==11){
        let decr = Number(document.getElementById("quant11").textContent);
        decr--;
        if(decr >= 0){
            document.getElementById("quant11").textContent = decr;
            sessionStorage.product11Qty = decr;
            let totalContent = document.getElementById("cart").textContent;
            document.getElementById("cart").textContent = Number(totalContent) - 1;

            sessionStorage.ladybugEarringsLong = document.getElementById("LadybugEarringsLong");
        }
        
    }
    if(x==12){
        let decr = Number(document.getElementById("quant12").textContent);
        decr--;
        if(decr >= 0){
            document.getElementById("quant12").textContent = decr;
            sessionStorage.product12Qty = decr;
            let totalContent = document.getElementById("cart").textContent;
            document.getElementById("cart").textContent = Number(totalContent) - 1;

            sessionStorage.spookyEarrings = document.getElementById("SpookyEarrings");
        }
        
    }
    if(x==13){
        let decr = Number(document.getElementById("quant13").textContent);
        decr--;
        if(decr >= 0){
            document.getElementById("quant13").textContent = decr;
            sessionStorage.product13Qty = decr;
            let totalContent = document.getElementById("cart").textContent;
            document.getElementById("cart").textContent = Number(totalContent) - 1;

            sessionStorage.acornPendant =document.getElementById("AcornPendant");
        }
        
    }
    if(x==14){
        let decr = Number(document.getElementById("quant14").textContent);
        decr--;
        if(decr >= 0){
            document.getElementById("quant14").textContent = decr;
            sessionStorage.product14Qty = decr;
            let totalContent = document.getElementById("cart").textContent;
            document.getElementById("cart").textContent = Number(totalContent) - 1;

            sessionStorage.amethystPendant = document.getElementById("AmethystPendant");
        }
        
    }
    if(x==15){
        let decr = Number(document.getElementById("quant15").textContent);
        decr--;
        if(decr >= 0){
            document.getElementById("quant15").textContent = decr;
            sessionStorage.product15Qty = decr;
            let totalContent = document.getElementById("cart").textContent;
            document.getElementById("cart").textContent = Number(totalContent) - 1;

            sessionStorage.daisyPendant = document.getElementById("DaisyPendant");
        }
        
    }
    if(x==16){
        let decr = Number(document.getElementById("quant16").textContent);
        decr--;
        if(decr >= 0){
            document.getElementById("quant16").textContent = decr;
            sessionStorage.product16Qty = decr;
            let totalContent = document.getElementById("cart").textContent;
            document.getElementById("cart").textContent = Number(totalContent) - 1;

            sessionStorage.whiteFlowerPendant = document.getElementById("WhiteFlowerPendant");
        }
        
    }
    if(x==17){
        let decr = Number(document.getElementById("quant17").textContent);
        decr--;
        if(decr >= 0){
            document.getElementById("quant17").textContent = decr;
            sessionStorage.product17Qty = decr;
            let totalContent = document.getElementById("cart").textContent;
            document.getElementById("cart").textContent = Number(totalContent) - 1;

            sessionStorage.hedgehogPendant = document.getElementById("HedgehogPendant");
        }
        
    }
    if(x==18){
        let decr = Number(document.getElementById("quant18").textContent);
        decr--;
        if(decr >= 0){
            document.getElementById("quant18").textContent = decr;
            sessionStorage.product18Qty = decr;
            let totalContent = document.getElementById("cart").textContent;
            document.getElementById("cart").textContent = Number(totalContent) - 1;

            sessionStorage.moonPendant =  document.getElementById("MoonPendant");
        }
        
    }
    if(x==19){
        let decr = Number(document.getElementById("quant19").textContent);
        decr--;
        if(decr >= 0){
            document.getElementById("quant19").textContent = decr;
            sessionStorage.product19Qty = decr;
            let totalContent = document.getElementById("cart").textContent;
            document.getElementById("cart").textContent = Number(totalContent) - 1;

            sessionStorage.atomPendant = document.getElementById("AtomPendant");
        }
        
    }
    if(x==20){
        let decr = Number(document.getElementById("quant20").textContent);
        decr--;
        if(decr >= 0){
            document.getElementById("quant20").textContent = decr;
            sessionStorage.product20Qty = decr;
            let totalContent = document.getElementById("cart").textContent;
            document.getElementById("cart").textContent = Number(totalContent) - 1;

            sessionStorage.mermaidPendant =document.getElementById("MermaidPendant");
        }
        
    }
    if(x==21){
        let decr = Number(document.getElementById("quant21").textContent);
        decr--;
        if(decr >= 0){
            document.getElementById("quant21").textContent = decr;
            sessionStorage.product21Qty = decr;
            let totalContent = document.getElementById("cart").textContent;
            document.getElementById("cart").textContent = Number(totalContent) - 1;

            sessionStorage.irishUnakite = document.getElementById("IrishUnakite");
        }
        
    }
    if(x==22){
        let decr = Number(document.getElementById("quant22").textContent);
        decr--;
        if(decr >= 0){
            document.getElementById("quant22").textContent = decr;
            sessionStorage.product22Qty = decr;
            let totalContent = document.getElementById("cart").textContent;
            document.getElementById("cart").textContent = Number(totalContent) - 1;

            sessionStorage.irishQuartz = document.getElementById("IrishQuartz");
        }
        
    }
    if(x==23){
        let decr = Number(document.getElementById("quant23").textContent);
        decr--;
        if(decr >= 0){
            document.getElementById("quant23").textContent = decr;
            sessionStorage.product23Qty = decr;
            let totalContent = document.getElementById("cart").textContent;
            document.getElementById("cart").textContent = Number(totalContent) - 1;

            sessionStorage.irishUnite2 = document.getElementById("IrishUnite2");
        }
        
    }
    if(x==24){
        let decr = Number(document.getElementById("quant24").textContent);
        decr--;
        if(decr >= 0){
            document.getElementById("quant24").textContent = decr;
            sessionStorage.product24Qty = decr;
            let totalContent = document.getElementById("cart").textContent;
            document.getElementById("cart").textContent = Number(totalContent) - 1;

            sessionStorage.smokeyQuartz = document.getElementById("SmokeyQuartz");
        }
        
    }
    if(x==25){
        let decr = Number(document.getElementById("quant25").textContent);
        decr--;
        if(decr >= 0){
            document.getElementById("quant25").textContent = decr;
            sessionStorage.product25Qty = decr;
            let totalContent = document.getElementById("cart").textContent;
            document.getElementById("cart").textContent = Number(totalContent) - 1;

            sessionStorage.irishGoethite = document.getElementById("IrishGoethite");
        }
        
    }
    if(x==26){
        let decr = Number(document.getElementById("quant26").textContent);
        decr--;
        if(decr >= 0){
            document.getElementById("quant26").textContent = decr;
            sessionStorage.product26Qty = decr;
            let totalContent = document.getElementById("cart").textContent;
            document.getElementById("cart").textContent = Number(totalContent) - 1;

            sessionStorage.irishConnelite = document.getElementById("IrishConnelite");
        }
        
    }
    if(x==27){
        let decr = Number(document.getElementById("quant27").textContent);
        decr--;
        if(decr >= 0){
            document.getElementById("quant27").textContent = decr;
            sessionStorage.product27Qty = decr;
            let totalContent = document.getElementById("cart").textContent;
            document.getElementById("cart").textContent = Number(totalContent) - 1;

            sessionStorage.crystalTealight = document.getElementById("CrystalTealight");
        }
        
    }
    if(x==28){
        let decr = Number(document.getElementById("quant28").textContent);
        decr--;
        if(decr >= 0){
            document.getElementById("quant28").textContent = decr;
            sessionStorage.product28Qty = decr;
            let totalContent = document.getElementById("cart").textContent;
            document.getElementById("cart").textContent = Number(totalContent) - 1;

            sessionStorage.prehniteHanging = document.getElementById("PrehniteHanging");
        }
        
    }
}


/*
function calculate(){
    let num = Number(sessionStorage.product1Qty.value + sessionStorage.product2Qty.value + sessionStorage.product3Qty.value+ sessionStorage.product4Qty.value+
        sessionStorage.product5Qty.value + sessionStorage.product6Qty.value + sessionStorage.product7Qty.value);

    Number(document.getElementById("cart").textContent) = num;
}

calculate();
*/
/*
document.getElementById("cart").textContent = basket;

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();
*/