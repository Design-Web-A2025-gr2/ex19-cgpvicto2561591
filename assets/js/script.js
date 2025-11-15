//étape 1 :
// aller chercher la valeur des 2 inputs de mots de passe 
//si les 2 valeurs sont différentes, afficher un message d'erreur

//étape 2 :
//quand le changement de texte il faut valider la longeur du : texte , Majuscule et minuscule , caractère spécial, changement icnone 

//étape 3 :
// ensuite tester la force du mot de passe avec la function zxcvbn
//s'assurer que tout est ok avant de soumettre le formulaire


const passwordInput1 = document.getElementById('password');
const passwordInput2 = document.getElementById('confirm-password');
const  buttonSubmit = document.getElementsByClassName('bouton-soumettre');
const buttonTester = document.getElementById('tester');
const messageErreur = document.querySelector('.message-erreur');

const veriflongeur = document.querySelector('.validation-longueur');
const verifmajuscule = document.querySelector('.validation-majuscule');
const verifminuscule = document.querySelector('.validation-minuscule');
const verifcaraspecial = document.querySelector('.validation-caractere');

let verif = false;//verification des 2 mots de passe pour qu'il soit identique

let verifyLength = false;//verification de la longeur du mot de passe minimum 8 caractères
let verifymaj = false;
let verifyminu = false;
let verifyspecial = false;
let bool = true;


const testclasselement = document.querySelectorAll('.message');
    const firstElement = testclasselement[0];
    const secondElement = testclasselement[1];
    const thirdElement = testclasselement[2];
// comprendre le regex.test
// const regexMot = /Bonjour/;
// const chaine1 = "Bonjour le monde !";
// const chaine2 = "Au revoir le monde !";

// console.log(regexMot.test(chaine1)); // true
// console.log(regexMot.test(chaine2)); // false



//test check 

    secondElement.classList.add('greenlight');
    secondElement.classList.remove('redlight');

    secondElement.classList.remove('greenlight');
    secondElement.classList.add('redlight');





// function

        // const isValid = req.regex.test(password);


function validateLength() {
    const password = passwordInput1.value;
    if (password.length < 7) {
        console.log("Le mot de passe ne contien pas 8 caractères.");
        verifyLength = false; 
    }else {
        verifyLength = true;
        console.log("Le mot de passe contien au moins 8 caractères.");
    }
}
function validateUppercase() {
    const password = passwordInput1.value;
    const uppercaseRegex = /[A-Z]/; 
    if (!uppercaseRegex.test(password)) {
    console.log("Le mot de passe ne contient pas de caratere Majuscule.");
       verifymaj = false;

    }
    else {
    console.log("Le mot de passe contient au moins un caractère Majuscule.");
     verifymaj = true;
    }
}
function validateLowercase() {
    const password = passwordInput1.value;
    const lowercaseRegex = /[a-z]/; 
    if (!lowercaseRegex.test(password)) {
    console.log("Le mot de passe ne contient pas de caractère Minuscule.");
    verifyminu = false;
    }
    else {
    console.log("Le mot de passe contient au moins un caractère Minuscule.");
    verifyminu = true;
    }
}
function validateSpecialCharacter() {
    const password = passwordInput1.value;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/; 
    if (!specialCharRegex.test(password)) {
    console.log("Le mot de passe ne contient pas de caractère spécial.");
    verifyspecial = false;
    }
    else {
    console.log("Le mot de passe contient au moins un caractère spécial.");
    verifyspecial = true;
    }
}   
function iconappear(){
    // vérification icone longueur
    if(verifyLength){
        let iconon = document.getElementById('icon-lenght');
        iconon.classList.add('fa-check');
        iconon.classList.remove('fa-ban');
        firstElement.classList.add('greenlight');
        firstElement.classList.remove('redlight');

    }
    if(!verifyLength){
        let iconoff = document.getElementById('icon-lenght');
        iconoff.classList.add('fa-ban');
        iconoff.classList.remove('fa-check');
        firstElement.classList.remove('greenlight');
        firstElement.classList.add('redlight');
    }
    //vérification maj et minuscule
    if(verifymaj && verifyminu){
        let iconmajminu = document.getElementById('icon-Majminu');
        iconmajminu.classList.add('fa-check');
        iconmajminu.classList.remove('fa-ban');
        secondElement.classList.add('greenlight');
        secondElement.classList.remove('redlight');
        
    }
     if(!verifymaj && !verifyminu){
        let iconmajminu = document.getElementById('icon-Majminu');
        iconmajminu.classList.add('fa-ban');
        iconmajminu.classList.remove('fa-check');
        secondElement.classList.remove('greenlight');
        secondElement.classList.add('redlight');
    }
    //véfication caratere spécial
    if(verifyspecial)
        {
            let iconspecial = document.getElementById('icon-spé');
            iconspecial.classList.add('fa-check');
            iconspecial.classList.remove('fa-ban');
            thirdElement.classList.add('greenlight');
            thirdElement.classList.remove('redlight');
        }
        else if(!verifcaraspecial)
            {
                let iconspecial = document.getElementById('icon-spé');
                iconspecial.classList.add('fa-ban');
                iconspecial.classList.remove('fa-check');
                thirdElement.classList.remove('greenlight');
                thirdElement.classList.add('redlight');
            }
    }

    


function validatePasswordMatch() {
    const password1 = passwordInput1.value;
    const password2 = passwordInput2.value;
    let verif = false;
    if (password1 !== password2) 
    {
        console.log("Les mots de passe ne correspondent pas.");
        verif = false;
    }
    else {
        verif = true;
        console.log("Les mots de passe correspondent.");
    }
    if(verif){
        messageErreur.classList.add('hidden');
        messageErreur.classList.remove('invalide');
    }
    else{
        messageErreur.classList.remove('hidden');
        messageErreur.classList.add('invalide');
    }
}

//actions 

passwordInput2.addEventListener("keyup",validatePasswordMatch);
passwordInput1.addEventListener("keyup", function() {
    validateLength();
    validateUppercase();
    validateLowercase();
    validateSpecialCharacter();
    iconappear();
    validatePasswordMatch();
    
});
