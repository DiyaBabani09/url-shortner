const long=document.getElementById("longurl")
const short=document.getElementById("shorturl")
const shortner=document.getElementById("shortner")
const copy=document.getElementById("copy")
 async function generate(){
    const longurl=long.value
    const result= await fetch(`https://api.shrtco.de/v2/shorten?url=${longurl}`)
    const data=  await result.json();
    console.log(data.result.short_link2)
    short.value=data.result.short_link2;

};

shortner.addEventListener('click',generate);
copy.addEventListener('click',Clipboard=>{
    short.select();
    window.navigator.clipboard.writeText(short.value)
})