exchangeMoney(300, 500);


function exchangeMoney(price, payment) {
    let change = payment - price;

    let changeObj = {
        tusen: 0,
        femhundra: 0,
        tvåhundra: 0,
        hundra: 0,
        femtio: 0,
        tjugo: 0,
        tio: 0,
        fem: 0,
        två: 0,
        en: 0
    }

    while (change > 0) {

        console.log("Du kommer att få tillbaka =>", change, "Kr");
        if (change > 1000) {
            changeObj.tusen++
            change -= 1000;
            
        } else if (change >= 500) {
            changeObj.femhundra++
            change -= 500;
            
        }
        else if (change >= 200) {
            changeObj.tvåhundra++
            change -= 200;
            
        }
        else if (change >= 100) {
            changeObj.hundra++
            change -= 100;
            
        }
        else if (change >= 50) {
            changeObj.femtio++
            change -= 50;
            
        }
        else if (change >= 10) {
            changeObj.tio++
            change -= 10;
        }
        else if (change >= 5) {
            changeObj.fem++
            change -= 5;
        }
        
        else if (change >= 2) {
            changeObj.två++
            change -= 2;
            
        }
        else if (change >= 1) {
            changeObj.en++
            change -= 1;
        }
    }

    console.log(changeObj);
}