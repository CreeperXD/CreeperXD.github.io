// For proper test of modules need to deploy to github pages first
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#troubleshooting

// import Project, {ProjectType} from "./Project.js";
// import ProjectsList from "./ProjectsList.js";
// import ValueIsInEnum from "./ValueIsInEnum.js";
// start of code for local test only
function ValueIsInEnum(Value, Enum) {
    return Object.values(Enum).includes(Value);
}

class Project {
    constructor(Name, ShortDescription, Type, ProudOfThis, Link) {
        if (typeof(Name) !== "string") {
            throw new TypeError(Name + " is not a string");
        }
        if (typeof(ShortDescription) !== "string") {
            throw new TypeError(ShortDescription + " is not a string");
        }
        if (!Object.values(ProjectType).includes(Type)) {
            throw new TypeError(Type + " is not a ProjectType");
        }
        if (typeof(ProudOfThis) !== "boolean") {
            throw new TypeError(ProudOfThis + " is not a boolean");
        }
        if (typeof(Link) !== "string") {
            throw new TypeError(Link + " is not a string");
        }

        this.Name = Name;
        this.ShortDescription = ShortDescription;
        this.Type = Type;
        this.ProudOfThis = ProudOfThis
        this.Link = Link;
    }
}

const ProjectType = Object.freeze({
    GAME: "Game",
    NOT_GAME: "Not-game"
});

const ProjectsList = [
    new Project("game1", "test description1", ProjectType.GAME, true, "#"),
    new Project("notgame1", "test description2", ProjectType.NOT_GAME, true, "#"),
    new Project("game2", "test description3", ProjectType.GAME, false, "#"),
]
// end of code for local test only



// JavaScript does not have enum
const ProjectCategory = Object.freeze({
    PROUD_OF_THIS: "ProudOfThisProject",
    GAME: "GameProject",
    NOT_GAME: "Not-gameProject"
});



const ProudOfTheseButton = document.getElementById("ProudOfThese");
const GamesButton = document.getElementById("Games");
const NotGamesButton = document.getElementById("Not-games");
const ProjectCategoryButtons = [ProudOfTheseButton, GamesButton, NotGamesButton];
const SelectedButtonClassString = "SelectedButton";

const ProjectLinksContainer = document.getElementById("ProjectLinksContainer");



function AddProjectLink(AddedProject) {
    if (!(AddedProject instanceof Project)) {
        throw new TypeError(AddedProject + " is not a valid project");
    }

    let AnchorElement = document.createElement("a");
    let DivElement = document.createElement("div");
    let H6Element = document.createElement("h6");
    let ParagraphElement = document.createElement("p");

    H6Element.innerText = AddedProject.Name;
    ParagraphElement.innerText = AddedProject.ShortDescription;

    DivElement.appendChild(H6Element);
    DivElement.appendChild(ParagraphElement);

    AnchorElement.appendChild(DivElement);
    AnchorElement.classList.add("ProjectLink");
    if (AddedProject.ProudOfThis) {
        AnchorElement.classList.add(ProjectCategory.PROUD_OF_THIS);
    }
    switch (AddedProject.Type) {
        case ProjectType.GAME:
            AnchorElement.classList.add(ProjectCategory.GAME);
            break;
        case ProjectType.NOT_GAME:
            AnchorElement.classList.add(ProjectCategory.NOT_GAME);
            break;
        default:
            console.log("Challenge complete! How did we get here?");
            break;
    }
    AnchorElement.href = AddedProject.Link;

    ProjectLinksContainer.appendChild(AnchorElement);
}


function ShowRelevantProjects(Category) {
    if (!ValueIsInEnum(Category, ProjectCategory)) {
        throw new TypeError(Category + " is not a ProjectCategory");
    }

    for (const ProjectLink of ProjectLinksContainer.children) {
        ProjectLink.hidden = !ProjectLink.classList.contains(Category);
    }
}


function HighlightClickedButton(ClickedButton) {
   ProjectCategoryButtons.forEach(Button => {
        if (Button === ClickedButton) {
            Button.classList.add(SelectedButtonClassString);
        } else {
            Button.classList.remove(SelectedButtonClassString);
        }
    });
}


function RegisterOnClickEvent(Button, Listener) {
    if (!(Button instanceof HTMLButtonElement)) {
        throw new TypeError(Button + " is not a button element");
    }

    Button.addEventListener("click", Listener);
}


function OnProudOfTheseButtonClicked() {
    ShowRelevantProjects(ProjectCategory.PROUD_OF_THIS);
    HighlightClickedButton(ProudOfTheseButton);
}


function OnGamesButtonClicked() {
    ShowRelevantProjects(ProjectCategory.GAME);
    HighlightClickedButton(GamesButton);
}


function OnNotGamesButtonClicked() {
    ShowRelevantProjects(ProjectCategory.NOT_GAME);
    HighlightClickedButton(NotGamesButton);
}



console.log("hi");

RegisterOnClickEvent(ProudOfTheseButton, OnProudOfTheseButtonClicked);
RegisterOnClickEvent(GamesButton, OnGamesButtonClicked);
RegisterOnClickEvent(NotGamesButton, OnNotGamesButtonClicked);

ProjectsList.forEach(AvailableProject => {
    AddProjectLink(AvailableProject);
});

ProudOfTheseButton.click();