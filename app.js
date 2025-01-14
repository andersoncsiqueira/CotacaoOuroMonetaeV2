const valorDaGrama = document.querySelector("#VG")
const spread = document.querySelector("#SP")
const quantidade = document.querySelector("#QG")
const custoDoFrete = document.querySelector("#FR")
const button = document.querySelector(".bt")
const divContainers = document.querySelector(".enters")
const allPs = document.querySelectorAll("p")
const divContainerFormanipulatiom = divContainers.children
let valorFinalGram = document.querySelector("#valorgramafi")
let valorFreteFinal = document.querySelector("#valorfinalfrete")
let total = document.querySelector("#total")
const buttonPrint = document.querySelector("#buttonPrint")
const buttonRetry = document.querySelector("#retray")
const formatoBRL = new Intl.NumberFormat('pt-BR', { 
    style: 'currency', 
    currency: 'BRL' 
  });

button.addEventListener("click", ()=> {
    const price = Number(valorDaGrama.value) * (((Number(spread.value)/100)) + 1) * Number(quantidade.value)
    
    valorFinalGram.innerText = formatoBRL.format((Number(valorDaGrama.value) * (((Number(spread.value)/100)) + 1)))
    
    
    valorFreteFinal.innerText = formatoBRL.format(Number(custoDoFrete.value))


     total.innerText = formatoBRL.format((price+Number(custoDoFrete.value)))

    

    Array.from(divContainerFormanipulatiom).forEach( p => p.classList.toggle("showitemoff"))

    Array.from(document.querySelectorAll(".buttonnsfim")).forEach(b => b.classList.toggle("showitemoff"))

    

    
})



buttonRetry.addEventListener("click", () => {

    Array.from(divContainerFormanipulatiom).forEach( p => p.classList.toggle("showitemoff"))

    Array.from(document.querySelectorAll(".buttonnsfim")).forEach(b => b.classList.toggle("showitemoff"))

})


buttonPrint.addEventListener('click', () => {

    Array.from(document.querySelectorAll(".buttonnsfim")).forEach(b => b.classList.toggle("showitemoff"))
    
    //setTimeout(()=> console.log("Aguarde 5 segundos"),5000)

    const element = document.getElementById('print');
    html2canvas(element).then((canvas) => {
      // Baixar a imagem
      const link = document.createElement('a');
      link.download = 'screenshot.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });

   setTimeout(()=>location.reload(),2000)

  });

  console.log("Atualizei 15.02")