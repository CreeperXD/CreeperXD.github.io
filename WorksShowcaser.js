const TestParagraph = document.getElementById("test");

const ProudOfTheseButton = document.getElementById("ProudOfThese");
const GamesButton = document.getElementById("Games");
const NotGamesButton = document.getElementById("Not-games");

function OnProudOfTheseButtonClicked() {
    TestParagraph.innerText = "Proud of these";
}

function OnGamesButtonClicked() {
    TestParagraph.innerText = "Games";
}

function OnNotGamesButtonClicked() {
    TestParagraph.innerText = "Not-games";
}

function RegisterOnClickEvent(Button, Listener) {
    if (!(Button instanceof HTMLButtonElement)) {
        throw new TypeError(Button + " is not a button element");
    }

    Button.addEventListener("click", Listener);
}

RegisterOnClickEvent(ProudOfTheseButton, OnProudOfTheseButtonClicked);
RegisterOnClickEvent(GamesButton, OnGamesButtonClicked);
RegisterOnClickEvent(NotGamesButton, OnNotGamesButtonClicked);