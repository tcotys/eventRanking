// -------------------------------------------------------------------------------------- //
//                                                                                        //
//                  Ensemble de fonction ayant trait au rendu graphique.                  //
//               Ces fonction générales n'ont pas spécialement à être placé               //
//                       au sein de la classe des project de cablage                      //
//                                                                                        //
// -------------------------------------------------------------------------------------- //

var dialogBoxes = new function () {
  this.list = [];
};

// ------------------------------------------------ //
// ---------- Quelques fonctions de base ---------- //
// ------------------------------------------------ //
dialogBoxes.findPos = function (el){
 var x = 0, y = 0;
 if(el.offsetParent) {
   x = el.offsetLeft;
   y = el.offsetTop;
   while(el = el.offsetParent)   {
     x += el.offsetLeft;
     y += el.offsetTop;
    }
  }
  return {'x':x, 'y':y};
}
     
dialogBoxes.getMousePos = function (e){
  var posx = 0;
  var posy = 0;
  if (!e) var e = window.event;
  if (e.pageX || e.pageY)  {
    posx = e.pageX;
    posy = e.pageY;
  }
  else if (e.clientX || e.clientY) {
    posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    posy = e.clientY + document.body.scrollTop  + document.documentElement.scrollTop;
  }
  return {'x':posx, 'y':posy};
}
  
dialogBoxes.addEvent = function (element, event, func){
  if (element.addEventListener) {
    element.addEventListener(event, func, false);
  }
  else {
   element.attachEvent('on' + event, func);
  }
}

dialogBoxes.removeEvent = function (element, event, func) {
  if (element.removeEventListener) {
    element.removeEventListener(event, func, false);
  }
  else {
   element.detachEvent('on' + event, func);
  }
}

//     http://stackoverflow.com/questions/4976936/get-the-available-browser-window-size-clientheight-clientwidth-consistently-ac
dialogBoxes.getWindowSize = (function() {
  var docEl = document.documentElement,
      IS_BODY_ACTING_ROOT = docEl && docEl.clientHeight === 0;

  // Used to feature test Opera returning wrong values 
  // for documentElement.clientHeight. 
  function isDocumentElementHeightOff () { 
      var d = document,
          div = d.createElement('div');
      div.style.height = "2500px";
      d.body.insertBefore(div, d.body.firstChild);
      var r = d.documentElement.clientHeight > 2400;
      d.body.removeChild(div);
      return r;
  }

  if (typeof document.clientWidth == "number") {
     return function () {
       return { width: document.clientWidth, height: document.clientHeight };
     };
  } else if (IS_BODY_ACTING_ROOT || isDocumentElementHeightOff()) {
      var b = document.body;
      return function () {
        return { width: b.clientWidth, height: b.clientHeight };
      };
  } else {
      return function () {
        return { width: docEl.clientWidth, height: docEl.clientHeight };
      };
  }
})();

// ------------------------------------------------ //
// ---------- Boite de dialogue standard ---------- //
// ------------------------------------------------ //

// ----- fermeture de la boite de dialogue...
dialogBoxes.close = function(dialog_box_id, destructionFunction)
{
  var old_dialog_box = document.getElementById(dialog_box_id);
  if (old_dialog_box)
  {
    old_dialog_box.parentNode.removeChild(old_dialog_box);
  }
  if(destructionFunction)
  {
    destructionFunction();
  }
}

