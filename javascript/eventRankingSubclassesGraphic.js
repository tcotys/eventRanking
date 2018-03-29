eventRanking.Formula.prototype.getListElem      = function () {
  var tmp = document.createElement('span');
  tmp.style.backgroundColor = "lightgrey";
  tmp.appendChild(document.createTextNode(this.name));
  return tmp;
};
eventRanking.ChallengeType.prototype.getListElem      = function () {
  var tmp = document.createElement('span');
  tmp.style.backgroundColor = this.color;
  tmp.appendChild(document.createTextNode(this.name));
  return tmp;
};
eventRanking.Challenge.prototype.getListElem      = function () {
  var tmp = document.createElement('span');
  if(eventRanking.challengeTypes[this.typeId] != undefined) tmp.style.backgroundColor = eventRanking.challengeTypes[this.typeId].color;
  tmp.appendChild(document.createTextNode(this.name));
  return tmp;
};
eventRanking.Challenge.prototype.getListElem2      = function () {
  var tmp = document.createElement('SPAN');
  if(eventRanking.challengeTypes[this.typeId] != undefined) tmp.style.backgroundColor = eventRanking.challengeTypes[this.typeId].color;
  tmp.appendChild(document.createTextNode(this.name));
  if(eventRanking.formulae[this.formulaId] != undefined) {
    var tmp2 = document.createElement('SPAN');
    tmp2.appendChild(document.createTextNode(' '+eventRanking.formulae[this.formulaId].name));
    tmp2.style.fontSize = 'smaller';
    tmp2.style.display = 'inline';
    tmp.appendChild(tmp2);
  }
  return tmp;
};
eventRanking.Category.prototype.getListElem      = function () {
  var tmp = document.createElement('span');
  tmp.style.backgroundColor = this.color;
  tmp.appendChild(document.createTextNode(this.name));
  return tmp;
};
eventRanking.Group.prototype.getListElem      = function () {
  var tmp = document.createElement('span');
  if(eventRanking.categories[this.category] != undefined)
    tmp.style.backgroundColor = eventRanking.categories[this.category].color;
  tmp.appendChild(document.createTextNode(this.name + ' ('+this.number + ')'));
  return tmp;
};
eventRanking.Team.prototype.getListElem      = function () {
  var tmp = document.createElement('span');
  if (eventRanking.groups[this.group] != undefined)
    if(eventRanking.categories[eventRanking.groups[this.group].category] != undefined)
      tmp.style.backgroundColor = eventRanking.categories[eventRanking.groups[this.group].category].color;
//   tmp.appendChild(document.createTextNode(this.pos + ' ' + this.name + ' ('+eventRanking.groups[this.group].name+')'));
  tmp.appendChild(document.createTextNode(this.name + ' ('+eventRanking.groups[this.group].name+')'));
  return tmp;
};



