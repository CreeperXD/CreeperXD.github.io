import ValueIsInEnum from "./ValueIsInEnum.js";



// JavaScript does not have enum
export const ProjectType = Object.freeze({
    GAME: "Game",
    NOT_GAME: "Not-game"
});



export default class Project {
    constructor(Name, ShortDescription, ImageLink, Type, ProudOfThis, PageLink) {
        if (typeof(Name) !== "string") {
            throw new TypeError(Name + " is not a string");
        }
        if (typeof(ShortDescription) !== "string") {
            throw new TypeError(ShortDescription + " is not a string");
        }
        if (typeof(ImageLink) !== "string") {
            throw new TypeError(ImageLink + " is not a string");
        }
        if (!ValueIsInEnum(Type, ProjectType)) {
            throw new TypeError(Type + " is not a ProjectType");
        }
        if (typeof(ProudOfThis) !== "boolean") {
            throw new TypeError(ProudOfThis + " is not a boolean");
        }
        if (typeof(PageLink) !== "string") {
            throw new TypeError(PageLink + " is not a string");
        }

        this.Name = Name;
        this.ShortDescription = ShortDescription;
        this.ImageLink = ImageLink;
        this.Type = Type;
        this.ProudOfThis = ProudOfThis
        this.PageLink = PageLink;
    }
}