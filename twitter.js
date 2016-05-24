pc.script.create('Button', function (app) {
    // Creates a new Buttons instance
    var Button = function (entity) {
        this.entity = entity;
    };
    
    
    Button.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            var self = this;

            this.createButton("Share",200,50,function (e) {
                 var left = (screen.width / 2) - (640 / 2);
                var top = (screen.height / 2) - (380 / 2);

                var shareText = encodeURIComponent("Jucand FaceMaze am fost inghitit de jucatorul X");
                var shareUrl = "https://twitter.com/intent/tweet?text=" + shareText;

                var popup = window.open(shareUrl, 'name', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + 640 + ', height=' + 380 +', top=' + top + ', left=' + left);
                if (window.focus && popup)
                    popup.focus();
            });

        },

        createButton: function (name, x, y, onClick) {
            var button = document.createElement("button");
            button.textContent = name;
            button.style.color = 'white';
            button.style.backgroundColor = "blue";
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

    return Button;
});