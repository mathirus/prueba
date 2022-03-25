/*const puppeteer = require('puppeteer');

//https://www.betfair.com/exchange/plus/es/f%C3%BAtbol/primera-b-nacional-argentina-apuestas-803237/inplay




async function run () {
    const browser = await puppeteer.launch({
        headless: false,
        args: ["--disable-setuid-sandbox"],
        'ignoreHTTPSErrors': true,
        //devtools: true,
        slowMo: 10,// Añadimos un delay de 1 segundo entre cada comando.
        defaultViewport: null
    });
    const page = await browser.newPage();
    //await page.goto('https://www.betfair.com/exchange/plus/es/f%C3%BAtbol/primera-b-nacional-argentina-apuestas-803237/inplay');
    await page.goto('https://www.betfair.com/exchange/plus/es/f%C3%BAtbol/europa-clasificaci%C3%B3n-mundial-fifa-apuestas-12374160/inplay');
    await page.waitForTimeout(5000);


    let proximamente = await page.evaluate(() => {
        const info = [];
        datos = document.querySelectorAll('p[ng-if]')
        console.log(datos.length)
        for (dato of datos){
            info.push(dato.textContent)
        }
        return info;
    });

    if (proximamente[0]=='No hay eventos que mostrar'){
        console.log("no hay nada")
    }else{
        console.log("si")

        let hay_en_vivo = await page.evaluate(() => {
            const info = [];
            datos = document.querySelectorAll('th[ng-repeat]')
            console.log(datos.length)
            for (dato of datos){
                if (dato.textContent=='En juego Igualado'){
                    return true;
                }
            }
        });


        console.log(hay_en_vivo);

        if(hay_en_vivo){

            console.log("hay en vivo")
            let montos = await page.evaluate(() => {
                const info = [];
                datos = document.getElementsByClassName('matched-amount-value')
                console.log(datos.length,'montos')
                for (dato of datos){
                    info.push(dato.textContent)
                }
                return info;
            });

            console.log(montos)

            var montos_corregidos = [];
            var montos_corregidos_final = [];

            for (monto of montos){
                const monto_sin_signo = monto.slice(1)
                const monto_sin_comas = monto_sin_signo.replace(",","")
                montos_corregidos.push(monto_sin_comas)
            }

            console.log(montos_corregidos)


            for (monto of montos_corregidos){
                const monto_sin_comas = monto.replace(",","")
                montos_corregidos_final.push(monto_sin_comas)
            }

            indices = [];
            montos_corregidos_final.forEach(function(monto, index) {
                console.log(monto)
                if(parseInt(montos_corregidos_final) > 10000){
                    indices.push(index);
                }
            });

            console.log(indices)





        }
    }

    browser.close();
}
run(); */

const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

var request = $.ajax({
    method: "GET",
    url: "http://localhost:8000/api/mandamensaje"
});

/*
liga argentina en bet365
https://www.bet365.com/#/AC/B1/C1/D1002/E63206283/G40/


1xbet

https://ar.1xbet.com/es/line/Football/119599
https://ar.1xbet.com/es/line/Football/119599-Argentina-Primera-Division/
 */
