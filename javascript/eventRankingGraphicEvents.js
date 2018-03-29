eventRanking.graphics.setEventInfoEvent = function (e) {
  var ev     = e || window.event;
  if (ev.preventDefault) ev.preventDefault();
  ev.returnValue = false;
  var target = ev.target || ev.srcElement;
  var id             = target.elements.namedItem("id").value;
  var name           = target.elements.namedItem("name").value;
  var date           = target.elements.namedItem("date").value;
  var location       = target.elements.namedItem("location").value;
  var description    = target.elements.namedItem("description").value;
  eventRanking.setEventInfo(id, name, date, description, location);
  eventRanking.graphics.refresh();
  eventRanking.storage.setInHistory();
};


eventRanking.graphics.moveUpFormula           = function (e) {
  var ev     = e || window.event;
  var target = ev.target || ev.srcElement;
  eventRanking.formulae[target.dataset.id].moveUp();
  eventRanking.graphics.refresh();
  eventRanking.storage.setInHistory();
};
eventRanking.graphics.moveDownFormula           = function (e) {
  var ev     = e || window.event;
  var target = ev.target || ev.srcElement;
  eventRanking.formulae[target.dataset.id].moveDown();
  eventRanking.graphics.refresh();
  eventRanking.storage.setInHistory();
};
eventRanking.graphics.setFormulaEvent = function (e) {
  var ev        = e || window.event;
  if (ev.preventDefault) ev.preventDefault();
  ev.returnValue = false;
  if (ev.preventDefault) ev.preventDefault();
  ev.returnValue = false;
  var target    = ev.target || ev.srcElement;
  var id        = target.elements.namedItem("id").value;
  var pos       = target.elements.namedItem("pos").value;
  var name      = target.elements.namedItem("name").value;
  var formula   = target.elements.namedItem("formula").value;  
  var format    = target.elements.namedItem("format").value;
  
  eventRanking.setScoresToFormulaFormat(id, format);
  
  eventRanking.addFormula(id, pos, name, formula, format);
  eventRanking.graphics.refresh();
  eventRanking.storage.setInHistory();
};
eventRanking.graphics.deleteFormulaEvent  = function (e) {
  var ev     = e || window.event;
  if (ev.preventDefault) ev.preventDefault();
  ev.returnValue = false;
  var target = ev.target || ev.srcElement;
  eventRanking.formulae[target.dataset.id].delete();
  eventRanking.storage.setInHistory();
  eventRanking.graphics.refresh();
};
eventRanking.graphics.openEditFormula = function(e) {
  var ev     = e || window.event;
  var target = ev.target || ev.srcElement;
  dialogBoxes.open('editFormula'+target.dataset.id, eventRanking.formulae[target.dataset.id].getFormElem(), "Edition de : "+eventRanking.formulae[target.dataset.id].name);
};


eventRanking.graphics.moveUpChallengeType           = function (e) {
  var ev = e || window.event;
  var target = ev.target || ev.srcElement;
  eventRanking.challengeTypes[target.dataset.id].moveUp();
  eventRanking.storage.setInHistory();
  eventRanking.graphics.refresh();
};
eventRanking.graphics.moveDownChallengeType           = function (e) {
  var ev = e || window.event;
  var target = ev.target || ev.srcElement;
  eventRanking.challengeTypes[target.dataset.id].moveDown();
  eventRanking.storage.setInHistory();
  eventRanking.graphics.refresh();
};
eventRanking.graphics.setChallengeTypeEvent = function (e) {
  var ev     = e || window.event;
  if (ev.preventDefault) ev.preventDefault();
  ev.returnValue = false;
  var target = ev.target || ev.srcElement;
  var id             = target.elements.namedItem("id").value;
  var pos            = target.elements.namedItem("pos").value;
  var name           = target.elements.namedItem("name").value;
  var description    = target.elements.namedItem("description").value;
  var ptMax          = target.elements.namedItem("ptMax").value;
  var color          = target.elements.namedItem("color").value;  
  eventRanking.addChallengeType(id, pos, name, description, ptMax, color);
  eventRanking.storage.setInHistory();
  eventRanking.graphics.refresh();
};
eventRanking.graphics.deleteChallengeTypeEvent  = function (e) {
  var ev = e || window.event;
  if (ev.preventDefault) ev.preventDefault();
  ev.returnValue = false;
  var target = ev.target || ev.srcElement;
  eventRanking.challengeTypes[target.dataset.id].delete();
  eventRanking.graphics.refresh();
  eventRanking.storage.setInHistory();
};
eventRanking.graphics.openEditChallengeType = function(e) {
  var ev = e || window.event;
  var target = ev.target || ev.srcElement;
  dialogBoxes.open('editChallengeType'+target.dataset.id, eventRanking.challengeTypes[target.dataset.id].getFormElem(), "Edition de : "+eventRanking.challengeTypes[target.dataset.id].name);
};


