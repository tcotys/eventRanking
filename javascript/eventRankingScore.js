

eventRanking.Formula.prototype.getFormatedValue        = function (floatValue) {
  if (floatValue == undefined) floatValue = 0;
  return Math.abs(eventRanking.scoreFormats[this.format].getFormatedValue(floatValue));
};



eventRanking.ChallengeType.prototype.getPonderationFactor = function () {
  var it1;
  var challengePonderationSum = 0;
  for(it1 in eventRanking.challenges) {
    if(eventRanking.challenges[it1] != undefined) 
    if(eventRanking.challenges[it1].typeId == this.id)
      challengePonderationSum += parseFloat(eventRanking.challenges[it1].ptMax);
  }
  return parseFloat(this.ptMax)/challengePonderationSum;
};


eventRanking.Challenge.prototype.getMinFloatValue      = function () {
  var it1;
  var tmpScores = [];
  for(it1 in eventRanking.scores) {
    if(eventRanking.scores[it1] != undefined)
    if(eventRanking.scores[it1].challengeId == this.id)
    if(eventRanking.scoreTypes[eventRanking.scores[it1].type] != undefined)
    if(eventRanking.scoreTypes[eventRanking.scores[it1].type].calculate) {
      var formatId = eventRanking.formulae[eventRanking.challenges[eventRanking.scores[it1].challengeId].formulaId].format;
      tmpScores.push(Math.abs(eventRanking.scoreFormats[formatId].getFloat(eventRanking.scores[it1].value)));
    }
  }
  if(tmpScores.length > 0) {
    tmpScores.sort(function(a, b){return a-b});
    return tmpScores[0];
  }
  else {
    return 0;
  }
};
eventRanking.Challenge.prototype.getMaxFloatValue      = function () {
  var it1;
  var tmpScores = [];
  for(it1 in eventRanking.scores) {
    if(eventRanking.scores[it1] != undefined)
    if(eventRanking.scores[it1].challengeId == this.id)
    if(eventRanking.scoreTypes[eventRanking.scores[it1].type] != undefined)
    if(eventRanking.scoreTypes[eventRanking.scores[it1].type].calculate){
      var formatId = eventRanking.formulae[eventRanking.challenges[eventRanking.scores[it1].challengeId].formulaId].format;
      tmpScores.push(Math.abs(eventRanking.scoreFormats[formatId].getFloat(eventRanking.scores[it1].value)));
    }
  }
  tmpScores.sort(function(a, b){return b-a});
  return tmpScores[0];
};
eventRanking.Challenge.prototype.getMeanFloatValue     = function () {
  var it1;
  var tmpScores = [];
  for(it1 in eventRanking.scores) {
    if(eventRanking.scores[it1] != undefined)
    if(eventRanking.scores[it1].challengeId == this.id)
    if(eventRanking.scoreTypes[eventRanking.scores[it1].type] != undefined)
    if(eventRanking.scoreTypes[eventRanking.scores[it1].type].calculate){
      var formatId = eventRanking.formulae[eventRanking.challenges[eventRanking.scores[it1].challengeId].formulaId].format;
      tmpScores.push(Math.abs(eventRanking.scoreFormats[formatId].getFloat(eventRanking.scores[it1].value)));
    }
  }
  var scoresSum = 0;
  for (it1 in tmpScores) scoresSum += tmpScores[it1];
  return scoresSum/tmpScores.length;
};
eventRanking.Challenge.prototype.getMedianFloatValue   = function () {
  var it1;
  var tmpScores = [];
  for(it1 in eventRanking.scores) {
    if(eventRanking.scores[it1] != undefined) 
    if(eventRanking.scores[it1].challengeId == this.id) 
    if(eventRanking.scoreTypes[eventRanking.scores[it1].type] != undefined)
    if(eventRanking.scoreTypes[eventRanking.scores[it1].type].calculate){
      var formatId = eventRanking.formulae[eventRanking.challenges[eventRanking.scores[it1].challengeId].formulaId].format;
      tmpScores.push(Math.abs(eventRanking.scoreFormats[formatId].getFloat(eventRanking.scores[it1].value)));
    }
  }
  if(tmpScores.length > 0) {
    tmpScores.sort(function(a, b){return b-a});
    if(tmpScores.length%2 == 1)
      return tmpScores[(tmpScores.length-1)/2];
    if(tmpScores.length%2 == 0)
      return 0.5*(tmpScores[tmpScores.length/2]+tmpScores[tmpScores.length/2-1]);
  }
  else {
    return 0;
  }
};
eventRanking.Challenge.prototype.getPonderationFactor = function () {
//   var it1;
//   var tmpScores = [];
//   for(it1 in eventRanking.scores) {
//     if(eventRanking.scores[it1] != undefined) 
//       if(eventRanking.scoreTypes[eventRanking.scores[it1].type].calculate)
//         if(eventRanking.scores[it1].challengeId == this.id)
//           tmpScores.push(eventRanking.scores[it1].evaluate());
//   }
//   tmpScores.sort(function(a, b){return b-a});
//   if (tmpScores[0] == 0) {
//     return 0;
//   }
//   else {
//     return parseFloat(this.ptMax)/tmpScores[0];
//   }
  return parseFloat(this.ptMax); 
};



