
const newApiBaseUrl = "https://awesomeapi-proxy-monetae-production.up.railway.app/moeda?base=XAU&target=USD"
//const urlBr = "https://economia.awesomeapi.com.br/last/USD-BRL"
const urlBr = "https://awesomeapi-proxy-monetae-production.up.railway.app/moeda?base=USD&target=BRL"
const inputPrice = document.querySelector("#VG")

console.log("atualização 25 d0 4")
const gold = async () => {
   const  response = await fetch(newApiBaseUrl)
   const data =  await response.json()
   const troy = (Number(data['XAUUSD'].ask)+Number(data['XAUUSD'].bid))/2
   const grama = troy/31.1035



   const responseBrl = await fetch(urlBr)
   
   const datas = await responseBrl.json() 
   const sellPrice = datas['USDBRL'].bid
   const callPrice = datas['USDBRL'].ask
   const basePrice = ((Number(sellPrice) + Number(callPrice)) / 2).toFixed(2)


   let priceGrama = grama*basePrice
   inputPrice.value = priceGrama.toFixed(2)
   
   

    
}

gold(urlBr)