eventRanking.EventInfo.prototype.getFormElem      = function () {
  
  var fEventInfo   = document.createElement('form');
  var iId          = document.createElement('input');
  var iName        = document.createElement('input');
  var iDate        = document.createElement('input');
  var iDescription = document.createElement('textarea');
  var iLocation    = document.createElement('input');
  var iSubmit      = document.createElement('input');
  
  iId.type          = 'hidden';
  iName.type        = 'text';
  iDate.type        = 'text';
  iLocation.type    = 'text';
  iDescription.name = 'description';
  iSubmit.type      = 'submit';
  
  iId.name          = 'id';
  iName.name        = 'name';
  iDate.name        = 'date';
  iLocation.name    = 'location';
  iDescription.name = 'description';
  
  iId.value          = this.id;
  iName.value        = this.name;
  iDate.value        = this.date;
  iDescription.value = this.description;
  iLocation.value    = this.location;
  iSubmit.value      = 'Save';
  
  fEventInfo.appendChild(iId);
  fEventInfo.appendChild(document.createTextNode("Nom de l'événement:"));
  fEventInfo.appendChild(iName);
  fEventInfo.appendChild(document.createElement('br'));
  fEventInfo.appendChild(document.createTextNode("Date :"));
  fEventInfo.appendChild(iDate);
  fEventInfo.appendChild(document.createElement('br'));
  fEventInfo.appendChild(document.createTextNode("Localisation :"));
  fEventInfo.appendChild(iLocation);
  fEventInfo.appendChild(document.createElement('br'));
  fEventInfo.appendChild(document.createTextNode("Description :"));
  fEventInfo.appendChild(iDescription);
  fEventInfo.appendChild(document.createElement('br'));
  fEventInfo.appendChild(iSubmit);
  
  fEventInfo.onsubmit   = eventRanking.graphics.setEventInfoEvent;
  
  return fEventInfo;
};
eventRanking.Formula.prototype.getFormElem      = function () {
  var it1;
  var fFormula       = document.createElement('form');
  var iId            = document.createElement('input');
  var iPos           = document.createElement('input');
  var iName          = document.createElement('input');
  var iFormula       = document.createElement('input');
  var sFormat        = document.createElement('select');
  var iSubmit        = document.createElement('input');
  
  iId.type          = 'hidden';
  iPos.type         = 'hidden';
  iName.type        = 'text';
  iFormula.type     = 'text';
  iSubmit.type      = 'submit';
  
  iId.name          = 'id';
  iPos.name         = 'pos';
  iName.name        = 'name';
  iFormula.name     = 'formula';
  sFormat.name      = 'format';
  
  iId.value          = this.id;
  iPos.value         = this.pos;
  iName.value        = this.name;
  iFormula.value     = this.formula;
  for(it1 in eventRanking.scoreFormats) {
    var oFormat = document.createElement('option');
    oFormat.value = eventRanking.scoreFormats[it1].id;
    oFormat.appendChild(document.createTextNode(eventRanking.scoreFormats[it1].name));
    if(this.format == eventRanking.scoreFormats[it1].id) oFormat.selected = 'selected';
    sFormat.appendChild(oFormat);
  }
  iSubmit.value      = 'Save';
  
  iFormula.style.fontFamily = '"Courier New", Courier, monospace';
  iFormula.style.width = '400px';
  
  fFormula.appendChild(iId);
  fFormula.appendChild(iPos);
  fFormula.appendChild(document.createTextNode("Nom :"));
  fFormula.appendChild(iName);
  fFormula.appendChild(document.createElement('br'));
  fFormula.appendChild(document.createTextNode("Formule :"));
  fFormula.appendChild(document.createElement('br'));
  fFormula.appendChild(iFormula);
  fFormula.appendChild(document.createElement('br'));
  fFormula.appendChild(document.createTextNode("Formatage des points :"));
  fFormula.appendChild(sFormat);
  fFormula.appendChild(document.createElement('br'));
  fFormula.appendChild(iSubmit);
  
  
  fFormula.appendChild(document.createElement('br'));
  fFormula.appendChild(document.createElement('br'));
  fFormula.appendChild(document.createTextNode("Variables remplacées par leurs valeurs :"));
  fFormula.appendChild(document.createElement('br'));
  fFormula.appendChild(document.createTextNode("- Différent pour chaque équipe : "));
  fFormula.appendChild(document.createElement('br'));
  fFormula.appendChild(document.createTextNode("        VAL (points de l'équipe), PLAYERS (nb de participants)"));
  fFormula.appendChild(document.createElement('br'));
  fFormula.appendChild(document.createTextNode("- Identique pour toutes les équipes : "));
  fFormula.appendChild(document.createElement('br'));
  fFormula.appendChild(document.createTextNode("        MIN, MAX, MEAN, MED (médiane)"));
  fFormula.appendChild(document.createElement('br'));
  fFormula.appendChild(document.createElement('br'));
  fFormula.appendChild(document.createTextNode("Fonctions supportées :"));
  fFormula.appendChild(document.createElement('br'));
  fFormula.appendChild(document.createTextNode("abs(x), exp(x), sqrt(x), log(x), pow(x,y), sin(x), cos(x), tan(x), asin(x), acos(x), atan(x)"));
  
//   formula = formula.replace("min", min);
//   formula = formula.replace("max", max);
//   formula = formula.replace("mean", mean);
//   formula = formula.replace("med", med);
//   formula = formula.replace("val", val);
//   formula = formula.replace("players", players);
  
  fFormula.onsubmit   = eventRanking.graphics.setFormulaEvent;
  
  return fFormula;
};
eventRanking.ChallengeType.prototype.getFormElem      = function () {
  var fChallengeType = document.createElement('form');
  var iId            = document.createElement('input');
  var iPos           = document.createElement('input');
  var iName          = document.createElement('input');
  var iDescription   = document.createElement('textarea');
  var iPtMax         = document.createElement('input');
  var iColor         = document.createElement('input');
  var iSubmit        = document.createElement('input');
  
  iId.type          = 'hidden';
  iPos.type         = 'hidden';
  iName.type        = 'text';
  iPtMax.type       = 'text';
  iColor.type       = 'color';
  iSubmit.type      = 'submit';
  
  iId.name          = 'id';
  iPos.name         = 'pos';
  iName.name        = 'name';
  iDescription.name = 'description';
  iPtMax.name       = 'ptMax';
  iColor.name       = 'color';
  
  iId.value          = this.id;
  iPos.value         = this.pos;
  iName.value        = this.name;
  iDescription.value = this.description;
  iPtMax.value       = this.ptMax;
  iColor.value       = this.color;
  iSubmit.value      = 'Save';
  
  fChallengeType.appendChild(iId);
  fChallengeType.appendChild(iPos);
  fChallengeType.appendChild(document.createTextNode("Nom :"));
  fChallengeType.appendChild(iName);
  fChallengeType.appendChild(document.createElement('br'));
  fChallengeType.appendChild(document.createTextNode("Description :"));
  fChallengeType.appendChild(iDescription);
  fChallengeType.appendChild(document.createElement('br'));
  fChallengeType.appendChild(document.createTextNode("Points Max :"));
  fChallengeType.appendChild(iPtMax);
  fChallengeType.appendChild(document.createElement('br'));
  fChallengeType.appendChild(document.createTextNode("Couleur de fond :"));
  fChallengeType.appendChild(iColor);
  fChallengeType.appendChild(document.createElement('br'));
  fChallengeType.appendChild(iSubmit);
  
  fChallengeType.onsubmit   = eventRanking.graphics.setChallengeTypeEvent;
  
  return fChallengeType;
};
eventRanking.Challenge.prototype.getFormElem      = function () {
    
  var it1;
  var orderedChallengeType = eventRanking.getOrderedChallengeTypes();
  var orderedFormulae      = eventRanking.getOrderedFormulae();
  var nbChallengeTypes     = orderedChallengeType.length;
  var nbFormulae           = orderedFormulae.length;
  
  var fChallenge     = document.createElement('form');
  var iId            = document.createElement('input');
  var iPos           = document.createElement('input');
  var iName          = document.createElement('input');
  var iPtMax         = document.createElement('input');
  var iTypeId        = document.createElement('select');
  var iFormulaId     = document.createElement('select');
  var iSubmit        = document.createElement('input');
  
  iId.type          = 'hidden';
  iPos.type         = 'hidden';
  iName.type        = 'text';
  iPtMax.type       = 'text';
  iSubmit.type      = 'submit';
  
  iId.name          = 'id';
  iPos.name         = 'pos';
  iName.name        = 'name';
  iPtMax.name       = 'ptMax';
  iTypeId.name      = 'typeId';
  iFormulaId.name   = 'formulaId';
  
  iId.value          = this.id;
  iPos.value         = this.pos;
  iName.value        = this.name;
  iPtMax.value       = this.ptMax;
  for(it1=1; it1<nbChallengeTypes; it1++) {
    if(orderedChallengeType[it1] != undefined) {
      var iOption = document.createElement('option');
      iOption.value = orderedChallengeType[it1].id;
      iOption.appendChild(document.createTextNode(orderedChallengeType[it1].name));
      if(orderedChallengeType[it1].id == this.typeId) iOption.selected = "selected";
      iTypeId.appendChild(iOption);
    }
  }
  for(it1 =1; it1<nbFormulae; it1++) {
    if(orderedFormulae[it1] != undefined) {
      var iOption = document.createElement('option');
      iOption.value = orderedFormulae[it1].id;
      iOption.appendChild(document.createTextNode(orderedFormulae[it1].name));
      if(orderedFormulae[it1].id == this.formulaId) iOption.selected = "selected";
      iFormulaId.appendChild(iOption);
    }
  }
  iSubmit.value      = 'Save';
  
  fChallenge.appendChild(iId);
  fChallenge.appendChild(iPos);
  fChallenge.appendChild(document.createTextNode("Nom :"));
  fChallenge.appendChild(iName);
  fChallenge.appendChild(document.createElement('br'));
  fChallenge.appendChild(document.createTextNode("Type d'épreuve :"));
  fChallenge.appendChild(iTypeId);
  fChallenge.appendChild(document.createElement('br'));
  fChallenge.appendChild(document.createTextNode("Formule de calcul de points :"));
  fChallenge.appendChild(iFormulaId);
  fChallenge.appendChild(document.createElement('br'));
  fChallenge.appendChild(document.createTextNode("Pondération des points (pour le type d'épreuve) :"));
  fChallenge.appendChild(iPtMax);
  fChallenge.appendChild(document.createElement('br'));
  fChallenge.appendChild(iSubmit);
  
  fChallenge.onsubmit   = eventRanking.graphics.setChallengeEvent;
  
  return fChallenge;
};
eventRanking.Category.prototype.getFormElem      = function () {
  var fCategories  = document.createElement('form');
  var iId          = document.createElement('input');
  var iPos         = document.createElement('input');
  var iName        = document.createElement('input');
  var iColor       = document.createElement('input');
  var iSubmit      = document.createElement('input');
  
  iId.type          = 'hidden';
  iPos.type         = 'hidden';
  iName.type        = 'text';
  iColor.type       = 'color';
  iSubmit.type      = 'submit';
  
  iId.name          = 'id';
  iPos.name         = 'pos';
  iName.name        = 'name';
  iColor.name       = 'color';
  
  iId.value          = this.id;
  iPos.value         = this.pos;
  iName.value        = this.name;
  iColor.value       = this.color;
  iSubmit.value      = 'Save';
  
  fCategories.appendChild(iId);
  fCategories.appendChild(iPos);
  fCategories.appendChild(document.createTextNode("Nom :"));
  fCategories.appendChild(iName);
  fCategories.appendChild(document.createElement('br'));
  fCategories.appendChild(document.createTextNode("Couleur de fond :"));
  fCategories.appendChild(iColor);
  fCategories.appendChild(document.createElement('br'));
  fCategories.appendChild(iSubmit);
  
  fCategories.onsubmit   = eventRanking.graphics.setCategoryEvent;
  
  return fCategories;
};
eventRanking.Group.prototype.getFormElem      = function () {
  var it1;
  var orderedCategories = eventRanking.getOrderedCategories();
  var nbCategories      = orderedCategories.length;
  
  var fGroup         = document.createElement('form');
  var iId            = document.createElement('input');
  var iPos           = document.createElement('input');
  var iName          = document.createElement('input');
  var iNumber        = document.createElement('input');
  var iCategory      = document.createElement('select');
  var iDescription   = document.createElement('textarea');
  var iSubmit        = document.createElement('input');
  
  iId.type          = 'hidden';
  iPos.type         = 'hidden';
  iName.type        = 'text';
  iNumber.type      = 'text';
  iSubmit.type      = 'submit';
  
  iId.name          = 'id';
  iPos.name         = 'pos';
  iName.name        = 'name';
  iNumber.name      = 'number';
  iCategory.name    = 'category';
  iDescription.name = 'description';
  
  iId.value          = this.id;
  iPos.value         = this.pos;
  iName.value        = this.name;
  iNumber.value      = this.number;
  iDescription.value = this.description;
  for(it1=0; it1<nbCategories; it1++) {
    if(orderedCategories[it1] != undefined) {
      var iOption = document.createElement('option');
      iOption.value = orderedCategories[it1].id;
      iOption.appendChild(document.createTextNode(orderedCategories[it1].name));
      if(orderedCategories[it1].id == this.category) iOption.selected = "selected";
      iCategory.appendChild(iOption);
    }
  }
  iSubmit.value      = 'Save';
  
  fGroup.appendChild(iId);
  fGroup.appendChild(iPos);
  fGroup.appendChild(document.createTextNode("Nom :"));
  fGroup.appendChild(iName);
  fGroup.appendChild(document.createElement('br'));
  fGroup.appendChild(document.createTextNode("Numéro d'unité :"));
  fGroup.appendChild(iNumber);
  fGroup.appendChild(document.createElement('br'));
  fGroup.appendChild(document.createTextNode("Catégorie :"));
  fGroup.appendChild(iCategory);
  fGroup.appendChild(document.createElement('br'));
  fGroup.appendChild(document.createTextNode("Description :"));
  fGroup.appendChild(iDescription);
  fGroup.appendChild(document.createElement('br'));
  fGroup.appendChild(iSubmit);
  
  fGroup.onsubmit   = eventRanking.graphics.setGroupEvent;
  
  return fGroup;
};
eventRanking.Team.prototype.getFormElem      = function () {
  var it1;
  var orderedGroups  = eventRanking.getOrderedGroups();
  var nbGroups       = orderedGroups.length;
  
  var fTeam          = document.createElement('form');
  var iId            = document.createElement('input');
  var iName          = document.createElement('input');
  var iPos           = document.createElement('input');
  var iGroup         = document.createElement('select');
  var iPlayersNb     = document.createElement('input');
  var iSubmit        = document.createElement('input');
  
  iId.type          = 'hidden';
  iName.type        = 'text';
  iPos.type         = 'hidden';
  iPlayersNb.type   = 'number';
  iSubmit.type      = 'submit';
  
  iId.name          = 'id';
  iName.name        = 'name';
  iPos.name         = 'pos';
  iGroup.name       = 'group';
  iPlayersNb.name   = 'playersNb';
  iPlayersNb.min    = 0;
  iPlayersNb.step   = 1;
  
  iId.value          = this.id;
  iName.value        = this.name;
  iPos.value         = this.pos;
  for(it1=0; it1<nbGroups; it1++) {
    if(orderedGroups[it1] != undefined) {
      var iOption = document.createElement('option');
      iOption.value = orderedGroups[it1].id;
      iOption.appendChild(document.createTextNode(orderedGroups[it1].name));
      if(orderedGroups[it1].id == this.group) iOption.selected = "selected";
      iGroup.appendChild(iOption);
    }
  }
  iPlayersNb.value   = this.playersNb;
  iSubmit.value      = 'Save';
  
  fTeam.appendChild(iId);
  fTeam.appendChild(iPos);
  fTeam.appendChild(document.createTextNode("Nom :"));
  fTeam.appendChild(iName);
  fTeam.appendChild(document.createElement('br'));
  fTeam.appendChild(document.createTextNode("Troupe :"));
  fTeam.appendChild(iGroup);
  fTeam.appendChild(document.createElement('br'));
  fTeam.appendChild(document.createTextNode("Nombre de participants :"));
  fTeam.appendChild(iPlayersNb);
  fTeam.appendChild(document.createElement('br'));
  fTeam.appendChild(iSubmit);
  
  fTeam.onsubmit   = eventRanking.graphics.setTeamEvent;
  
  return fTeam;
};


