eventRanking.storage.setCookie = function(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
};
eventRanking.storage.getCookie = function (cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
};


eventRanking.storage.getJSON      = function () {
  var it1;
  var tmp               = {};
  tmp.eventInfo         = eventRanking.eventsInfo.getData();
  tmp.teams             = [];
  tmp.challengeTypes    = [];
  tmp.challenges        = [];
  tmp.groups            = [];
  tmp.categories        = [];
  tmp.formulae          = [];
  tmp.scores            = [];
  for (it1 in eventRanking.formulae      ) {if(eventRanking.formulae[it1]       != null && eventRanking.formulae[it1]       != undefined) if(eventRanking.formulae[it1].eventId       == eventRanking.actualEventId) tmp.formulae[it1]       = eventRanking.formulae[it1].getData();}
  for (it1 in eventRanking.challengeTypes) {if(eventRanking.challengeTypes[it1] != null && eventRanking.challengeTypes[it1] != undefined) if(eventRanking.challengeTypes[it1].eventId == eventRanking.actualEventId) tmp.challengeTypes[it1] = eventRanking.challengeTypes[it1].getData();}
  for (it1 in eventRanking.challenges    ) {if(eventRanking.challenges[it1]     != null && eventRanking.challenges[it1]     != undefined) if(eventRanking.challenges[it1].eventId     == eventRanking.actualEventId) tmp.challenges[it1]     = eventRanking.challenges[it1].getData();}
  for (it1 in eventRanking.categories    ) {if(eventRanking.categories[it1]     != null && eventRanking.categories[it1]     != undefined) if(eventRanking.categories[it1].eventId     == eventRanking.actualEventId) tmp.categories[it1]     = eventRanking.categories[it1].getData();}
  for (it1 in eventRanking.groups        ) {if(eventRanking.groups[it1]         != null && eventRanking.groups[it1]         != undefined) if(eventRanking.groups[it1].eventId         == eventRanking.actualEventId) tmp.groups[it1]         = eventRanking.groups[it1].getData();}
  for (it1 in eventRanking.teams         ) {if(eventRanking.teams[it1]          != null && eventRanking.teams[it1]          != undefined) if(eventRanking.teams[it1].eventId          == eventRanking.actualEventId) tmp.teams[it1]          = eventRanking.teams[it1].getData();}
  for (it1 in eventRanking.scores        ) {if(eventRanking.scores[it1]         != null && eventRanking.scores[it1]         != undefined) if(eventRanking.scores[it1].eventId         == eventRanking.actualEventId) tmp.scores[it1]         = eventRanking.scores[it1].getData();}
  
  return JSON.stringify(tmp);
};
eventRanking.storage.loadJSON         = function(JSONstring) {
  var it1;
  var tmp = JSON.parse(JSONstring);
  eventRanking.setEventInfo(tmp.eventInfo.id, tmp.eventInfo.name,tmp.eventInfo.date, tmp.eventInfo.location,tmp.eventInfo.description);
  eventRanking.teams            = [];
  eventRanking.challengeTypes   = [];
  eventRanking.challenges       = [];
  eventRanking.groups           = [];
  eventRanking.categories       = [];
  eventRanking.formulae         = [];
  eventRanking.scores           = [];
  for (it1 in tmp.formulae)       {if(tmp.formulae[it1]       != null && tmp.formulae[it1]       != undefined) eventRanking.addFormula       (tmp.formulae[it1].id,       tmp.formulae[it1].pos,        tmp.formulae[it1].name,          tmp.formulae[it1].formula,           tmp.formulae[it1].format);}
  for (it1 in tmp.challengeTypes) {if(tmp.challengeTypes[it1] != null && tmp.challengeTypes[it1] != undefined) eventRanking.addChallengeType (tmp.challengeTypes[it1].id, tmp.challengeTypes[it1].pos,  tmp.challengeTypes[it1].name,    tmp.challengeTypes[it1].description, tmp.challengeTypes[it1].ptMax, tmp.challengeTypes[it1].color);}
  for (it1 in tmp.challenges)     {if(tmp.challenges[it1]     != null && tmp.challenges[it1]     != undefined) eventRanking.addChallenge     (tmp.challenges[it1].id,     tmp.challenges[it1].pos,      tmp.challenges[it1].name,        tmp.challenges[it1].ptMax,           tmp.challenges[it1].typeId,    tmp.challenges[it1].formulaId);}
  for (it1 in tmp.categories)     {if(tmp.categories[it1]     != null && tmp.categories[it1]     != undefined) eventRanking.addCategory      (tmp.categories[it1].id,     tmp.categories[it1].pos,      tmp.categories[it1].name,        tmp.categories[it1].color);}
  for (it1 in tmp.groups)         {if(tmp.groups[it1]         != null && tmp.groups[it1]         != undefined) eventRanking.addGroup         (tmp.groups[it1].id,         tmp.groups[it1].pos,          tmp.groups[it1].name,            tmp.groups[it1].number,              tmp.groups[it1].category,      tmp.groups[it1].description);}
  for (it1 in tmp.teams)          {if(tmp.teams[it1]          != null && tmp.teams[it1]          != undefined) eventRanking.addTeam          (tmp.teams[it1].id,          tmp.teams[it1].pos,           tmp.teams[it1].name,             tmp.teams[it1].group,                tmp.teams[it1].playersNb);}
  for (it1 in tmp.scores)         {if(tmp.scores[it1]         != null && tmp.scores[it1]         != undefined) eventRanking.addScore         (tmp.scores[it1].id,         tmp.scores[it1].teamId,       tmp.scores[it1].challengeId,     tmp.scores[it1].value,               tmp.scores[it1].type);}
};

