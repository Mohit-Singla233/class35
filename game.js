class Game{
    counstructor(){

    }

    getState(){
        db.ref("gameState").on("value", function (data){
            gs = data.val();
        })
    }

    updateState(state){
        db.ref("/").update({gameState : state})
    }

    start(){
        if(gs === 0){
            player = new Player()
            form = new Form()
            player.getCount()
            form.display()
        }
    }

    play(){

    }
}