eventRanking.scoreFilters.getFormElem = function() {
  var it1;
  var maxFilterOrder   = eventRanking.getNewId(eventRanking.scoreFilters.challengeOrderFcts);
  var fFilter          = document.createElement('form');
  var sScoresOrder     = document.createElement('select');
  var iRevChallenge    = document.createElement('input');
  var iRevType         = document.createElement('input');
  var iShowChallenges  = document.createElement('input');
  var iShowTypes       = document.createElement('input');
  var iShowTotal       = document.createElement('input');
  var iSubmit          = document.createElement('input');
  
  iRevChallenge.type   = "checkbox";
  iRevType.type        = "checkbox";
  iShowChallenges.type = "checkbox";
  iShowTypes.type      = "checkbox";
  iShowTotal.type      = "checkbox";
  iSubmit.type         = 'submit';
  
  sScoresOrder.name    = 'scoreOrder';
  iRevChallenge.name   = 'isReversedChallenge';
  iRevType.name        = 'isReversedChallengeType';
  iShowChallenges.name = 'showChallenges';
  iShowTypes.name      = 'showChallengeTypes';
  iShowTotal.name      = 'showTotal';
  
  
  for(it1=0;it1<maxFilterOrder;it1++) {
    if(eventRanking.scoreFilters.challengeOrderFcts[it1] != undefined) {
      var oScoreOrder = document.createElement('option');
      oScoreOrder.value = eventRanking.scoreFilters.challengeOrderFcts[it1].id;
      oScoreOrder.appendChild(document.createTextNode(eventRanking.scoreFilters.challengeOrderFcts[it1].name));
      if(it1 == eventRanking.scoreFilters.challengeOrder) oScoreOrder.selected = 'selected';
      sScoresOrder.appendChild(oScoreOrder);
    }
  }
  iRevChallenge.checked   = eventRanking.scoreFilters.reversedChallengeOrder;
  iRevType.checked        = eventRanking.scoreFilters.reversedChallengeTypeOrder;
  iShowChallenges.checked = eventRanking.scoreFilters.showChallenges;
  iShowTypes.checked      = eventRanking.scoreFilters.showChallengeTypes;
  iShowTotal.checked      = eventRanking.scoreFilters.showTotal;
  iSubmit.value           = 'Rafraîchir';
  
  fFilter.appendChild(document.createTextNode('Ordres d\'affichage des épreuves :'));
  fFilter.appendChild(document.createElement('br'));
  fFilter.appendChild(document.createTextNode('- Ordre des points :'));
  fFilter.appendChild(document.createElement('br'));
  fFilter.appendChild(sScoresOrder);
  fFilter.appendChild(document.createElement('br'));
  fFilter.appendChild(document.createTextNode('- '));
  fFilter.appendChild(iRevChallenge);
  fFilter.appendChild(document.createTextNode(' Ordre des épreuves inversé'));
  fFilter.appendChild(document.createElement('br'));
  fFilter.appendChild(document.createTextNode('- '));
  fFilter.appendChild(iRevType);
  fFilter.appendChild(document.createTextNode(' Ordre des catégories d\'épreuve inversé'));
  fFilter.appendChild(document.createElement('br'));
  
  
  fFilter.appendChild(document.createElement('br'));
  fFilter.appendChild(document.createTextNode('Afficher les types de points suivants:'));
  fFilter.appendChild(document.createElement('br'));
  fFilter.appendChild(document.createTextNode('- '));
  fFilter.appendChild(iShowChallenges);
  fFilter.appendChild(document.createTextNode(' Épreuves'));
  fFilter.appendChild(document.createElement('br'));
  fFilter.appendChild(document.createTextNode('- '));
  fFilter.appendChild(iShowTypes);
  fFilter.appendChild(document.createTextNode(' Sous-totaux (catégories)'));
  fFilter.appendChild(document.createElement('br'));
  fFilter.appendChild(document.createTextNode('- '));
  fFilter.appendChild(iShowTotal);
  fFilter.appendChild(document.createTextNode(' Total'));
  fFilter.appendChild(document.createElement('br'));
  
  
  fFilter.appendChild(document.createElement('br'));
  fFilter.appendChild(document.createTextNode('Afficher les catégories d\'épreuve suivantes :'));
  fFilter.appendChild(document.createElement('br'));
  
  var it1;
  var orderedChallengeType = eventRanking.getOrderedChallengeTypes();
  var nbChallengeTypes     = orderedChallengeType.length;
  for(it1=1; it1<nbChallengeTypes; it1++) {
    if(orderedChallengeType[it1] != undefined) {
      var iHideChallengeTypes       = document.createElement('input');
      iHideChallengeTypes.type      = "checkbox";
      iHideChallengeTypes.name      = 'isHiddenChallengeType'+orderedChallengeType[it1].id;
      iHideChallengeTypes.checked   = (eventRanking.scoreFilters.hiddenChallengeTypes.indexOf(orderedChallengeType[it1].id) == -1)?1:0;
      
//       fFilter.appendChild(document.createTextNode('- '+ orderedChallengeType[it1].name));
      fFilter.appendChild(document.createTextNode('- '));
      fFilter.appendChild(iHideChallengeTypes);
      fFilter.appendChild(orderedChallengeType[it1].getListElem());
      fFilter.appendChild(document.createElement('br'));
      
    }
  }
  
  fFilter.appendChild(document.createElement('br'));
  fFilter.appendChild(document.createTextNode('Afficher les catégories d\'équipes suivantes :'));
  fFilter.appendChild(document.createElement('br'));
  
  var orderedCategories = eventRanking.getOrderedCategories();
  var nbCategories      = orderedCategories.length;
  for(it1=0; it1<nbCategories; it1++) {
    if(orderedCategories[it1] != undefined) {
      var iHideCategories       = document.createElement('input');
      iHideCategories.type      = "checkbox";
      iHideCategories.name      = 'isHiddenCategory'+orderedCategories[it1].id;
      iHideCategories.checked   = (eventRanking.scoreFilters.hiddenCategories.indexOf(orderedCategories[it1].id) == -1)?1:0;
      
//       fFilter.appendChild(document.createTextNode('- '+ orderedCategories[it1].name));
      fFilter.appendChild(document.createTextNode('- '));
      fFilter.appendChild(iHideCategories);
      fFilter.appendChild(orderedCategories[it1].getListElem());
      fFilter.appendChild(document.createElement('br'));
    }
  }
  
  fFilter.appendChild(iSubmit);
  
  fFilter.onsubmit = eventRanking.graphics.setFiltersEvents;
  
  return fFilter;
};
