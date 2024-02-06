
const submit = document.querySelector(".submit").addEventListener("click", enviar);



function enviar(){
    const usuario = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;
    

    console.log(usuario)
    console.log(pass)

    const xr = new XMLHttpRequest();

    xr.open('GET', 'contacts.json', true);

    xr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log("is ready");



        } else {
            console.log("is not ready")
        }

    }

    xr.send();
    
}






