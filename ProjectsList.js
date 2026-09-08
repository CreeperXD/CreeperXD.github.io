import Project, {ProjectType} from "./Project.js";



const ProjectsList = [
    new Project("game1", "test description1", "assets/images/EmailLogo.png", ProjectType.GAME, true, "#"),
    new Project("notgame1", "test description2", "assets/images/EmailLogo.png", ProjectType.NOT_GAME, true, "#"),
    new Project("game2", "test description3", "assets/images/EmailLogo.png", ProjectType.GAME, false, "#"),
]

export default ProjectsList;