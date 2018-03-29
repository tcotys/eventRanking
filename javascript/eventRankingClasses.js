var eventRanking = new function() {
  
  this.EventInfo = function(id, name, date, location, description) {// Info générales :
    this.id               = id;
    this.name             = name;
    this.date             = date;
    this.location         = location;
    this.description      = description;
  };
  this.Formula = function(id, eventId, pos, name, formula, format) {
    this.id               = id;
    this.eventId          = eventId;
    this.pos              = pos;
    this.name             = name;
    this.formula          = formula;
    this.format           = format;
  };
  this.ChallengeType = function(id, eventId, pos, name, description, ptMax, color) {// : Liste des types d'épreuves
    this.id               = id;
    this.eventId          = eventId;
    this.pos              = pos;
    this.name             = name;
    this.description      = description;
    this.ptMax            = ptMax;// (peut être négatif en pour d'éventuelles pénalités)
    this.color            = color;
  };
  this.Challenge = function(id, eventId, pos, name, ptMax, typeId, formulaId) { // : Liste des épreuves :
    this.id               = id;
    this.eventId          = eventId;
    this.pos              = pos;
    this.name             = name;
    this.ptMax            = ptMax;
    this.typeId           = typeId;
    this.formulaId        = formulaId;
  };
  // Type d'unité scoute (Scouts, Guides ou Mixtes)
  this.Category = function(id, eventId, pos, name, color) {
    this.id               = id;
    this.eventId          = eventId;
    this.pos              = pos;
    this.name             = name;
    this.color            = color;
  };
  // Nom de l'unité scoute
  this.Group = function(id, eventId, pos, name, number, category, description) {
    this.id               = id;
    this.eventId          = eventId;
    this.pos              = pos;
    this.name             = name;
    this.number           = number;
    this.category         = category;
    this.description      = description;
  };
  this.Team = function(id, eventId, pos, name, group, playersNb) {// : Liste des équipes :
    this.id               = id;
    this.eventId          = eventId;
    this.pos              = pos;
    this.name             = name;
    this.group            = group;
    this.playersNb        = playersNb;
  };
  this.ScoreFormat = function(id, name, getInputElemFct, getFormatedValueFct, getFloatFct) {
    this.id               = id;
    this.name             = name;
    this.getInputElem     = getInputElemFct;
    this.getFormatedValue = getFormatedValueFct;
    this.getFloat         = getFloatFct;
  };
  this.ScoreOrdering = function(id, name, orderFct) {
    this.id               = id;
    this.name             = name;
    this.getReorder       = orderFct;
  };
  this.ScoreType = function(id,  name, calculate, getValueFct) {
    this.id               = id;
    this.name             = name;
    this.calculate        = calculate;
    this.getValue         = getValueFct;
  };
  // Elements du tableau de points
  this.Score = function(id, eventId, teamId, challengeId, value, type) {
    this.id               = id;
    this.eventId          = eventId;
    this.teamId           = teamId;
    this.challengeId      = challengeId;
    this.value            = value;
    this.type             = type;
  };

  
  this.actualEventId    = 0;
  
  this.eventsInfo       = new this.EventInfo(0, "Mafeking", "Aujourd'hui", "Au local", "Ce sera SUPER !");
  this.teams            = [];
  this.challengeTypes   = [];
  this.challenges       = [];
  this.groups           = [];
  this.categories       = [];
  this.formulae         = [];
  this.scores           = [];
  
  this.scoreFormats     = [];
  this.scoreTypes       = [];
  this.scoreFilters     = new function () {
    this.challengeOrder              = 1;
    this.reversedTeamOrder           = false;
    this.reversedChallengeOrder      = false;
    this.reversedChallengeTypeOrder  = false;
    this.showChallenges              = true;
    this.showChallengeTypes          = true;
    this.showTotal                   = true;
    this.challengesHide              = [];
    this.challengeOrderFcts          = [];
    this.hiddenChallengeTypes        = [];
    this.hiddenCategories            = [];
  };
  
  this.graphics         = new function () {
    this.actualPage       = "main";
    this.filters          = [];
    this.ordering         = 'teamNum';
    this.tableSubview     = 'edit';
    this.displayOnly      = false;
    this.fastDisplay      = false;
  };
  this.storage          = new function () {
    this.history          = [];
    this.maxHistoryElem   = 100;
  };
};

