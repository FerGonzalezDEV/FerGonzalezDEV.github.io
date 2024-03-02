const myForm = document.getElementById("login-register-form");

const form1 = `
<h2>Login</h2>
<div class="wrapper-data">
<label for="username">Nombre de usuario: </label>
<input type="text" name="username" id="username" required>
</div>
<div class="wrapper-data">
<label for="username">Contraseña: </label>
<input type="password" name="user-password" id="password" required>
</div>
<a href="#" onclick="register()">Create account</a>
<button type="button" id="login-form-button" onclick="createUser()">Ingresar</button>
`

const form2 = `
<h2>Register</h2>
<div class="wrapper-data">
<label for="register-username">Nombre de usuario: </label>
<input type="text" name="username" id="register-username" required>
</div>
<div class="wrapper-data">
<label for="register-password">Contraseña: </label>
<input type="password" name="register-password" id="register-password" required>
</div>
<a href="#" onclick="login()">Log in</a>
<button type="button" id="register-form-button">Crear Usuario</button>
`
login();
let usuarios = [];

function verificarNombreUsuario(username) {
    return usuarios.some(usuario => usuario.username === username);
}

function register() {
    myForm.innerHTML = form2;
}

function login() {
    myForm.innerHTML =  form1;
}

function validarLogin(username, password){
    return usuarios.some(usuario => usuario.username === username && usuario.password == password);
}

myForm.addEventListener("click", function(event) {
    event.preventDefault();
    if (event.target.id === "register-form-button") {
        const registerUsername = document.getElementById("register-username").value;
        const registerPassword = document.getElementById("register-password").value;

        if (verificarNombreUsuario(registerUsername)) {
            alert("El nombre de usuario ya está registrado. Por favor, elige otro.");
            return;
        }

        const usuario = {
            username: registerUsername,
            password: registerPassword,
        }

        usuarios.push(usuario);
        alert("Usuario registrado correctamente!");
    }
})

myForm.addEventListener("click", function(event) {
    event.preventDefault();
    if (event.target.id === "login-form-button"){
        const loginUsername = document.getElementById("username").value;
        const loginPassword = document.getElementById("password").value;

        if(validarLogin(loginUsername, loginPassword)) {
            alert("Acceso concedido!");
        } else {
            alert("Usuario o contraseña equivocada, vuelva a intentarlo.");
            return;
        }
    }

    

})
