async function LoadHeader() {
    try {
        const Response = await fetch("/HeaderContent.html");
        const HeaderContent = await Response.text();
        document.getElementsByTagName("header")[0].innerHTML = HeaderContent;
    } catch (error) {
        console.error("Error loading header: ", error);
    }
}

async function LoadFooter() {
    try {
        const Response = await fetch("/FooterContent.html");
        const FooterContent = await Response.text();
        document.getElementsByTagName("footer")[0].innerHTML = FooterContent;
    } catch (error) {
        console.error("Error loading footer: ", error);
    }
}

window.addEventListener("load", () => {
    LoadHeader();
    LoadFooter();
});   