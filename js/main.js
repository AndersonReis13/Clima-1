const key = "ff9e64c894636ea28cea5a264fb796b5"

const input = document.querySelector('.input-cidade')
const bt = document.querySelector('.botao-busca')
const nameCity = document.querySelector('.cidade')
const prevision = document.querySelector('.texto-previsao')
const temp = document.querySelector('.temp')
const docment = document.querySelector('body')

bt.addEventListener('click',clickbutton)


docment.addEventListener('keyup', (keycode)=>{
    if(keycode.key == 'Enter'){
        clickbutton()
    }

})

function clickbutton(){
   const city = input.value
    data(city)
   
}

async function data(city){
    
    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt_br`)
    .then(result => result.json())
    
    console.log(typeof result.name) 
    
    if(result.name === undefined){
    window.alert("CIDADE NÂO ENCONTRADA")

    return
    }

    
    if(result){
        nameCity.textContent = `Tempo em ${result.name}`  
        temp.textContent = `${result.weather[0].description}`
        prevision.textContent = `${result.main.temp} °C`
        
    } else {
        console.log(typeof result)
    }

   
        
    
}



