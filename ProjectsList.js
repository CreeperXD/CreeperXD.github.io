import Project, {ProjectType} from "./Project.js";



const ProjectsList = [
    new Project(
        "Floppy Disk Orienteering",
        "Navigate your way in a forest to collect floppy disks, but you are only given a map and compass.",
        "assets/images/Floppy Disk Orienteering/cover_image.png",
        ProjectType.GAME,
        true,
        "projects/Floppy Disk Orienteering.html"
    ),
    new Project(
        "laksa mana?",
        "Serve different variations of laksa, all named after Malaysian states.",
        "assets/images/laksa mana/cover_image.png",
        ProjectType.GAME,
        false,
        "projects/laksa mana.html"
    ),
    new Project(
        "Time Mage",
        "Play as a wizard cursed by demons to constantly age, having to slay them to get back lost time.",
        "assets/images/Time Mage/cover_image.png",
        ProjectType.GAME,
        false,
        "projects/Time Mage.html"
    ),
    new Project(
        "Ministry of Spinning",
        "Play as the minister of propaganda spinning war news into something positive.",
        "assets/images/Ministry of Spinning/cover_image.png",
        ProjectType.GAME,
        false,
        "projects/Ministry of Spinning.html"
    ),
    new Project(
        "Shiplogging",
        "Play as a worker at a signal station, recording some information about passing ships by communicating with them using international maritime signal flags.",
        "assets/images/Shiplogging/cover_image_630_500.png",
        ProjectType.GAME,
        true,
        "projects/Shiplogging.html"
    ),
    new Project(
        "Godot stat bar",
        "An augmented version of Godot's built-in progress bar, able to show change in value smoothly.",
        "assets/images/Godot stat bar/thumbnail.png",
        ProjectType.NOT_GAME,
        true,
        "projects/Godot stat bar.html"
    ),
    new Project(
        "Godot 3D character controller",
        "A customisable physics-based 3D character controller for Godot.",
        "assets/images/Godot 3D character controller/thumbnail.png",
        ProjectType.NOT_GAME,
        true,
        "projects/Godot 3D character controller.html"
    ),
    new Project(
        "Preys in... what where is this?",
        "Play as a cat hunting mice in some... strange places.",
        "assets/images/PIWWIT/cover_image.png",
        ProjectType.GAME,
        false,
        "projects/PIWWIT.html"
    ),
    new Project(
        "Godot project template",
        "A project template for Godot with some commonly used systems.",
        "assets/images/godot_icon.svg",
        ProjectType.NOT_GAME,
        true,
        "projects/Godot project template.html"
    ),
    new Project(
        "Godot dialogue system",
        "A simple dialogue system for Godot with just 2 data structures and a HUD.",
        "assets/images/Godot dialogue system/thumbnail.png",
        ProjectType.NOT_GAME,
        true,
        "projects/Godot dialogue system.html"
    ),
    new Project(
        "Jiangshi",
        "Explore a dead village.",
        "assets/images/Jiangshi/cover_image.png",
        ProjectType.GAME,
        false,
        "projects/Jiangshi.html"
    ),
    new Project(
        "GoGoDino Fun Zone",
        "GoGoDino in a Roblox experience.",
        "assets/images/GoGoDino Fun Zone/icon.webp",
        ProjectType.GAME,
        true,
        "projects/GoGoDino Fun Zone.html"
    ),
    new Project(
        "WebAR Model Displayer",
        "Scan a QR code to display a model on it.",
        "assets/images/WebAR Model Displayer/thumbnail.jpeg",
        ProjectType.NOT_GAME,
        false,
        "projects/WebAR Model Displayer/index.html"
    ),
    new Project(
        "Defender",
        "Play as a defensive AI for the world server against the intrusion of a rogue AI in a tower defense.",
        "assets/images/Defender/cover_image.png",
        ProjectType.GAME,
        false,
        "projects/Defender.html"
    ),
    new Project(
        "Rolling Knight",
        "Play as a knight cursed by a witch to be confined in a ball but can now manipulate certain objects by scaling them.",
        "assets/images/Rolling Knight/cover_image.png",
        ProjectType.GAME,
        true,
        "projects/Rolling Knight.html"
    ),
    new Project(
        "Dive and Scavenge",
        "Play as a diver hired by a scavenger group to scavenge valuable items in an underground lake.",
        "assets/images/Dive and Scavenge/cover_image.png",
        ProjectType.GAME,
        true,
        "projects/Dive and Scavenge.html"
    ),
    new Project(
        "Into the Hole",
        "Slide a ball into a hole within 20 seconds.",
        "assets/images/Into the Hole/cover_image.jpg",
        ProjectType.GAME,
        true,
        "projects/Into the Hole.html"
    ),
    new Project(
        "Uncover",
        "Are you alone? Uncover things as you go.",
        "assets/images/Uncover/cover_image.jpg",
        ProjectType.GAME,
        false,
        "projects/Uncover.html"
    ),
    new Project(
        "Rebels of the Order",
        "Play as a rebel soldier against the authoritarian regime in a turn-based combat.",
        "assets/images/Rebels of the Order/cover_image.jpg",
        ProjectType.GAME,
        false,
        "projects/Rebels of the Order.html"
    )
]

export default ProjectsList;