

eventRanking.EventInfo.prototype.setName          = function (name)        {this.name        = name;       };
eventRanking.EventInfo.prototype.setEventDate     = function (date)        {this.date        = date;       };
eventRanking.EventInfo.prototype.setLocation      = function (location)    {this.location    = location;   };
eventRanking.EventInfo.prototype.setDescrption    = function (description) {this.description = description;};
// eventRanking.EventInfo.prototype.reset            = function (id,name,location,description) {
//   this.id          = id;
//   this.name        = name;
//   this.date        = date;
//   this.location    = location;
//   this.description = description;
// };
eventRanking.EventInfo.prototype.getData          = function () {
  return {id:this.id, name:this.name, date:this.date, location:this.location, description:this.description};
};

  
eventRanking.Formula.prototype.setName          = function (name)       {this.name    = name;      };
eventRanking.Formula.prototype.setFormula       = function (formula)    {this.formula = formula;   };
eventRanking.Formula.prototype.setFormat        = function (format)     {this.format  = format;    };
eventRanking.Formula.prototype.getData          = function () {
  return {id:this.id, pos:this.pos, name:this.name, formula:this.formula, format:this.format};
};
eventRanking.Formula.prototype.moveUp           = function () {
  if (this.pos > 1) {
    var pos = this.pos;
    var orderedFormulae = eventRanking.getOrderedFormulae();
    var otherId = orderedFormulae[pos-1].id;
    eventRanking.formulae[otherId].pos = pos;
    this.pos = pos-1;
  }
};
eventRanking.Formula.prototype.moveDown         = function () {
  if (this.pos < eventRanking.getMaxPos(eventRanking.formulae)) {
    var pos = this.pos;
    var orderedFormulae = eventRanking.getOrderedFormulae();
    var otherId = orderedFormulae[pos+1].id;
    eventRanking.formulae[otherId].pos = pos;
    this.pos = pos+1;
  }
};
eventRanking.Formula.prototype.delete = function () {
  var pos = this.pos;
  var it1;
  for(it1 in eventRanking.formulae) {
    if(eventRanking.formulae[it1] != undefined) if(eventRanking.formulae[it1].pos > pos) eventRanking.formulae[it1].pos = eventRanking.formulae[it1].pos-1;
  }
  eventRanking.formulae[this.id] = undefined;
};


eventRanking.ChallengeType.prototype.setName          = function (name)       {this.name        = name;         };
eventRanking.ChallengeType.prototype.setPos           = function (pos)        {this.pos         = pos;          };
eventRanking.ChallengeType.prototype.setColor         = function (color)      {this.color       = color;        };
eventRanking.ChallengeType.prototype.setDescription   = function (description){this.description = description;};
eventRanking.ChallengeType.prototype.setPtMax         = function (ptMax)      {this.ptMax       = ptMax;      };
eventRanking.ChallengeType.prototype.getData          = function () {
  return {id:this.id, pos:this.pos, name:this.name, description:this.description, ptMax:this.ptMax, color:this.color};
};
eventRanking.ChallengeType.prototype.moveUp           = function () {
  if (this.pos > 1) {
    var pos = this.pos;
    var challengeTypes = eventRanking.getOrderedChallengeTypes();
    var otherId = challengeTypes[pos-1].id;
    eventRanking.challengeTypes[otherId].pos = pos;
    this.pos = pos-1;
  }
};
eventRanking.ChallengeType.prototype.moveDown         = function () {
  if (this.pos < eventRanking.getMaxPos(eventRanking.challengeTypes)) {
    var pos = this.pos;
    var challengeTypes = eventRanking.getOrderedChallengeTypes();
    var otherId = challengeTypes[pos+1].id;
    eventRanking.challengeTypes[otherId].pos = pos;
    this.pos = pos+1;
  }
};
eventRanking.ChallengeType.prototype.delete = function () {
  var pos = this.pos;
  var it1;
  for(it1 in eventRanking.challengeTypes) {
    if(eventRanking.challengeTypes[it1] != undefined) if(eventRanking.challengeTypes[it1].pos > pos) eventRanking.challengeTypes[it1].pos = eventRanking.challengeTypes[it1].pos-1;
  }
  eventRanking.challengeTypes[this.id] = undefined;
};