eventRanking.Team.prototype.getTotalScore = function () {
  var it1;
  var totalScore = 0;
  for (it1 in eventRanking.scores) {
    if(eventRanking.scores[it1] != undefined)
    if(eventRanking.scores[it1].teamId == this.id)
      totalScore += parseFloat(eventRanking.scores[it1].ponderatedValue);
  }
  return totalScore;
};
eventRanking.Team.prototype.getSubotalScore = function (challengeType) {
  var it1;
  var subtotalScore = 0;
  for (it1 in eventRanking.scores) {
    if(eventRanking.scores[it1] != undefined)
    if(eventRanking.scores[it1].teamId == this.id)
    if(eventRanking.challenges[eventRanking.scores[it1].challengeId] != undefined)
    if(eventRanking.challenges[eventRanking.scores[it1].challengeId].typeId == challengeType)
      subtotalScore += parseFloat(eventRanking.scores[it1].ponderatedValue);
  }
  return subtotalScore;
};


eventRanking.Score.prototype.getFloatValue    = function () {
  var formatId = eventRanking.formulae[eventRanking.challenges[this.challengeId].formulaId].format;
  return Math.abs(eventRanking.scoreFormats[formatId].getFloat(this.value));
};
eventRanking.Score.prototype.evaluate = function () {
  var formula = eventRanking.formulae[eventRanking.challenges[this.challengeId].formulaId].formula.toLowerCase()
  var min     = eventRanking.challenges[this.challengeId].getMinFloatValue();
  var max     = eventRanking.challenges[this.challengeId].getMaxFloatValue();
  var mean    = eventRanking.challenges[this.challengeId].getMeanFloatValue();
  var med     = eventRanking.challenges[this.challengeId].getMedianFloatValue();
  var players = eventRanking.challenges[this.challengeId].nbPlayers;
  var val     = parseFloat(this.getFloatValue());
  
//   console.log('test');
  
  formula = formula.replace("min", min);
  formula = formula.replace("max", max);
  formula = formula.replace("mean", mean);
  formula = formula.replace("med", med);
  formula = formula.replace("val", val);
  formula = formula.replace("players", players);
  
  
  formula = formula.replace("--", '+');
  formula = formula.replace("+-", '-');
  formula = formula.replace("-+", '-');
  formula = formula.replace("++", '+');
  formula = formula.replace("- -", '+');
  formula = formula.replace("+ -", '-');
  
  var abs  = function(value1) { return Math.abs(value1);};
  var exp  = function(value1) { return Math.exp(value1);};
  var sqrt = function(value1) { return Math.sqrt(value1);};
  var log  = function(value1) { return Math.log(value1);};
  var pow  = function(value1, value2) { return Math.pow(value1,value2);};
  var sin  = function(value1) { return Math.sin(value1);};
  var cos  = function(value1) { return Math.cos(value1);};
  var tan  = function(value1) { return Math.exp(value1);};
  var asin = function(value1) { return Math.acos(value1);};
  var acos = function(value1) { return Math.asin(value1);};
  var atan = function(value1) { return Math.atan(value1);};
  var pi   =  Math.PI;
  
  
//   console.log(formula);
  
  var value = eval(formula);
//   console.log(value);
  
 
  if (isNaN(value) || value == Infinity)  {
//     var warning_text = document.createElement('P');
//     warning_text.appendChild(document.createTextNode("Attention ! Les points de l'équipe "));
//     warning_text.appendChild(eventRanking.teams[this.teamId].getListElem());
//     warning_text.appendChild(document.createTextNode(" à l'épreuve "));
//     warning_text.appendChild(eventRanking.challenges[this.challengeId].getListElem());
//     warning_text.appendChild(document.createTextNode(" ne donnent pas un chiffre, celui-ci a été remplécé par 0."));
//     warning_text.appendChild(document.createElement('BR'));
//     warning_text.appendChild(document.createTextNode("Ceci peut mener à des résultats incohérents dans les calculs de points..."));
//     dialogBoxes.open('scoreWarning', warning_text, 'Attention ! Possible erreur d\'encodage...');
//     console.log('Warning : Le score #' +this.id+ ' est un NaN (équipe : '+eventRanking.teams[this.teamId].name+', épreuve : '+eventRanking.challenges[this.challengeId].name+').');
    value = 0;
  }
  else if (value < 0) {
//     var warning_text = document.createElement('P');
//     warning_text.appendChild(document.createTextNode("Attention ! Les points de l'équipe "));
//     warning_text.appendChild(eventRanking.teams[this.teamId].getListElem());
//     warning_text.appendChild(document.createTextNode(" à l'épreuve "));
//     warning_text.appendChild(eventRanking.challenges[this.challengeId].getListElem());
//     warning_text.appendChild(document.createTextNode(" sont négatif..."));
//     warning_text.appendChild(document.createElement('BR'));
//     warning_text.appendChild(document.createTextNode("Ceci peut mener à des résultats incohérents dans les calculs de points..."));
//     dialogBoxes.open('score'+this.id+'Warning', warning_text, 'Attention ! Possible erreur d\'encodage...');
    console.log("Attention ! Les points de l'équipe "+ eventRanking.teams[this.teamId].name + " à l'épreuve " + eventRanking.challenges[this.challengeId].name + " sont négatif.");
//     value = 0;
  }
  else if (value > 1) {
//     var warning_text = document.createElement('P');
//     warning_text.appendChild(document.createTextNode("Attention ! Les points de l'équipe "));
//     warning_text.appendChild(eventRanking.teams[this.teamId].getListElem());
//     warning_text.appendChild(document.createTextNode(" à l'épreuve "));
//     warning_text.appendChild(eventRanking.challenges[this.challengeId].getListElem());
//     warning_text.appendChild(document.createTextNode(" sont négatif..."));
//     warning_text.appendChild(document.createElement('BR'));
//     warning_text.appendChild(document.createTextNode("Ceci peut mener à des résultats incohérents dans les calculs de points..."));
//     dialogBoxes.open('score'+this.id+'Warning', warning_text, 'Attention ! Possible erreur d\'encodage...');
    console.log("Attention ! Les points de l'équipe "+ eventRanking.teams[this.teamId].name + " à l'épreuve " + eventRanking.challenges[this.challengeId].name + " sont supérieures à la valeur acceptées.");
//     value = 1;
  }
  return value;
//   return 1;
};