eventRanking.graphics.moveUpChallenge           = function (e) {
  var ev     = e || window.event;
  var target = ev.target || ev.srcElement;
  eventRanking.challenges[target.dataset.id].moveUp();
  eventRanking.graphics.refresh();
  eventRanking.storage.setInHistory();
};
eventRanking.graphics.moveDownChallenge           = function (e) {
  var ev     = e || window.event;
  var target = ev.target || ev.srcElement;
  eventRanking.challenges[target.dataset.id].moveDown();
  eventRanking.storage.setInHistory();
  eventRanking.graphics.refresh();
};
eventRanking.graphics.setChallengeEvent = function (e) {
  var ev        = e || window.event;
  if (ev.preventDefault) ev.preventDefault();
  ev.returnValue = false;
  var target    = ev.target || ev.srcElement;
  var id        = target.elements.namedItem("id").value;
  var pos       = target.elements.namedItem("pos").value;
  var name      = target.elements.namedItem("name").value;
  var ptMax     = target.elements.namedItem("ptMax").value;  
  var typeId    = target.elements.namedItem("typeId").value;  
  var formulaId = target.elements.namedItem("formulaId").value;
  eventRanking.setScoresToChallengeFormula(id, formulaId)
  eventRanking.addChallenge(id, pos, name, ptMax, typeId, formulaId);
  eventRanking.storage.setInHistory();
  eventRanking.graphics.refresh();
};
eventRanking.graphics.deleteChallengeEvent  = function (e) {
  var ev     = e || window.event;
  if (ev.preventDefault) ev.preventDefault();
  ev.returnValue = false;
  var target = ev.target || ev.srcElement;
  eventRanking.challenges[target.dataset.id].delete();
  eventRanking.storage.setInHistory();
  eventRanking.graphics.refresh();
};
eventRanking.graphics.openEditChallenge = function(e) {
  var ev     = e || window.event;
  var target = ev.target || ev.srcElement;
  dialogBoxes.open('editChallenge'+target.dataset.id, eventRanking.challenges[target.dataset.id].getFormElem(), "Edition de : "+eventRanking.challenges[target.dataset.id].name);
};



eventRanking.graphics.moveUpCategory           = function (e) {
  var ev     = e || window.event;
  var target = ev.target || ev.srcElement;
  eventRanking.categories[target.dataset.id].moveUp();
  eventRanking.storage.setInHistory();
  eventRanking.graphics.refresh();
};
eventRanking.graphics.moveDownCategory           = function (e) {
  var ev     = e || window.event;
  var target = ev.target || ev.srcElement;
  eventRanking.categories[target.dataset.id].moveDown();
  eventRanking.storage.setInHistory();
  eventRanking.graphics.refresh();
};
eventRanking.graphics.setCategoryEvent = function (e) {
  var ev        = e || window.event;
  if (ev.preventDefault) ev.preventDefault();
  ev.returnValue = false;
  var target    = ev.target || ev.srcElement;
  var id             = target.elements.namedItem("id").value;
  var pos            = target.elements.namedItem("pos").value;
  var name           = target.elements.namedItem("name").value;
  var color          = target.elements.namedItem("color").value;  
  eventRanking.addCategory(id, pos, name, color);
  eventRanking.storage.setInHistory();
  eventRanking.graphics.refresh();
};
eventRanking.graphics.deleteCategoryEvent  = function (e) {
  var ev     = e || window.event;
  if (ev.preventDefault) ev.preventDefault();
  ev.returnValue = false;
  var target = ev.target || ev.srcElement;
  eventRanking.categories[target.dataset.id].delete();
  eventRanking.storage.setInHistory();
  eventRanking.graphics.refresh();
};
eventRanking.graphics.openEditCategory = function(e) {
  var ev     = e || window.event;
  var target = ev.target || ev.srcElement;
  dialogBoxes.open('editCategory'+target.dataset.id, eventRanking.categories[target.dataset.id].getFormElem(), "Edition de : "+eventRanking.categories[target.dataset.id].name);
};


