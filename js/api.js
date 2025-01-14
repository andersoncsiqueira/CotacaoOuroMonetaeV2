const url = " https://economia.awesomeapi.com.br/last/XAU-USD"
const urlBr = "https://economia.awesomeapi.com.br/last/USD-BRL"
const inputPrice = document.querySelector("#VG")


console.log()

const gold = async (url, urlLastUp) => {
   const  response = await fetch(url)
   const data =  await response.json()
   const troy = (Number(data['XAUUSD'].ask)+Number(data['XAUUSD'].bid))/2
   const grama = troy/31.1035



   const responseBrl = await fetch(urlLastUp)
   
   const datas = await responseBrl.json() 
   const sellPrice = datas['USDBRL'].bid
   const callPrice = datas['USDBRL'].ask
   const basePrice = ((Number(sellPrice) + Number(callPrice)) / 2).toFixed(2)


   let priceGrama = grama*basePrice
   inputPrice.value = priceGrama.toFixed(2)
   
   

    
}

gold(url,urlBr)