eventRanking.storage.setInHistory = function () {
  eventRanking.storage.setCookie('backup', eventRanking.storage.getJSON(), 7);
  eventRanking.storage.history.unshift(eventRanking.storage.getJSON());
//   eventRanking.storage.history.splice(eventRanking.storage.maxHistoryElem, 10);
  eventRanking.repairScores();
};


eventRanking.storage.newEvent = function () {
  var tmp = {eventInfo:{id:0, name:"Mafeking", date:"Aujourd'hui", location:"Au local", description:"Ce sera SUPER !"}};
  eventRanking.storage.loadJSON(JSON.stringify(tmp));
  eventRanking.storage.setInHistory();
  eventRanking.graphics.refresh();
  dialogBoxes.open('newTableConfirm', document.createTextNode('Nouveau classement généré... Toutes les données ont été nettoyées'), 'Nouveau classement');
};
eventRanking.storage.openEvent = function (e) {
  var ev     = e || window.event;
  if (ev.preventDefault) ev.preventDefault();
  ev.returnValue = false;
  var target = ev.target || ev.srcElement;
  var f      = target.elements.namedItem('loadFile').files[0];  //Retrieve the first (and only!) File from the FileList object
  if (f) {
    var r = new FileReader();
    r.readAsText(f);
    r.onload = function(e) {
      eventRanking.storage.loadJSON(e.target.result);
      eventRanking.storage.setInHistory();
      eventRanking.graphics.refresh(); 
      dialogBoxes.open('newTableConfirm', document.createTextNode('Fichier de classement chargé.'), 'Chargement réussi');

    };
  }
  else { 
    dialogBoxes.open("ErrorMsg", document.createTextNode("Error : Failed to load file."), "Erreur");
  }
};
eventRanking.storage.saveEvent = function () {
//   var url = 'data:text/json;charset=utf8,' + encodeURIComponent(eventRanking.storage.getJSON());
//   window.open(url, '_blank');
//   window.focus();
  var blob = new Blob([eventRanking.storage.getJSON()], {type: "application/json;charset=utf-8"});
  saveAs(blob, "classementMafeking.json");
};


eventRanking.storage.undo = function () {
  if(eventRanking.storage.history.length > 1) {
    if(eventRanking.storage.history[1] != undefined) {
      eventRanking.storage.history.shift();
      eventRanking.storage.loadJSON(eventRanking.storage.history[0]);
      eventRanking.storage.setCookie('backup', eventRanking.storage.getJSON(), 7);
      eventRanking.graphics.refresh();
    }
    else {
      dialogBoxes.open('UndoError', document.createTextNode("Vous êtes au bout de l'historique..."), "Erreur");
    }
  }
  else {
    dialogBoxes.open('UndoError', document.createTextNode("Vous êtes au bout de l'historique..."), "Erreur");
  }
};
eventRanking.storage.restore = function () {
  var backup_value = eventRanking.storage.getCookie('backup');
  if(backup_value != "") {
    eventRanking.storage.loadJSON(backup_value);
    eventRanking.storage.setInHistory();
    eventRanking.graphics.refresh();
  }
  else {
    eventRanking.storage.newEvent();
    dialogBoxes.open('RestoreError', document.createTextNode('Error : No values stored in cookie'), "Erreur");
  }
};


eventRanking.storage.openForm = function () {
  var fOpen = document.createElement('form');
  var iFile = document.createElement('input');
  var iSave = document.createElement('input');
  
  iFile.type   = 'file';
  iFile.name   = 'loadFile';
//   iFile.accept = "application/json|application/x-javascript|text/javascript|text/x-javascript|text/x-json";
  iFile.accept = ".json";
  
  iSave.type   = "submit";
  iSave.value  = "Ouvrir";
  
  fOpen.appendChild(document.createTextNode('Fichier de points : '));
  fOpen.appendChild(iFile);
  fOpen.appendChild(document.createElement('br'));
  fOpen.appendChild(iSave);
  
  fOpen.onsubmit = eventRanking.storage.openEvent;
  
  return fOpen;
};