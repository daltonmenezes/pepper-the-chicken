let canvasCreator = {
    id: 'canvas',
    zIndex: 0,
    contextMode: '2d',
    width: WIDTH,
    height: HEIGHT,

    create: function () {
        canvas = document.createElement("canvas");
        canvas.width = this.width;
        canvas.height = this.height;
        canvas.id = this.id;
        canvas.style.zIndex = this.zIndex;
        context = canvas.getContext(this.contextMode);
        document.body.appendChild(canvas);

        return context;
    }
};
