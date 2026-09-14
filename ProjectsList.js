import Project, {ProjectType} from "./Project.js";



const ProjectsList = [
    new Project("game1", "test description1", "assets/images/EmailLogo.png", ProjectType.GAME, true, "#"),
    new Project("notgame1", "test description2", "assets/images/EmailLogo.png", ProjectType.NOT_GAME, true, "#"),
    new Project("game2", "test description3", "assets/images/EmailLogo.png", ProjectType.GAME, false, "#"),
    new Project(
        "Shiplogging",
        "You are a worker at a signal station, tasked to record data of passing ships. You will have to communicate with them using international maritime signal flags.",
        "assets/images/Shiplogging/cover_image_630_500.png",
        ProjectType.GAME,
        true,
        "./projects/Shiplogging.html"
    )
]

export default ProjectsList;