// ----- Ouverture de la boirte de dialogue
dialogBoxes.open = function(dialog_box_id, insideDOMelem, windowTitle,destructionFunction)
{
  var old_dialog_box = document.getElementById(dialog_box_id);
  if (old_dialog_box)
  {
    old_dialog_box.parentNode.removeChild(old_dialog_box);
  }
  var closeButtonBase64  = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAkCAYAAADl9UilAAAAGXRFWHRTb2Z0d2FyZQBBZG9i";
      closeButtonBase64 += "ZSBJbWFnZVJlYWR5ccllPAAABG1JREFUeNrMWE1IW1sQniQ3SdPn04pWC/K6URRa/1o3LgS3ivi3ELoTKerC/z9QREErgv";
      closeButtonBase64 += "iDgq7EP6zg0k0tFldirbzFK+WtRHChvoUPNcXE1sT8dOb03HBM7r1JaG7bgY/c5EzmfHdmzpwzxwB3xRAGsRB/GASIiISM";
      closeButtonBase64 += "CBOHWXiOFTmRgJfjVnj2yeOSQIwI0HcL4h6Hlf9m4qRjIT5OwoNwI24QX/mzh48xYrKn6NmG+APxJ8d9gVwsiREBF+ILws";
      closeButtonBase64 += "FxzQkGQmrkkz9A/IXIr6ioeHFwcPDe6XRe+nUSh8NhpzloLpqTz/2Ac2FOMHEvPUI8bWxsrLu5uXH6f5LQXM3NzS9pbs6B";
      closeButtonBase64 += "uJgMPMkpZImI1MPDw+mMjIzC3d1dWFpagouLC9BDkpKSoK6uDoqKiuDo6Ojv9PT0Vvz5DGGnEMvEKJ+SEWkul+uNxWKx1d";
      closeButtonBase64 += "bWgt1uBz0lISEBVldX4fb21oVzluJP/yHOKeckoUTQs5VI0Z8uzs9Bb7FfXrJPs9ls5bkllyijJNQnmRwTr8+naVSSJPB4";
      closeButtonBase64 += "PLHkKTuJ8RHrmFEsCV6vV9VCfX09ZGVlQX9/P2DoVfU6OzvZ+NzcXCTEjAIxkIJ2AAhHrKWlBaqqqtjzyMgI9PX1KZLr7u";
      closeButtonBase64 += "6GkpKS78YNBpiZmYnUcwbQKppELBjt7e0BUiR5eXkwNjbGwirqtba2QmlpaUAPaxX7r5JNLfcpE8P8EfH0yRMoKysL0cvJ";
      closeButtonBase64 += "yYHx8XGQTCam19TUBJWVlSF65eXl8PzZsxC7URPz4NuI+OfjRxgaGgKfwqLIzc2FyakpaEOv1NTUKNqbnp6GD/v7IXa1Vo";
      closeButtonBase64 += "Kqx4Ll7eYmuDGfhl+9oiV+Z4zCSlCSqclJWF9fj3qJqnpMSbbevQOH0wmTOJnVag07wRR68vXaWtS1Qz2U6DE17OzssFzS";
      closeButtonBase64 += "KhUkExMTsLy8rGkrpsQIe3t7sImhVZOzszPY2NgIayf6VamwtEWQx6qrq1UNp6amwuLiItsPtezE1GN4TGHEwklmZibMz8";
      closeButtonBase64 += "+DzWbTP5RUPKn6RyrZ2dksz9TIxSSUVL3b2toU9Xt6emBgYEBxLD8/n4WVSkykoZS0PCZKWloaNDQ0KOr29vayc5X8QqOj";
      closeButtonBase64 += "oyE6BQUFUFhYCNvb2z9WLoLf7Pj4mFX1q6urO3qDg4OwsLAQ0KOc6urqCrFH3t7a2oo6+f2RhHIftxSR3PDwMMzOzobo0Z";
      closeButtonBase64 += "G8o6MjYIvycg2LbISr0i+G0s/bKl+4Yw+Row25uLhY8yhDOUUFOD4+HlZWViJt6+SGl519aF+JRzxEPMbG5S0NxMXFwc8Q";
      closeButtonBase64 += "bBHlMxudk04Q/yOupKDO2OV2u7/SuT8xMRHOdT73Jycns09qRngDLF8X+OQc8/IW/cvp6em/8uabkpLCjjl6gGzTHCQnJy";
      closeButtonBase64 += "efeFfu5lwgpOGl5vN3aHhVrwiw8f1wfX39WS9CZJvmEK4IHotXBGLrZv5NLlVYnhmEeiZeQ9n4NZTlF11D+dQu7iSBkN4X";
      closeButtonBase64 += "dx6RkDxuiOCq06jWe/4AORBJKF11fhNgAIJW92K2HFLLAAAAAElFTkSuQmCC";
      
  var eSection   = document.createElement('section');
  var eh1        = document.createElement('h1');
  var eImg       = document.createElement('img');
  var eArticle   = document.createElement('article');
  
  eSection.id                          = dialog_box_id;
  eSection.style.display               = "block";
  eSection.style.border                = "1px solid black";
  eSection.style.borderRadius          = "5px";
  eSection.style.padding               = "0px";
  eSection.style.paddingTop            = "0px";
  eSection.style.backgroundColor       = "white";
  eSection.style.zIndex                = "10";
  eSection.style.position              = "absolute";
  eSection.style.margin                = "0px";
  
  eh1.style.position        = "relative";
  eh1.style.fontSize        = "15px";
  eh1.style.margin          = "0px";
  eh1.style.padding         = "0px 20px";
  eh1.style.height          = "20px";
  eh1.style.width           = "auto";
  eh1.style.backgroundColor = "#39637F";
  eh1.style.cursor          = "move";
  eh1.style.borderBottom    = "2px solid black";
  eh1.id                    = dialog_box_id+"Move";
  
  eImg.id                 = dialog_box_id+"Close"
  eImg.src                = closeButtonBase64;
  eImg.height             = 20;
  eImg.style.cursor       = "pointer";
  eImg.style.position     = "absolute";
  eImg.style.right        = "10px";
  eImg.style.display      = "inline-block";
  eImg.onclick            = function(){dialogBoxes.close(dialog_box_id, destructionFunction);}
  
  eArticle.style.margin           = "10px";
  eArticle.appendChild(insideDOMelem);
      
  if(windowTitle != undefined) eh1.appendChild(document.createTextNode(windowTitle));
  eh1.appendChild(eImg);
  eSection.appendChild(eh1);
  eSection.appendChild(eArticle);
  document.body.appendChild(eSection);
  
  if(typeof dialogBoxes.list[dialog_box_id] === 'undefined')
  {
    var dialog_box_top                   = Math.max(window.pageYOffset, Math.round(window.pageYOffset + (dialogBoxes.getWindowSize().height-eSection.offsetHeight)/2));
    var dialog_box_left                  = Math.max(window.pageXOffset, Math.round(window.pageXOffset + (dialogBoxes.getWindowSize().width -eSection.offsetWidth )/2));
    dialogBoxes.list[dialog_box_id]      = new dialogBoxes.boxElem();
    dialogBoxes.list[dialog_box_id].top  = dialog_box_top;
    dialogBoxes.list[dialog_box_id].left = dialog_box_left;
  }
  eSection.style.top                     = dialogBoxes.list[dialog_box_id].top +"px";
  eSection.style.left                    = dialogBoxes.list[dialog_box_id].left+"px";
  dialogBoxes.addEvent(document.getElementById(dialog_box_id+"Move"), "mousedown", dialogBoxes.moveEventInit);
  dialogBoxes.addEvent(document, "mousemove", dialogBoxes.moveEvent);
}

