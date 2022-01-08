const btnRecord=document.getElementById('grabar');
const btnStop=document.getElementById('pausar');
const btnPlay = document.getElementById('play');
const btnVaciar = document.getElementById('vaciar');
const texto=document.getElementById('texto');

let recognition= new webkitSpeechRecognition();
recognition.lang= 'es-ES';
recognition.continuous=true;
recognition.iterim=true;
recognition.interimResults=true;

recognition.onresult = (event) => {
    const results=event.results;
    const frase = results[results.length -1][0].transcript;
    texto.value = frase;
}
recognition.onend = (event) =>{
alert('Grabacion en pausa')
}
recognition.onerror = (event) =>{
console.log(event.error)
}

btnRecord.addEventListener('click',() =>{
    recognition.start();
});

btnStop.addEventListener('click',() =>{
    recognition.abort();
});

btnPlay.addEventListener('click',()=>{
    leerTexto(texto.value);
});
btnVaciar.addEventListener('click',()=>{
    texto.value="";
})
function leerTexto(texto){
const speech=new SpeechSynthesisUtterance();
speech.text=texto;
speech.volume=2;
speech.rate=0.8;
speech.pitch=1;
speech.lang='es-ES';

window.speechSynthesis.speak(speech);
}
const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark');//toggle agrega una clase si no tiene y la elimina si ya la tiene
	btnSwitch.classList.toggle('active');
});
