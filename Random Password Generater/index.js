const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input")
const copyEl = document.querySelector('.fa-copy')
const alertEl = document.querySelector(".alert-contaniner")

btnEl.addEventListener("click", ()=>{
    creatPassword();
})

copyEl.addEventListener("click" ,()=>{
    copyPassword();
    alertEl.classList.remove('active');
})

function creatPassword(){
    const chars = "0987654321qwertyuioplkjhgfdsazxcvbnm!@#$%^&*()_+{}[]:;'<>??/\\|QWERTYUIOPLKJHGFDSAZXCVBNM"
    const passwordlength = 14
    let password = ''
    
    for(let i = 0; i < passwordlength; i++){
        const randomNum = Math.floor(Math.random()*chars.length)
        password += chars.substring(randomNum, randomNum +1)
        
    }

    inputEl.value = password
    alertEl.innerText = password + "Copied!"
}

function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0,9999)
    navigator.clipboard.writeText(inputEl.value)
}