eventRanking.Score.prototype.getPonderatedValue = function () {
  var initScore               = eventRanking.scoreTypes[this.type].getValue(this.evaluate(), this.challengeId);
  var challengeCorrection     = eventRanking.challenges[this.challengeId].getPonderationFactor();
  var challengeTypeCorrection = eventRanking.challengeTypes[eventRanking.challenges[this.challengeId].typeId].getPonderationFactor();
    
//   console.log(initScore);
//   console.log(challengeCorrection);
//   console.log(challengeTypeCorrection);

  return initScore*challengeCorrection*challengeTypeCorrection;
};

eventRanking.repairScores   = function() {
  var it1,it2;
  for(it1 in eventRanking.scores) {
    if(eventRanking.scores[it1] != undefined) {
      if(eventRanking.scores[it1].eventId != eventRanking.actualEventId || eventRanking.teams[eventRanking.scores[it1].teamId] == undefined || eventRanking.challenges[eventRanking.scores[it1].challengeId] == undefined)
        eventRanking.scores.splice(it1, 1);
    }
  }
  var orderedScores = eventRanking.getScoresTeamChallenge();
  for(it1 in eventRanking.teams) {
    for(it2 in eventRanking.challenges) {
      if(eventRanking.teams[it1] != undefined && eventRanking.challenges[it2] != undefined) {
        if(orderedScores[it1] == undefined) {
          var value = eventRanking.formulae[this.challenges[it2].formulaId].getFormatedValue();
          eventRanking.addScore("", it1, it2, value, 'normal');
        }
        else if(orderedScores[it1][it2] == undefined) {
          var value = eventRanking.formulae[this.challenges[it2].formulaId].getFormatedValue();
          eventRanking.addScore("", it1, it2, value, 'normal');
        }
      }
    }
  }
};