eventRanking.graphics.moveUpGroup           = function (e) {
  var ev     = e || window.event;
  var target = ev.target || ev.srcElement;
  eventRanking.groups[target.dataset.id].moveUp();
  eventRanking.storage.setInHistory();
  eventRanking.graphics.refresh();
};
eventRanking.graphics.moveDownGroup           = function (e) {
  var ev     = e || window.event;
  var target = ev.target || ev.srcElement;
  eventRanking.groups[target.dataset.id].moveDown();
  eventRanking.storage.setInHistory();
  eventRanking.graphics.refresh();
};
eventRanking.graphics.setGroupEvent = function (e) {
  var ev        = e || window.event;
  if (ev.preventDefault) ev.preventDefault();
  ev.returnValue = false;
  var target    = ev.target || ev.srcElement;
  var id             = target.elements.namedItem("id").value;
  var pos            = target.elements.namedItem("pos").value;
  var name           = target.elements.namedItem("name").value;
  var number         = target.elements.namedItem("number").value;  
  var category       = target.elements.namedItem("category").value;  
  var description    = target.elements.namedItem("description").value;  
  eventRanking.addGroup(id, pos, name, number, category, description);
  eventRanking.storage.setInHistory();
  eventRanking.graphics.refresh();
};
eventRanking.graphics.deleteGroupEvent  = function (e) {
  var ev     = e || window.event;
  if (ev.preventDefault) ev.preventDefault();
  ev.returnValue = false;
  var target = ev.target || ev.srcElement;
  eventRanking.groups[target.dataset.id].delete();
  eventRanking.storage.setInHistory();
  eventRanking.graphics.refresh();
};
eventRanking.graphics.openEditGroup = function(e) {
  var ev     = e || window.event;
  var target = ev.target || ev.srcElement;
  dialogBoxes.open('editGroup'+target.dataset.id, eventRanking.groups[target.dataset.id].getFormElem(), "Edition de : "+eventRanking.groups[target.dataset.id].name);
};



eventRanking.graphics.moveUpTeam           = function (e) {
  var ev     = e || window.event;
  var target = ev.target || ev.srcElement;
  eventRanking.teams[target.dataset.id].moveUp();
  eventRanking.storage.setInHistory();
  eventRanking.graphics.refresh();
};
eventRanking.graphics.moveDownTeam           = function (e) {
  var ev     = e || window.event;
  var target = ev.target || ev.srcElement;
  eventRanking.teams[target.dataset.id].moveDown();
  eventRanking.storage.setInHistory();
  eventRanking.graphics.refresh();
};
eventRanking.graphics.setTeamEvent = function (e) {
  var ev        = e || window.event;
  if (ev.preventDefault) ev.preventDefault();
  ev.returnValue = false;
  var target    = ev.target || ev.srcElement;
  var id        = target.elements.namedItem("id").value;
  var name      = target.elements.namedItem("name").value;
  var pos       = target.elements.namedItem("pos").value;  
  var group     = target.elements.namedItem("group").value;  
  var playersNb = target.elements.namedItem("playersNb").value;  
  eventRanking.addTeam(id, pos, name, group, playersNb);
  eventRanking.storage.setInHistory();
  eventRanking.graphics.refresh();
};
eventRanking.graphics.deleteTeamEvent  = function (e) {
  var ev     = e || window.event;
  if (ev.preventDefault) ev.preventDefault();
  ev.returnValue = false;
  var target = ev.target || ev.srcElement;
  eventRanking.teams[target.dataset.id].delete();
  eventRanking.storage.setInHistory();
  eventRanking.graphics.refresh();
};
eventRanking.graphics.openEditTeam = function(e) {
  var ev     = e || window.event;
  var target = ev.target || ev.srcElement;
  dialogBoxes.open('editTeam'+target.dataset.id, eventRanking.teams[target.dataset.id].getFormElem(), "Edition de : "+eventRanking.teams[target.dataset.id].name);
};


