const siyahi = ["kagiz.png", "scissors.png", "stone.png"]

// siyahi[2]




// DOM Document Object Model

const kagiz = document.getElementById('kagiz')
const qayci = document.getElementById('qayci')
const das = document.getElementById('das')



const komputerinSecimi = document.getElementById('komputer-secim')
const neticeniYaz = document.getElementById('netice')

kagiz.onclick = seciminiEle
qayci.onclick = seciminiEle
das.onclick = seciminiEle


function seciminiEle() {
    const komputer = RandomSecim()
    const secim = this.dataset.id

    if(komputer == 0 && secim == 0) {
        netice = "Yeniden cehd edin"
    }
    else if(komputer ==0 && secim ==1) {
        netice = "Tebrikler!Kagiz qaycini kesdiyi ucun qazandin!"
    }
    else if (komputer ==0 && secim ==2) {
        netice = "Uduzdun! Kagiz dashi bukur!"
    }
    else if (komputer ==1 && secim ==0) {
        netice = "Uduzdun! Qayci kagizi kesir!"
    }
    else if (komputer ==1 && secim ==1) {
        netice = "Yeniden cehd edin"
    }
    else if(komputer ==1 && secim ==2) {
        netice = "Tebrikler qazandin dash qaycini sindirir!"
    }
    else if(komputer ==2 && secim ==0) {
        netice = "Tebrikler kagiz dashi bukur"
    }
    else if (komputer ==2 && secim ==1) {
        netice = "Uduzdun! dash qaycini sindirir!"
    }
    else if(komputer ==2 && secim ==2) {
        netice = "Yeniden cehd edin"
    }

    neticeniYaz.innerHTML = netice
}

function RandomSecim() {
    const say = Math.round(Math.random()*2) // 0-2 arasindaki ededleri alariq
    komputerinSecimi.src = `img/${siyahi[say]}` // template literal

    return say
   // ${}

}