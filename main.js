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

    //injecteren in html
const container = document.getElementById("passwordWarning"); // target een html element via id
const message = document.createElement('p'); // creëer een html element, paragraaf in dit geval.
//message.setAttribute('class','aantalTeKoop'); // ken een css klasse toe aan dit element
//message.textContent = ""; // declareer welke javascript output gebruikt gaat worden
container.appendChild(message);


