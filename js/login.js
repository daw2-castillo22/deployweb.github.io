export const login = (email, password)=> {
     
    const token = localStorage.getItem('token');
    
    // Logear
    const url = `http://localhost:8000/controllers/auth.controller`; //API
    fetch(url, {
        method: "POST", //Enviar mediante el form el user y el pw
        body: JSON.stringify(user),
        headers: {
            "Content-type": "application/json; charset=UTF-8", 
        }
    })
        .then(response => response.json())
        .then(json => {
            const token = json.token;
            
            //Guardado de token
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);
            
            var usu = document.querySelector("#usuario").value;
            document.querySelector('#email').innerHTML = log;
            document.querySelector('#token').innerHTML = token;
        })
        .catch(err => console.log(err));

}

//Eventos de inicio y final de sesion en caso de click en sus respectivos botones

document.querySelector('#btn-login').addEventListener('click', ()=>{
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    login(email, password)
});
