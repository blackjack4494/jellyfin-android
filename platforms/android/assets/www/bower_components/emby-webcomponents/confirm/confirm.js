define(["layoutManager","dialogText"],function(t,e){function n(t){return new Promise(function(n,o){require(["actionsheet"],function(i){var r=[];r.push({name:e.get("Ok"),id:"ok"}),r.push({name:e.get("Cancel"),id:"cancel"}),i.show({title:t.text,items:r}).then(function(t){switch(t){case"ok":n();break;default:o()}},o)})})}function o(n,o,i,r){var a={removeOnClose:!0},u=!1;t.tv?(a.size="fullscreen",u=!0,a.autoFocus=!0):(a.modal=!1,a.entryAnimationDuration=160,a.exitAnimationDuration=160,a.autoFocus=!1);var c=o.createDialog(a),l="";n.title&&(l+="<h2>"+n.title+"</h2>");var s=n.html||n.text;s&&(l+="<div>"+s+"</div>"),l+='<div class="buttons">',l+='<paper-button class="btnConfirm" autofocus>'+e.get("Ok")+"</paper-button>",l+='<paper-button class="btnCancel">'+e.get("Cancel")+"</paper-button>",l+="</div>",c.innerHTML=l,document.body.appendChild(c);var f=!1;c.querySelector(".btnConfirm").addEventListener("click",function(){f=!0,o.close(c)}),c.querySelector(".btnCancel").addEventListener("click",function(){f=!1,o.close(c)}),o.open(c).then(function(){f?i():r()})}function i(t){return new Promise(function(e,n){require(["dialogHelper","paper-button"],function(i){o(t,i,e,n)})})}return function(e,o){var r;return r="string"==typeof e?{title:o,text:e}:e,t.tv?n(r):i(r)}});