eventRanking.refreshScores = function() {
  console.log('test');
  var it1;
  for(it1 in eventRanking.scores) {
    if(eventRanking.scores[it1] != undefined) {
      eventRanking.scores[it1].ponderatedValue = eventRanking.scores[it1].getPonderatedValue();
    }
  }
};


eventRanking.setScoresToFormulaFormat =  function (formulaId, newFormatId) {
  if(eventRanking.formulae[formulaId] != undefined) {
    var oldFormatId = eventRanking.formulae[formulaId].format
    if(oldFormatId != newFormatId && eventRanking.scoreFormats[oldFormatId] != undefined && eventRanking.scoreFormats[newFormatId] != undefined) {
      var it1;
      for(it1 in eventRanking.scores) {
        if(eventRanking.challenges[eventRanking.scores[it1].challengeId].formulaId == formulaId) {
          eventRanking.scores[it1].value = eventRanking.scoreFormats[newFormatId].getFormatedValue(eventRanking.scoreFormats[oldFormatId].getFloat(eventRanking.scores[it1].value));
        }
      }
      return true;
    }
  }
  return false;
};

eventRanking.setScoresToChallengeFormula =  function (challengeId, newFormulaId) {
  if(eventRanking.challenges[challengeId] != undefined) {
    var oldFormulaId = eventRanking.challenges[challengeId].formulaId;
    if(oldFormulaId != newFormulaId) 
    if(eventRanking.formulae[oldFormulaId] != undefined && eventRanking.formulae[oldFormulaId] != undefined) {
      var oldFormatId = eventRanking.formulae[oldFormulaId].format;
      var newFormatId = eventRanking.formulae[newFormulaId].format;
      if(oldFormatId != newFormatId) 
      if(oldFormatId != newFormatId && eventRanking.scoreFormats[oldFormatId] != undefined && eventRanking.scoreFormats[newFormatId] != undefined) {
        var it1;
        for(it1 in eventRanking.scores)
          if(eventRanking.scores[it1].challengeId == challengeId)
            eventRanking.scores[it1].value = eventRanking.scoreFormats[newFormatId].getFormatedValue(eventRanking.scoreFormats[oldFormatId].getFloat(eventRanking.scores[it1].value));
        return true;
      }
    }
  }
  return false;
};