// ----- Génération d'un bouton "MOVE" ----- //
dialogBoxes.boxElem = function ()
{
  this.clicked     = false;
  this.internal_dx = 0;
  this.internal_dy = 0;
  this.top         = 0;
  this.left        = 0;
  
  this.setDxDy     = function(newDx, newDy)
  {
    this.internal_dx = newDx;
    this.internal_dy = newDy;
  }
}

dialogBoxes.moveEventInit =  function(e)
{
  var ev = e || window.event;
  if (ev.preventDefault) ev.preventDefault();
  ev.returnValue = false;
  
  var target           = ev.target || ev.srcElement;
  
  if (target.id.substring(target.id.length-5,target.id.length) != "Close")
  {
    var dialogBoxMove_id = target.id; //attention ce n'est pas un objet string ...
    var dialogBox_id     = dialogBoxMove_id.substring(0,dialogBoxMove_id.length-4);
    var dialogBox        = document.getElementById(dialogBox_id);

    var dialogBox_pos    = dialogBoxes.findPos(dialogBox);
    var mouse_pos        = dialogBoxes.getMousePos(ev);
    var internal_dx      = mouse_pos.x-dialogBox_pos.x;
    var internal_dy      = mouse_pos.y-dialogBox_pos.y;

    dialogBoxes.list[dialogBox_id].clicked     = true;
    dialogBoxes.list[dialogBox_id].internal_dx = internal_dx;
    dialogBoxes.list[dialogBox_id].internal_dy = internal_dy;

    return false;
  }
}

dialogBoxes.moveEvent = function (e)
{
  var ev = e || window.event;
  if (ev.preventDefault) {
    ev.preventDefault();}
  ev.returnValue = false;
  
  var dialogBox_id;
  var mouse_pos        = dialogBoxes.getMousePos(ev);
  var graphic_pos      = dialogBoxes.findPos(document.body);
  for(dialogBox_id in dialogBoxes.list)
  {
    if(dialogBoxes.list[dialogBox_id].clicked)
    {
      dialogBoxes.list[dialogBox_id].top  = (mouse_pos.y - graphic_pos.y - dialogBoxes.list[dialogBox_id].internal_dy);
      dialogBoxes.list[dialogBox_id].left = (mouse_pos.x - graphic_pos.x - dialogBoxes.list[dialogBox_id].internal_dx);
      var dialogBoxElem                   = document.getElementById(dialogBox_id);
      dialogBoxElem.style.top             = (mouse_pos.y - graphic_pos.y - dialogBoxes.list[dialogBox_id].internal_dy)+"px";
      dialogBoxElem.style.left            = (mouse_pos.x - graphic_pos.x - dialogBoxes.list[dialogBox_id].internal_dx)+"px";
    }
  }
  return false;
}

dialogBoxes.moveEventEnd = function (e)
{
  var dialogBox_id;
  for(dialogBox_id in dialogBoxes.list)
  {
    dialogBoxes.list[dialogBox_id].clicked = false;
  }
  return false;
}

dialogBoxes.addEvent(document, "mouseup", dialogBoxes.moveEventEnd);