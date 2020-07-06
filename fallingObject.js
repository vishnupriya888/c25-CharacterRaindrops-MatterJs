class FallingObject{
    constructor(x, y){
        var object_options = {
            timeScale: 0.5
        }

        this.body = Bodies.rectangle(x, y, 10, 100, object_options);
        World.add(world, this.body);
    }

    display(selectedText){
        fill(0, 255, 0);
        for(var x = 0; x < selectedText.length; x++){
            textSize(25);
            text(selectedText.charAt(x), this.body.position.x, this.body.position.y + x*30);
        }
    }
}