eventRanking.Challenge.prototype.setName          = function (name)       {this.name      = name;      };
eventRanking.Challenge.prototype.setPos           = function (pos)        {this.pos         = pos;          };
eventRanking.Challenge.prototype.setPtMax         = function (ptMax)      {this.ptMax     = ptMax;     };
eventRanking.Challenge.prototype.setTypeId        = function (typeId)     {this.typeId    = typeId;    };
eventRanking.Challenge.prototype.setFormulaId     = function (formulaId)  {this.formulaId = formulaId  };
eventRanking.Challenge.prototype.getData          = function () {
  return {id:this.id, pos:this.pos, name:this.name, ptMax:this.ptMax, typeId:this.typeId, formulaId:this.formulaId};
};
eventRanking.Challenge.prototype.moveUp           = function () {
  if (this.pos > 1) {
    var pos = this.pos;
    var orderedChallenges = eventRanking.getOrderedChallenges();
    var otherId = orderedChallenges[pos-1].id;
    eventRanking.challenges[otherId].pos = pos;
    this.pos = pos-1;
  }
};
eventRanking.Challenge.prototype.moveDown         = function () {
  if (this.pos < eventRanking.getMaxPos(eventRanking.challenges)) {
    var pos = this.pos;
    var orderedChallenges = eventRanking.getOrderedChallenges();
    var otherId = orderedChallenges[pos+1].id;
    eventRanking.challenges[otherId].pos = pos;
    this.pos = pos+1;
  }
};
eventRanking.Challenge.prototype.delete = function () {
  var pos = this.pos;
  var it1;
  for(it1 in eventRanking.challenges) {
    if(eventRanking.challenges[it1] != undefined) if(eventRanking.challenges[it1].pos > pos) eventRanking.challenges[it1].pos = eventRanking.challenges[it1].pos-1;
  }
  eventRanking.challenges[this.id] = undefined;
};

  
eventRanking.Category.prototype.setName          = function (name)        {this.name        = name;      };
eventRanking.Category.prototype.setPos           = function (pos)        {this.pos         = pos;          };
eventRanking.Category.prototype.setColor         = function (color)       {this.color       = color;     };
eventRanking.Category.prototype.getData          = function () {
  return {id:this.id, pos:this.pos, name:this.name, color:this.color};
};
eventRanking.Category.prototype.moveUp           = function () {
  if (this.pos > 1) {
    var pos = this.pos;
    var orderedCategories = eventRanking.getOrderedCategories();
    var otherId = orderedCategories[pos-1].id;
    eventRanking.categories[otherId].pos = pos;
    this.pos = pos-1;
  }
};
eventRanking.Category.prototype.moveDown         = function () {
  if (this.pos < eventRanking.getMaxPos(eventRanking.categories)) {
    var pos = this.pos;
    var orderedCategories = eventRanking.getOrderedCategories();
    var otherId = orderedCategories[pos+1].id;
    eventRanking.categories[otherId].pos = pos;
    this.pos = pos+1;
  }
};
eventRanking.Category.prototype.delete = function () {
  var pos = this.pos;
  var it1;
  for(it1 in eventRanking.categories) {
    if(eventRanking.categories[it1] != undefined) if(eventRanking.categories[it1].pos > pos) eventRanking.categories[it1].pos = eventRanking.categories[it1].pos-1;
  }
  eventRanking.categories[this.id] = undefined;
};


eventRanking.Group.prototype.setname          = function (name)        {this.name        = name;       };
eventRanking.Group.prototype.setPos           = function (pos)        {this.pos         = pos;          };
eventRanking.Group.prototype.setNumber        = function (number)      {this.number      = number;     };
eventRanking.Group.prototype.setCategory      = function (category)    {this.category    = category;   };
eventRanking.Group.prototype.setDescription   = function (description) {this.description = description;};
eventRanking.Group.prototype.getData          = function () {
  return {id:this.id, pos:this.pos, name:this.name, number:this.number, category:this.category, description:this.description};
};
eventRanking.Group.prototype.moveUp           = function () {
  if (this.pos > 1) {
    var pos = this.pos;
    var orderedGroups = eventRanking.getOrderedGroups();
    var otherId = orderedGroups[pos-1].id;
    eventRanking.groups[otherId].pos = pos;
    this.pos = pos-1;
  }
};
eventRanking.Group.prototype.moveDown         = function () {
  if (this.pos < eventRanking.getMaxPos(eventRanking.groups)) {
    var pos = this.pos;
    var orderedGroups = eventRanking.getOrderedGroups();
    var otherId = orderedGroups[pos+1].id;
    eventRanking.groups[otherId].pos = pos;
    this.pos = pos+1;
  }
};
eventRanking.Group.prototype.delete = function () {
  var pos = this.pos;
  var it1;
  for(it1 in eventRanking.groups) {
    if(eventRanking.groups[it1] != undefined) if(eventRanking.groups[it1].pos > pos) eventRanking.groups[it1].pos = eventRanking.groups[it1].pos-1;
  }
  eventRanking.groups[this.id] = undefined;
};


eventRanking.Team.prototype.setName          = function (name)       {this.name      = name;      };
eventRanking.Team.prototype.setGroup         = function (group)      {this.groups    = groups;    };
eventRanking.Team.prototype.setPlayersNb     = function (playersNb)  {this.playersNb = playersNb; };
eventRanking.Team.prototype.getData          = function () {
  return {id:this.id, pos:this.pos, name:this.name, group:this.group, playersNb:this.playersNb};
};
eventRanking.Team.prototype.moveUp           = function () {
  if (this.pos > 1) {
    var pos = this.pos;
    var orderedTeams = eventRanking.getOrderedTeams();
    var otherId = orderedTeams[pos-1].id;
    eventRanking.teams[otherId].pos = pos;
    this.pos = pos-1;
  }
};
eventRanking.Team.prototype.moveDown         = function () {
  if (this.pos < eventRanking.getMaxPos(eventRanking.teams)) {
    var pos = this.pos;
    var orderedTeams = eventRanking.getOrderedTeams();
    var otherId = orderedTeams[pos+1].id;
    eventRanking.teams[otherId].pos = pos;
    this.pos = pos+1;
  }
};
eventRanking.Team.prototype.delete = function () {
  var pos = this.pos;
  var it1;
  for(it1 in eventRanking.teams) {
    if(eventRanking.teams[it1] != undefined) if(eventRanking.teams[it1].pos > pos) eventRanking.teams[it1].pos = eventRanking.teams[it1].pos-1;
  }
  eventRanking.teams[this.id] = undefined;
};


  

eventRanking.Score.prototype.setValue         = function (value)       {this.value       = value;     };
eventRanking.Score.prototype.getData          = function () {
  return {id:this.id, teamId:this.teamId, challengeId:this.challengeId, value:this.value, type:this.type};
};