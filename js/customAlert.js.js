
function customAlert() {
    this.render = function(head,dialog){
        var winW = window.innerWidth;
        var dialogOverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogBox');
        var winH = window.innerHeight;
        dialogOverlay.style.display = 'block';
        dialogOverlay.style.height = winH + 'px';
        dialogbox.style.left = (winW/2) - (550 *.5) + 'px';
        dialogbox.style.top = '100px';
        dialogbox.style.display = 'block';
        document.getElementById('dialogBoxHead').innerHTML = head;
        document.getElementById('dialogBoxBody').innerHTML = dialog;
        document.getElementById('dialogBoxFooter').innerHTML = "<button class='button-ok' onclick='Alert.okay()'>Continue</button>";
    };
    this.okay = function(){
        document.getElementById('dialogoverlay').style.display = 'none';
        document.getElementById('dialogBox').style.display = 'none';
    }
}
var Alert = new customAlert();