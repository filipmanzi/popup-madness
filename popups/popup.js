class Popup {
    constructor(left, top, imageSrc) {
        this.left = left;
        this.top = top;
        this.imageSrc = imageSrc;
    }

    Render() {
        let newPopup = document.createElement("img");
        newPopup.src = this.imageSrc;
        newPopup.style.position = "absolute";
        newPopup.style.top = (this.top + "px");
        newPopup.style.left = (this.left + "px");
        newPopup.style.transform = "translate(-50%, -50%)";
        newPopup.style.maxWidth = "300px";
        newPopup.style.height = "auto";
        newPopup.style.boxShadow = "5px 5px 30px 3px rgba(0,0,0,0.75)";

        document.body.appendChild(newPopup)
    }
}