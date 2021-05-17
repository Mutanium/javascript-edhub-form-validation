// declareer een variabele die in de html door de gebruiker zal worden ingevuld
const log = document.getElementById('password');
//laat javascript "luisteren"
log.addEventListener("keyup", updateValue);  //eventueel keyup ipv input
//zorg ervoor dat dat niewe toetswaardes worden toegevoegd aan e zodat e een string wordt ipv losse entries
function updateValue(e) {
    //waarom is dit noodzakelijk??
    console.log(e.target.value)

    //testen of dit werkt

    if (e.target.value.length > 0 && e.target.value.length < 6) {
    message.textContent = "het huidige wachtwoord bevat te weinig karakters (minimaal 6)"
    }
    else if (e.target.value.length > 5) {
        message.textContent = "het huidige wachtwoord voldoet!"
    } else {
        message.textContent = "";
    }

}

//push melding naar html
const container = document.getElementById("passwordWarning"); // target een html element via id
const message = document.createElement('p'); // creëer een html element, paragraaf in dit geval.
//message.setAttribute('class','aantalTeKoop'); // ken een css klasse toe aan dit element
//message.textContent = ""; // declareer welke javascript output gebruikt gaat worden
container.appendChild(message);


//deel 2 username

const logUsr = document.getElementById('username');
//laat javascript "luisteren"
logUsr.addEventListener("keyup", updateValue2);  //eventueel keyup ipv input
//zorg ervoor dat dat niewe toetswaardes worden toegevoegd aan e zodat e een string wordt ipv losse entries
function updateValue2(e) {
    //waarom is dit noodzakelijk??
    console.log(e.target.value)

    //testen of dit werkt

    if (e.target.value.includes("@")) {
        message2.textContent = "Gebruikersnamen mogen geen @ bevatten"
    }
    else if (e.target.value.length < 4) {
        message2.textContent = "Een gebruikersnaam moet minimaal 4 tekens lang zijn"
    } else {
        message2.textContent = "";
    }

}

//push melding naar html
const container2 = document.getElementById("usernameWarning"); // target een html element via id
const message2 = document.createElement('p'); // creëer een html element, paragraaf in dit geval.
//message.setAttribute('class','aantalTeKoop'); // ken een css klasse toe aan dit element
//message.textContent = ""; // declareer welke javascript output gebruikt gaat worden
container2.appendChild(message2);