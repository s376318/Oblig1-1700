let kjopBilett = [];

function Billetter() {
    let ut = "<table><tr><th>Valgt film</th><th>Antall</th><th>Fornavn</th>" +
        "<th>Etternavn</th><th>Tlfnr</th><th>Epost</th></tr>";
    for (let i of kjopBilett) {
        ut += "<tr>";
        ut += "<td>" + i.Valg + "</td><td>" + i.Antall + "</td><td>" + i.Fornavn +
            "</td><td>" + i.Etternavn + "</td><td>" + i.Telefonnr + "</td><td>" +
            i.Epost + "</td>";
    }
    ut += "</table>"

    document.getElementById("kjopBillett").innerHTML = ut;
}

function tom(){
    document.getElementById("velgFilm").value = ""
    document.getElementById("tall").value = ""
    document.getElementById("forNavn").value = ""
    document.getElementById("etterNavn").value = ""
    document.getElementById("telefonNr").value = ""
    document.getElementById("epost").value = ""
}
function slett() {
    kjopBilett = []
    document.getElementById("kjopBillett").innerHTML = "";
}


function kjop() {


    let bestilling = {
        Valg: document.getElementById("velgFilm").value,
        Antall: document.getElementById("tall").value,
        Fornavn: document.getElementById("forNavn").value,
        Etternavn: document.getElementById("etterNavn").value,
        Telefonnr: document.getElementById("telefonNr").value,
        Epost: document.getElementById("epost").value
    }
    let feilmelding = 0;

    if (bestilling.Valg === "") {
        document.getElementById("feilValg").innerHTML = " Må velge film";
        feilmelding++;
    }else{
        document.getElementById("feilValg").innerHTML = "";
    }

    if (bestilling.Antall === "") {
        document.getElementById("feilTall").innerHTML = "Må angi et tall";
        feilmelding++;
    } else if (isNaN(bestilling.Antall)){
        document.getElementById("feilTall").innerHTML = "Må skrive inn gyldig tall!";
        feilmelding++;
    }else {
        document.getElementById("feilTall").innerHTML = "";
    }

    if (bestilling.Fornavn === "") {
        document.getElementById("feilNavn").innerHTML = "Må skrive fornavn";
        feilmelding++;
    } else {
        document.getElementById("feilNavn").innerHTML = "";
    }
    if (bestilling.Etternavn === "") {
        document.getElementById("feilEtternavn").innerHTML = "Må skrive etternavn";
        feilmelding++;
    } else {
        document.getElementById("feilEtternavn").innerHTML = "";
    }

    let telefonRegex= /^[0-9]{8}$/;
    if (bestilling.Telefonnr === "") {
        document.getElementById("feilTlfNr").innerHTML = "Må oppgi telefonnr";
        feilmelding++;
    } else if (!telefonNr.value.match(/^[0-9]{8}$/)){
        document.getElementById("feilTlfNr").innerHTML = "Må skrive inn gyldig telefonnr!";
        feilmelding++;
    } else {
        document.getElementById("feilTlfNr").innerHTML = "";
    }
    if (bestilling.Epost === "") {
        document.getElementById("feilEpost").innerHTML = "Må skrive Epost";
        feilmelding++;
    } else if(!epost.value.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i)){
        document.getElementById("feilEpost").innerHTML = "Må skrive gyldig epost";
        feilmelding++;
    } else {
        document.getElementById("feilEpost").innerHTML = "";
    }
    if (feilmelding === 0) {
        kjopBilett.push(bestilling);
        tom();
        Billetter();
    }

}













