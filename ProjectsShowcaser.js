import Project, {ProjectType} from "./Project.js";
import ProjectsList from "./ProjectsList.js";
import ValueIsInEnum from "./ValueIsInEnum.js";



// JavaScript does not have enum
const ProjectCategory = Object.freeze({
    PROUD_OF_THIS: "ProudOfThisProject",
    GAME: "GameProject",
    NOT_GAME: "Not-gameProject"
});



const ProudOfTheseButton = document.getElementById("ProudOfThese");
const GamesButton = document.getElementById("Games");
const NotGamesButton = document.getElementById("Not-games");
const ProjectShowcaseButtons = [ProudOfTheseButton, GamesButton, NotGamesButton];
const SelectedButtonClassString = "SelectedButton";

const ProjectLinksContainer = document.getElementById("ProjectLinksContainer");



function AddProjectLink(AddedProject) {
    if (!(AddedProject instanceof Project)) {
        throw new TypeError(AddedProject + " is not a valid project");
    }

    let AnchorElement = document.createElement("a");
    let ContainerDivElement = document.createElement("div");
    let ImageElement = document.createElement("img");
    let TextDivElement = document.createElement("div");
    let H3Element = document.createElement("h3");
    let ParagraphElement = document.createElement("p");

    H3Element.innerText = AddedProject.Name;
    ParagraphElement.innerText = AddedProject.ShortDescription;

    TextDivElement.appendChild(H3Element);
    TextDivElement.appendChild(ParagraphElement);

    ImageElement.src = AddedProject.ImageLink;
    
    ContainerDivElement.appendChild(ImageElement);
    ContainerDivElement.appendChild(TextDivElement);
    ContainerDivElement.classList.add("ProjectLinkContainer");

    AnchorElement.appendChild(ContainerDivElement);
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
    AnchorElement.href = AddedProject.PageLink;

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
   ProjectShowcaseButtons.forEach(Button => {
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



RegisterOnClickEvent(ProudOfTheseButton, OnProudOfTheseButtonClicked);
RegisterOnClickEvent(GamesButton, OnGamesButtonClicked);
RegisterOnClickEvent(NotGamesButton, OnNotGamesButtonClicked);

ProjectLinksContainer.innerHTML = "";
ProjectsList.forEach(AvailableProject => {
    AddProjectLink(AvailableProject);
});

ProudOfTheseButton.click();