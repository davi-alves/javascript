/**
 * Created by PyCharm.
 * User: Silvio Lucena Junior
 * Date: 29/08/12
 * Time: 10:17
 * To change this template use File | Settings | File Templates.
 */

Crafty.c("Bala", {
    init: function(){
        this.addComponent("2D", "Canvas", "Collision", "SprBala");
        this.bind("EnterFrame", function(){
            if(this.x > Crafty.viewport.width+this.w ||
                this.x < -this.w ||
                this.y < -this.h ||
                this.y > Crafty.viewport.height+this.h){
                this.destroy();
                
            }
            this.y -= 6;
        });
    }
});



//Armas Inimigos

Crafty.c("BalaInimigo", {
    init: function(){
        this.addComponent("2D", "Canvas", "Collision", "SprBala");
        this.bind("EnterFrame", function(){
            if(this.x > Crafty.viewport.width+this.w ||
                this.x < -this.w ||
                this.y < -this.h ||
                this.y > Crafty.viewport.height+this.h){
                this.destroy();

            }
            this.y += 8;
        });
    }
});