eventRanking.graphics.setScoreEvent = function(e) {
  var ev     = e || window.event;
  if (ev.preventDefault) ev.preventDefault();
  ev.returnValue = false;
  var target = ev.target || ev.srcElement;
  var elemId = target.getAttribute('id');
  var elemType = 'form';
  if(target.nodeName == 'INPUT' || target.nodeName == 'SELECT') {
    target = target.form;
    elemType = 'input';
  }
  var format = target.elements['format'].value;
  var value = eventRanking.scoreFormats[format].getFormatedValue(target);
  eventRanking.scores[target.elements['id'].value].value = value;
  eventRanking.storage.setInHistory();
  eventRanking.graphics.refresh();
  if(elemType == 'input') {
    var tabableElems  = document.getElementsByClassName('tabable');
    var tabableLength = tabableElems.length-1;
    var it1 = 0, isSameElem = 0, newElemId = elemId;
   
    for (it1 = 0; it1 < tabableLength; it1++) {
      if(tabableElems[it1].getAttribute('id') == elemId) newElemId = tabableElems[it1+1].getAttribute('id');
    }
    document.getElementById(newElemId).focus();
  }
  else if (elemType == 'form') {
    var newElemId = 0;
    if (target.elements['int']   != undefined)  newElemId = target.elements['int'].id;
    if (target.elements['float'] != undefined)  newElemId = target.elements['float'].id;
    if (target.elements['hour']  != undefined)  newElemId = target.elements['hour'].id;
    if (target.elements['hour1'] != undefined)  newElemId = target.elements['hour1'].id;
    
    if(newElemId != 0) document.getElementById(newElemId).focus();
  }
};
eventRanking.graphics.setScoreTypeEvent = function(e) {
  var ev     = e || window.event;
  if (ev.preventDefault) ev.preventDefault();
  ev.returnValue = false;
  var target = ev.target || ev.srcElement;
  if(target.nodeName == 'INPUT' || target.nodeName == 'SELECT') target = target.form;
  var type = target.elements['format'].value;
  eventRanking.scores[target.elements['id'].value].type = type;
  eventRanking.storage.setInHistory();
  eventRanking.graphics.refresh();
};


eventRanking.graphics.setTableOrdering = function (e) {
  var ev     = e || window.event;
  if (ev.preventDefault) ev.preventDefault();
  ev.returnValue = false;
  var target = ev.target || ev.srcElement;
  if(eventRanking.graphics.ordering == target.dataset.ordering && eventRanking.scoreFilters.reversedTeamOrder == false) {
    eventRanking.scoreFilters.reversedTeamOrder = true;
  }
  else {
    eventRanking.scoreFilters.reversedTeamOrder = false;
  }
  eventRanking.graphics.ordering = target.dataset.ordering;
  eventRanking.graphics.refresh();
};

eventRanking.graphics.openEditFilters = function(e) {
  var ev     = e || window.event;
  var target = ev.target || ev.srcElement;
  dialogBoxes.open('editFilters', eventRanking.scoreFilters.getFormElem(), "Edition du filtre des Scores");
};

eventRanking.graphics.setFiltersEvents = function (e) {
  var ev     = e || window.event;
  if (ev.preventDefault) ev.preventDefault();
  ev.returnValue = false;
  var target = ev.target || ev.srcElement;
  if(target.nodeName == 'INPUT' || target.nodeName == 'SELECT') target = target.form;
  eventRanking.scoreFilters.challengeOrder             = target.elements['scoreOrder'].value;
  eventRanking.scoreFilters.reversedChallengeOrder     = target.elements['isReversedChallenge'].checked;
  eventRanking.scoreFilters.reversedChallengeTypeOrder = target.elements['isReversedChallengeType'].checked;
  eventRanking.scoreFilters.showChallenges             = target.elements['showChallenges'].checked;
  eventRanking.scoreFilters.showChallengeTypes         = target.elements['showChallengeTypes'].checked;
  eventRanking.scoreFilters.showTotal                  = target.elements['showTotal'].checked;
  eventRanking.scoreFilters.hiddenChallengeTypes = [];
  var it1;
  var orderedChallengeType = eventRanking.getOrderedChallengeTypes();
  var nbChallengeTypes     = orderedChallengeType.length;
  for(it1=1; it1<nbChallengeTypes; it1++) {
    if(orderedChallengeType[it1] != undefined) {
      if(target.elements['isHiddenChallengeType'+orderedChallengeType[it1].id].checked == 0) {
	eventRanking.scoreFilters.hiddenChallengeTypes.push(orderedChallengeType[it1].id);
      }
    }
  }
  eventRanking.scoreFilters.hiddenCategories = [];
  var orderedCategories = eventRanking.getOrderedCategories();
  var nbCategories      = orderedCategories.length;
  for(it1=0; it1<nbCategories; it1++) {
    if(orderedCategories[it1] != undefined) {
      if(target.elements['isHiddenCategory'+orderedCategories[it1].id].checked == 0) {
	eventRanking.scoreFilters.hiddenCategories.push(orderedCategories[it1].id);
      }
    }
  }
//   eventRanking.storage.setInHistory();
  eventRanking.graphics.refresh();
  
};


