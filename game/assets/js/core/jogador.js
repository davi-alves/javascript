/**
 * Created by PyCharm.
 * User: Silvio Lucena junior
 * Date: 28/08/12
 * Time: 13:35
 * To change this template use File | Settings | File Templates.
 */



Crafty.c("Jogador", {
    hp: {
        atual: 20,
        maximo: 100
    },
    score: 0,
    init: function(){



        this.requires("2D, Canvas, Fourway, Keyboard, Collision, SprNave");
        this.fourway(5);
        this.x = 100;
        this.y = 100;

        this.bind('Moved', function(from) { /*Bind a function which is triggered if player is moved*/
            /*Dont allow to move the player out of Screen*/
            if(this.x+this.w > Crafty.viewport.width ||
                this.x+this.w < this.w ||
                this.y+this.h < this.h ||
                this.y+this.h > Crafty.viewport.height || this.preparing){
                this.attr({
                    x:from.x,
                    y:from.y
                });
            }

        });

        this.bind("KeyUp", function(evento){
            if(evento.keyCode == Crafty.keys.SPACE){
                Crafty.e("Bala").attr({
                    x: this._x+this._w/2-15,
                    y: this._y-this._h/2+15
                });
            }
        });

        this.bind("InimigoMorto", function(pontos){
            this.score += 1;
        });

        this.onHit("BalaInimigo", function(other){
            other[0].obj.destroy();
            this.hp.atual -= 2;

            if (this.hp.atual == 0){
                Crafty.trigger("GameOver");
            }
        });
    }
});