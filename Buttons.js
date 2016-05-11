pc.script.attribute("html", "asset");

pc.script.create('Buttons', function (app) {
    // Creates a new Buttons instance
    var Buttons = function (entity) {
        this.entity = entity;
    };
    
    var asset = app.assets.find('play.png');
    
    Buttons.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            var self = this;

            this.createButton("Sound's on",1100,50,function (e) {
                self.entity.sound.play('song');
                self.entity.sound.play('pill');
            });

            this.createButton("Sound's off",1100,100, function (e) {
                self.entity.sound.stop('song');
                self.entity.sound.stop('pill');
            });

        },

        createButton: function (name, x, y, onClick) {
            var button = document.createElement("button");
            button.textContent = name;
            
            function changeImage(){
                document.images[jsbutton].src= "pause.png";
                return true;
            }
            function changeImageBack(){
                 document.images[jsbutton].src = "play.png";
                 return true;
            }
            
            button.style.position = "absolute";
            button.style.left = x + "px";
            button.style.top = y + "px";
            button.style.width = "75px";
            button.style.height = "40px";

            button.addEventListener("click", onClick, true);
            document.body.appendChild(button);    
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            if (dt === 0) 
                return;
        }
    };

    return Buttons;
});