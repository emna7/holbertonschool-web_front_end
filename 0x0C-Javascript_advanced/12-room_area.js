let roomDimensions = {
    width: 50,
    length: 100,
    getsArea() {
        return (this.width * this.length);
    }
};

let boundGetArea = roomDimensions.getsArea.bind(roomDimensions);
console.log(boundGetArea());
