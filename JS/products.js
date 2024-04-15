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

        
        sessionStorage.flowerGardenEarrings = "Flower Garden Earrings";
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
        if(decr == 0){
            sessionStorage.removeItem("flowerGardenEarrings");
            sessionStorage.removeItem("product1Qty");
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
        if(decr == 0){
            sessionStorage.removeItem("daisyEarrings");
            sessionStorage.removeItem("product2Qty");
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
        if(decr == 0){
            sessionStorage.removeItem("purpleDropEarringsShort");
            sessionStorage.removeItem("product3Qty");
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
        if(decr == 0){
            sessionStorage.removeItem("atomEarrings");
            sessionStorage.removeItem("product4Qty");
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
        if(decr == 0){
            sessionStorage.removeItem("headgehogEarrings");
            sessionStorage.removeItem("product5Qty");
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
        if(decr == 0){
            sessionStorage.removeItem("ladybirdEarrings");
            sessionStorage.removeItem("product6Qty");
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
        if(decr == 0){
            sessionStorage.removeItem("prideEarringsLong");
            sessionStorage.removeItem("product7Qty");
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
        if(decr == 0){
            sessionStorage.removeItem("pinkFlowerFairyEarrings");
            sessionStorage.removeItem("product8Qty");
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
        if(decr == 0){
            sessionStorage.removeItem("greenDropEarrings");
            sessionStorage.removeItem("product9Qty");
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
        if(decr == 0){
            sessionStorage.removeItem("autumnEarrings");
            sessionStorage.removeItem("product10Qty");
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
        if(decr == 0){
            sessionStorage.removeItem("ladybugEarringsLong");
            sessionStorage.removeItem("product11Qty");
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
        if(decr == 0){
            sessionStorage.removeItem("spookyEarrings");
            sessionStorage.removeItem("product12Qty");
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
        if(decr == 0){
            sessionStorage.removeItem("acornPendant");
            sessionStorage.removeItem("product13Qty");
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
        if(decr == 0){
            sessionStorage.removeItem("amethystPendant");
            sessionStorage.removeItem("product14Qty");
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
        if(decr == 0){
            sessionStorage.removeItem("daisyPendant");
            sessionStorage.removeItem("product15Qty");
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
        if(decr == 0){
            sessionStorage.removeItem("whiteFlowerPendant");
            sessionStorage.removeItem("product16Qty");
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
        if(decr == 0){
            sessionStorage.removeItem("hedgehogPendant");
            sessionStorage.removeItem("product17Qty");
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
        if(decr == 0){
            sessionStorage.removeItem("moonPendant");
            sessionStorage.removeItem("product18Qty");
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
        if(decr == 0){
            sessionStorage.removeItem("atomPendant");
            sessionStorage.removeItem("product19Qty");
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
        if(decr == 0){
            sessionStorage.removeItem("mermaidPendant");
            sessionStorage.removeItem("product20Qty");
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
        if(decr == 0){
            sessionStorage.removeItem("irishUnakite");
            sessionStorage.removeItem("product21Qty");
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
        if(decr == 0){
            sessionStorage.removeItem("irishQuartz");
            sessionStorage.removeItem("product22Qty");
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
        if(decr == 0){
            sessionStorage.removeItem("irishUnite2");
            sessionStorage.removeItem("product23Qty");
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
        if(decr == 0){
            sessionStorage.removeItem("smokeyQuartz");
            sessionStorage.removeItem("product24Qty");
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
        if(decr == 0){
            sessionStorage.removeItem("irishGoethite");
            sessionStorage.removeItem("product25Qty");
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
        if(decr == 0){
            sessionStorage.removeItem("irishConnelite");
            sessionStorage.removeItem("product26Qty");
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
        if(decr == 0){
            sessionStorage.removeItem("crystalTealight");
            sessionStorage.removeItem("product27Qty");
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
        if(decr == 0){
            sessionStorage.removeItem("prehniteHanging");
            sessionStorage.removeItem("product28Qty");
        }
        
    }
}

function empty(){
    sessionStorage.clear();
    //document.getElementById("item1").innerHTML = "Cart is Empty";
    document.getElementById("shoppingCartTable").innerHTML = ``;
}

document.getElementById("shoppingCartTable").innerHTML = `
<tr> 
<th scope="row">1</th>
<td><div id="item1"></div></td>
<td><div id="quant1"></div></td>
<td><div id="price1"></div></td>
</tr>
<tr>
<!--
<th scope="row">2</th>
<td><div id="item2"></div></td>
<td><div id="price2"></div></td>
<td><div id="quant2"></div></td>
</tr>
<tr>
<th scope="row">3</th>
<td><div id="item3"></div></td>
<td><div id="price3"></div></td>
<td><div id="quant3"></div></td>
</tr>-->
`;

let item1 = document.getElementById("item1").textContent;
if(sessionStorage.product1Qty > 0){
    document.getElementById("item1").innerHTML = "Flower Garden Earrings";
    document.getElementById("price1").innerHTML = "€" + Number(sessionStorage.product1Qty * 7);
    document.getElementById("quant1").innerHTML = sessionStorage.product1Qty;
}else if(sessionStorage.product2Qty > 0){
    document.getElementById("item1").innerHTML = "Daisy Earrings";
    document.getElementById("price1").innerHTML = "€" + Number(sessionStorage.product2Qty * 7);
    document.getElementById("quant1").innerHTML = sessionStorage.product2Qty;
}else if(sessionStorage.product3Qty > 0){
    document.getElementById("item1").innerHTML = "Purple Drop Earrings";
    document.getElementById("price1").innerHTML = "€" + Number(sessionStorage.product3Qty * 5);
    document.getElementById("quant1").innerHTML = sessionStorage.product3Qty;
}else if(sessionStorage.product4Qty > 0){
    document.getElementById("item1").innerHTML = "Atom Earrings";
    document.getElementById("price1").innerHTML = "€" + Number(sessionStorage.product4Qty * 6);
    document.getElementById("quant1").innerHTML = sessionStorage.product4Qty;
}else if(sessionStorage.product5Qty > 0){
    document.getElementById("item1").innerHTML = "Hedgehog & Leaf Earrings";
    document.getElementById("price1").innerHTML = "€" + Number(sessionStorage.product5Qty * 11);
    document.getElementById("quant1").innerHTML = sessionStorage.product5Qty;
}else if(sessionStorage.product6Qty > 0){
    document.getElementById("item1").innerHTML = "Ladybird Earrings - Short in Gold";
    document.getElementById("price1").innerHTML = "€" + Number(sessionStorage.product6Qty * 7);
    document.getElementById("quant1").innerHTML = sessionStorage.product6Qty;
}else if(sessionStorage.product7Qty > 0){
    document.getElementById("item1").innerHTML = "Pride Earrings - Long";
    document.getElementById("price1").innerHTML = "€" + Number(sessionStorage.product7Qty * 6);
    document.getElementById("quant1").innerHTML = sessionStorage.product7Qty;
}else if(sessionStorage.product8Qty > 0){
    document.getElementById("item1").innerHTML = "Pink Flower Fairy Earrings";
    document.getElementById("price1").innerHTML = "€" + Number(sessionStorage.product8Qty * 8);
    document.getElementById("quant1").innerHTML = sessionStorage.product8Qty;
}else if(sessionStorage.product9Qty > 0){
    document.getElementById("item1").innerHTML = "Green Drop Earrings - Short";
    document.getElementById("price1").innerHTML = "€" + Number(sessionStorage.product9Qty * 5);
    document.getElementById("quant1").innerHTML = sessionStorage.product9Qty;
}else if(sessionStorage.product10Qty > 0){
    document.getElementById("item1").innerHTML = "Autumn Earrings - Short with Clasps";
    document.getElementById("price1").innerHTML = "€" + Number(sessionStorage.product10Qty * 5);
    document.getElementById("quant1").innerHTML = sessionStorage.product10Qty;
}else if(sessionStorage.product11Qty > 0){
    document.getElementById("item1").innerHTML = "Ladybug Earrings - Long in Silver";
    document.getElementById("price1").innerHTML = "€" + Number(sessionStorage.product11Qty * 10);
    document.getElementById("quant1").innerHTML = sessionStorage.product11Qty;
}else if(sessionStorage.product12Qty > 0){
    document.getElementById("item1").innerHTML = "Spooky Earrings - Short with Clasps";
    document.getElementById("price1").innerHTML = "€" + Number(sessionStorage.product12Qty * 5);
    document.getElementById("quant1").innerHTML = sessionStorage.product12Qty;
}else if(sessionStorage.product13Qty > 0){
    document.getElementById("item1").innerHTML = "Acorn Pendant";
    document.getElementById("price1").innerHTML = "€" + Number(sessionStorage.product13Qty * 10);
    document.getElementById("quant1").innerHTML = sessionStorage.product13Qty;
}else if(sessionStorage.product14Qty > 0){
    document.getElementById("item1").innerHTML = "Amethyst Pendant";
    document.getElementById("price1").innerHTML = "€" + Number(sessionStorage.product14Qty * 10);
    document.getElementById("quant1").innerHTML = sessionStorage.product14Qty;
}else if(sessionStorage.product15Qty > 0){
    document.getElementById("item1").innerHTML = "Daisy Pendant";
    document.getElementById("price1").innerHTML = "€" + Number(sessionStorage.product15Qty * 10);
    document.getElementById("quant1").innerHTML = sessionStorage.product15Qty;
}else if(sessionStorage.product16Qty > 0){
    document.getElementById("item1").innerHTML = "White Flower Pendant";
    document.getElementById("price1").innerHTML = "€" + Number(sessionStorage.product16Qty * 10);
    document.getElementById("quant1").innerHTML = sessionStorage.product16Qty;
}else if(sessionStorage.product17Qty > 0){
    document.getElementById("item1").innerHTML = "Hedgehog & Leaf Pendant";
    document.getElementById("price1").innerHTML = "€" + Number(sessionStorage.product17Qty * 10);
    document.getElementById("quant1").innerHTML = sessionStorage.product17Qty;
}else if(sessionStorage.product18Qty > 0){
    document.getElementById("item1").innerHTML = "Moon Pendant";
    document.getElementById("price1").innerHTML = "€" + Number(sessionStorage.product18Qty * 10);
    document.getElementById("quant1").innerHTML = sessionStorage.product18Qty;
}else if(sessionStorage.product19Qty > 0){
    document.getElementById("item1").innerHTML = "AtomPendant";
    document.getElementById("price1").innerHTML = "€" + Number(sessionStorage.product19Qty * 10);
    document.getElementById("quant1").innerHTML = sessionStorage.product19Qty;
}else if(sessionStorage.product20Qty > 0){
    document.getElementById("item1").innerHTML = "Mermaid Pendant";
    document.getElementById("price1").innerHTML = "€" + Number(sessionStorage.product20Qty * 10);
    document.getElementById("quant1").innerHTML = sessionStorage.product20Qty;
}else if(sessionStorage.product21Qty > 0){
    document.getElementById("item1").innerHTML = "Irish Unakite (Type 1)";
    document.getElementById("price1").innerHTML = "€" + Number(sessionStorage.product21Qty * 8);
    document.getElementById("quant1").innerHTML = sessionStorage.product21Qty;
}else if(sessionStorage.product22Qty > 0){
    document.getElementById("item1").innerHTML = "Irish Quartz";
    document.getElementById("price1").innerHTML = "€" + Number(sessionStorage.product22Qty * 20);
    document.getElementById("quant1").innerHTML = sessionStorage.product22Qty;
}else if(sessionStorage.product23Qty > 0){
    document.getElementById("item1").innerHTML = "Irish Unakite (Type 2)";
    document.getElementById("price1").innerHTML = "€" + Number(sessionStorage.product23Qty * 8);
    document.getElementById("quant1").innerHTML = sessionStorage.product23Qty;
}else if(sessionStorage.product24Qty > 0){
    document.getElementById("item1").innerHTML = "Irish Amethyst with Smokey Quartz";
    document.getElementById("price1").innerHTML = "€" + Number(sessionStorage.product24Qty * 10);
    document.getElementById("quant1").innerHTML = sessionStorage.product24Qty;
}else if(sessionStorage.product25Qty > 0){
    document.getElementById("item1").innerHTML = "Irish Goethite with Manganese Minerals";
    document.getElementById("price1").innerHTML = "€" + Number(sessionStorage.product25Qty * 16);
    document.getElementById("quant1").innerHTML = sessionStorage.product25Qty;
}else if(sessionStorage.product26Qty > 0){
    document.getElementById("item1").innerHTML = "Irish Connelite with Langite";
    document.getElementById("price1").innerHTML = "€" + Number(sessionStorage.product26Qty * 28);
    document.getElementById("quant1").innerHTML = sessionStorage.product26Qty;
}else if(sessionStorage.product27Qty > 0){
    document.getElementById("item1").innerHTML = "Crystal Tealight";
    document.getElementById("price1").innerHTML = "€" + Number(sessionStorage.product27Qty * 1);
    document.getElementById("quant1").innerHTML = sessionStorage.product27Qty;
}else if(sessionStorage.product28Qty > 0){
    document.getElementById("item1").innerHTML = "Prehnite Hanging";
    document.getElementById("price1").innerHTML = "€" + Number(sessionStorage.product28Qty * 2.50);
    document.getElementById("quant1").innerHTML = sessionStorage.product28Qty;
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