window.addEventListener("load", () => {
    let AnchorElements = document.getElementsByTagName("main")[0].getElementsByTagName("a");
    for (let Anchor of AnchorElements) {
        Anchor.target = "_blank";
        Anchor.relList.add("noopener");
        Anchor.relList.add("noreferrer");
    }
});