eventRanking.setEventInfo     = function(id, name, date, location, description) {
//     if (id == "") id = getNewId(this.eventsInfo);
//     this.eventsInfo[id] = new EventInfo(id, name, date, loaction, description, this);
//     return id;
  if (id == "") id = 0;
  this.eventsInfo = new eventRanking.EventInfo(parseInt(id), name, date, location, description);
  this.actualEventId    = parseInt(id);
  return parseInt(id);
};
eventRanking.addFormula      = function(id, pos, name, formula, format) {
  if (id == "" || parseInt(id) == 0) {
    id  = this.getNewId(this.formulae);
    pos = this.getNewPos(this.formulae);}
  this.formulae[parseInt(id)] = new eventRanking.Formula(parseInt(id), this.actualEventId, parseInt(pos), name, formula, format);
  return id;
};
eventRanking.addChallengeType = function(id, pos, name, description, ptMax, color) {
  if (id == "" || parseInt(id) == 0) {
    id  = this.getNewId(this.challengeTypes);
    pos = this.getNewPos(this.challengeTypes);}
  this.challengeTypes[parseInt(id)] = new eventRanking.ChallengeType(parseInt(id), this.actualEventId, parseInt(pos), name, description, ptMax, color);
  return id;
};
eventRanking.addChallenge     = function(id, pos, name, ptMax, typeId, formulaId) {
  if (id == "" || parseInt(id) == 0) {
    id  = this.getNewId(this.challenges);
    pos = this.getNewPos(this.challenges);};
  this.challenges[parseInt(id)] = new eventRanking.Challenge(parseInt(id), this.actualEventId, parseInt(pos), name, ptMax, parseInt(typeId), parseInt(formulaId));
  return id;
};
eventRanking.addCategory      = function(id, pos, name, color) {
  if (id == "" || parseInt(id) == 0) {
    id  = this.getNewId(this.categories);
    pos = this.getNewPos(this.categories);;}
  this.categories[parseInt(id)]     = new eventRanking.Category(parseInt(id), this.actualEventId, parseInt(pos), name, color);
  return id;
};
eventRanking.addGroup         = function(id, pos, name, number, category, description) {
  if (id == "" || parseInt(id) == 0) {
    id  = this.getNewId(this.groups);
    pos = this.getNewPos(this.groups);};
  this.groups[parseInt(id)]     = new eventRanking.Group(parseInt(id), this.actualEventId, parseInt(pos), name, number, category, description);
  return id;
};
eventRanking.addTeam          = function(id, pos, name, group, playersNb) {
  if (id == "" || parseInt(id) == 0) {
    id  = this.getNewId(this.teams);
    pos = this.getNewPos(this.teams);
  }
  this.teams[parseInt(id)] = new eventRanking.Team(parseInt(id), this.actualEventId, parseInt(pos), name, parseInt(group), parseInt(playersNb));
  return id;
};
eventRanking.addScore     = function(id, teamId, challengeId, value, type) {
  if (id == "" || parseInt(id) == 0) {
    id = this.getNewId(this.scores);}
  this.scores[parseInt(id)]     = new eventRanking.Score(parseInt(id), this.actualEventId, parseInt(teamId), parseInt(challengeId), value, type);
  return id;
};


eventRanking.getOrderedFormulae = function () {
  var tmp = [], it1;
  for (it1 in eventRanking.formulae) {if(eventRanking.formulae[it1] != undefined) if(eventRanking.formulae[it1].eventId == eventRanking.actualEventId) tmp[eventRanking.formulae[it1].pos] = eventRanking.formulae[it1];}
  return tmp;
};
eventRanking.getOrderedChallengeTypes = function () {
  var tmp = [], it1;
  for (it1 in eventRanking.challengeTypes) {if(eventRanking.challengeTypes[it1] != undefined) if(eventRanking.challengeTypes[it1].eventId == eventRanking.actualEventId) tmp[eventRanking.challengeTypes[it1].pos] = eventRanking.challengeTypes[it1];}
  return tmp;
};
eventRanking.getOrderedChallenges = function () {
  var tmp = [], it1;
  for (it1 in eventRanking.challenges) {if(eventRanking.challenges[it1] != undefined) if(eventRanking.challenges[it1].eventId == eventRanking.actualEventId) tmp[eventRanking.challenges[it1].pos] = eventRanking.challenges[it1];}
  return tmp;
};
eventRanking.getOrderedCategories = function () {
  var tmp = [], it1;
  for (it1 in eventRanking.categories) {if(eventRanking.categories[it1] != undefined) if(eventRanking.categories[it1].eventId == eventRanking.actualEventId) tmp[eventRanking.categories[it1].pos] = eventRanking.categories[it1];}
  return tmp;
};
eventRanking.getOrderedGroups = function () {
  var tmp = [], it1;
  for (it1 in eventRanking.groups) {if(eventRanking.groups[it1] != undefined) if(eventRanking.groups[it1].eventId == eventRanking.actualEventId) tmp[eventRanking.groups[it1].pos] = eventRanking.groups[it1];}
  return tmp;
};
eventRanking.getOrderedTeams = function () {
  var tmp = [], it1;
  for (it1 in eventRanking.teams) {if(eventRanking.teams[it1] != undefined) if(eventRanking.teams[it1].eventId == eventRanking.actualEventId) tmp[eventRanking.teams[it1].pos] = eventRanking.teams[it1];}
  return tmp;
};
eventRanking.getScoresTeamChallenge = function () {
  var tmp = [], it1;
  for(it1 in eventRanking.scores) {
    if(eventRanking.scores[it1] != undefined) {
      if(eventRanking.scores[it1].eventId == eventRanking.actualEventId && eventRanking.teams[eventRanking.scores[it1].teamId] != undefined && eventRanking.challenges[eventRanking.scores[it1].challengeId] != undefined) {
        if(tmp[eventRanking.scores[it1].teamId] == undefined) tmp[eventRanking.scores[it1].teamId] = [];
        tmp[eventRanking.scores[it1].teamId][eventRanking.scores[it1].challengeId] = eventRanking.scores[it1];
      }
    }
  }
  return tmp;
};
eventRanking.getScoresChallengeTeam = function () {
  var tmp = [], it1;
  for(it1 in eventRanking.scores) {
    if(eventRanking.scores[it1] != undefined) {
      if(eventRanking.scores[it1].eventId == eventRanking.actualEventId && eventRanking.teams[eventRanking.scores[it1].teamId] != undefined && eventRanking.challenges[eventRanking.scores[it1].challengeId] != undefined)
        tmp[eventRanking.scores[it1].challengeId][eventRanking.scores[it1].teamId] = eventRanking.scores[it1];
    }
  }
  return tmp;
};
