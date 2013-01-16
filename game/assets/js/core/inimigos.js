/**
 * Created by PyCharm.
 * User: silversurfer
 * Date: 29/08/12
 * Time: 16:06
 * To change this template use File | Settings | File Templates.
 */

Crafty.c("Inimigo", {
    hp: {
        atual: 100,
        maximo: 100
    },
    init: function(){



        this.requires("2D, Canvas, Collision, SprInimigo");
        this.x = parseInt(Math.random() * 480);
        this.y = 0;

        this.bind("EnterFrame", function(){
            this.y += 1;
        });

        this.bind("EnterFrame", function(frame){
            if(this.x > Crafty.viewport.width + this.w ||
                this.x < -this.w ||
                this.y < -this.h ||
                this.y > Crafty.viewport.height +this.h){
                this.destroy();
            }

            if (frame.frame % 60 == 0){
                Crafty.e("BalaInimigo").attr({
                    x: this._x+this._w/2-18,
                    y: this._y+this._h-18

                });
            }
        });

        this.onHit("Bala", function(other){
            this.destroy();
            var jogador = Crafty("Jogador")[0];
            Crafty.trigger("InimigoMorto", 1);
           
            other[0].obj.destroy();
        });



        
    }
});