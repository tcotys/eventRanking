
eventRanking.scoreFilters.createScoresTable = function() {
  var it1, it2;
  var orderedTeams          = eventRanking.getOrderedTeams();
  var orderedChallenges     = eventRanking.getOrderedChallenges();
  var orderedChallengeTypes = eventRanking.getOrderedChallengeTypes();
  var orderedScores         = eventRanking.getScoresTeamChallenge();
  var nbTeams               = orderedTeams.length;
  var nbChallenges          = orderedChallenges.length;
  var nbChallengesTypes     = orderedChallengeTypes.length;
  var scoreTable            = [];
  var scoreFixedValues      = [];
  
//   for(it2 = 1; it2 < nbChallenges; it2++) {
//     
//     scoreFixedValues[it2] = {
//       'min'     : eventRanking.challenges[orderedChallenges[it2].id].getMinFloatValue(),
//       'max'     : eventRanking.challenges[orderedChallenges[it2].id].getMaxFloatValue(),
//       'mean'    : eventRanking.challenges[orderedChallenges[it2].id].getMeanFloatValue(),
//       'med'     : eventRanking.challenges[orderedChallenges[it2].id].getMedianFloatValue()
//     }
//   }
  
  for(it1 = 1; it1<nbTeams; it1++) {
    scoreTable[it1] = {
      'id'         : orderedTeams[it1].id,
      'pos'        : orderedTeams[it1].pos,
      'name'       : orderedTeams[it1].name,
      'elem'       : orderedTeams[it1].getTableNameElem(),
      'titleElem'  : orderedTeams[it1].getTableTitleElem(),
//       'total'      : (eventRanking.graphics.fastDisplay || eventRanking.graphics.tableSubview != 'view')?0:orderedTeams[it1].getTotalScore(),
      'total'      : orderedTeams[it1].getTotalScore(),
      'totalElem'  : orderedTeams[it1].getTableTotalElem(),
      'totalTitle' : orderedTeams[it1].getTableTotalTitleElem(),
//       'totalElem'  : document.createTextNode(orderedTeams[it1].getTotalScore().toFixed(0)),
      'challenges' : [],
      'subtotals'  : []
    }
    for(it2 = 1; it2 < nbChallenges; it2++) {
      // This is the parte that have to be modified in order to apply filters
//       var challengeId = orderedChallenges[it2].pos;
      var challengeId = orderedChallenges[it2].id;
//       var tmpScore = (eventRanking.graphics.fastDisplay || eventRanking.graphics.tableSubview != 'view')?0:orderedScores[orderedTeams[it1].id][orderedChallenges[it2].id].ponderatedValue;
      var tmpScore = orderedScores[orderedTeams[it1].id][orderedChallenges[it2].id].ponderatedValue;
      scoreTable[it1].challenges[challengeId] = {
        'id'       : orderedChallenges[it2].id,
        'pos'      : orderedChallenges[it2].pos,
        'name'     : orderedChallenges[it2].name,
        'elem'     : orderedChallenges[it2].getTableTitleElem(),
        'score'    : tmpScore,
        'viewElem' : orderedScores[orderedTeams[it1].id][orderedChallenges[it2].id].getTableViewElem(tmpScore),
        'editElem' : orderedScores[orderedTeams[it1].id][orderedChallenges[it2].id].getTableEditElem(),
        'typeElem' : orderedScores[orderedTeams[it1].id][orderedChallenges[it2].id].getTableTypeElem()
      };
    };
    for(it2 = 1; it2 < nbChallengesTypes; it2++) {
      // This is the parte that have to be modified in order to apply filters
      var subtotalId = orderedChallengeTypes[it2].id;
//       var subtotalId = orderedChallengeTypes[it2].pos;
      scoreTable[it1].subtotals[subtotalId] = {
        'id'       : orderedChallengeTypes[it2].id,
        'pos'      : orderedChallengeTypes[it2].pos,
        'name'     : orderedChallengeTypes[it2].name,
        'elem'     : orderedChallengeTypes[it2].getTableTitleElem(),
//         'score'    : (eventRanking.graphics.fastDisplay || eventRanking.graphics.tableSubview != 'view')?0:orderedTeams[it1].getSubotalScore(orderedChallengeTypes[it2].id),
        'score'    : orderedTeams[it1].getSubotalScore(orderedChallengeTypes[it2].id),
        'viewElem' : orderedTeams[it1].getTableSubtotalElem(orderedChallengeTypes[it2].id)
//         'viewElem' : document.createTextNode(orderedTeams[it1].getSubotalScore(orderedChallengeTypes[it2].id).toFixed(0))
      };
    };
  };
  return scoreTable;
};

eventRanking.scoreFilters.sortRankingTable = function(unsortedTable){
  // Sorting teams
  if(eventRanking.graphics.ordering == 'teamNum')  unsortedTable.sort(function(a, b){return parseInt(a.pos)-parseInt(b.pos)});
  if(eventRanking.graphics.ordering == 'teamName') unsortedTable.sort(
    function (a, b) {
      if(a.name < b.name) return -1;
      if(a.name > b.name) return 1;
      return 0;
    });
  if(eventRanking.graphics.ordering == 'total')    unsortedTable.sort(function(a, b){return b.total-a.total});
  if(eventRanking.graphics.ordering.substr(0,9) == 'challenge')  unsortedTable.sort(
    function(a, b){
      var id = parseInt(eventRanking.graphics.ordering.substr(9));
      return b.challenges[id].score-a.challenges[id].score;
    });
  if(eventRanking.graphics.ordering.substr(0,8) == 'subtotal')   unsortedTable.sort(
    function(a, b){
      var id = parseInt(eventRanking.graphics.ordering.substr(8));
      return b.subtotals[id].score-a.subtotals[id].score;
    });
  
  if(eventRanking.scoreFilters.reversedTeamOrder) unsortedTable.reverse();
  
  if(unsortedTable[0] == undefined) unsortedTable.shift();
  return unsortedTable;
};


eventRanking.scoreFilters.orderChallenges = function(unsortedTable) {
  // Sorting challenges
  var it1;
  for (it1 = 0; it1 < unsortedTable.length; it1++) {
    if(unsortedTable[it1] != undefined) {
      if(eventRanking.scoreFilters.reversedChallengeOrder) {
        unsortedTable[it1].challenges.sort(function(a,b) {return b.pos-a.pos;});
      }
      else {
        unsortedTable[it1].challenges.sort(function(a,b) {return a.pos-b.pos;});
      }
      if (eventRanking.scoreFilters.reverseCategoryOrder) {
        unsortedTable[it1].subtotals.sort( function(a,b) {return b.pos-a.pos;});
      }
      else {
        unsortedTable[it1].subtotals.sort( function(a,b) {return a.pos-b.pos;});
      }
    }
  }
  
  // Recreating new form of table structure, easier to reorder and filter...
  var sortedTable = [];
  var it1,it2;
  for(it1 = 0; it1< unsortedTable.length; it1++) {
    if(unsortedTable[it1] != undefined) {
      var nbChallenges = eventRanking.getMaxId(unsortedTable[it1].challenges);
      var nbChallengeTypes = eventRanking.getMaxId(unsortedTable[it1].subtotals);
      sortedTable[it1] = {
        team : {
          id        : unsortedTable[it1].id,
          group     : eventRanking.groups[eventRanking.teams[unsortedTable[it1].id].group].id,
          category  : eventRanking.categories[eventRanking.groups[eventRanking.teams[unsortedTable[it1].id].group].category].id,
          pos       : unsortedTable[it1].pos,
          name      : unsortedTable[it1].name,
          tableElem : unsortedTable[it1].elem,
          titleElem : unsortedTable[it1].titleElem,
        },
        scores : []
      };
      if(eventRanking.scoreFilters.showChallenges == true) {
        for (it2 = 0; it2 < nbChallenges; it2++) {
          if(unsortedTable[it1].challenges[it2] != undefined) {
            var thisChallengePos     = unsortedTable[it1].challenges[it2].pos;
            var thisChallengeTypePos = eventRanking.challengeTypes[eventRanking.challenges[unsortedTable[it1].challenges[it2].id].typeId].pos;
            sortedTable[it1].scores[it2]  = {
              id               : it2,
              elemType         : 'challenge',
              challengeId      : unsortedTable[it1].challenges[it2].id,
              challengeTypeId  : eventRanking.challenges[unsortedTable[it1].challenges[it2].id].typeId,
              challengePos     : eventRanking.scoreFilters.reversedChallengeOrder?(nbChallenges-thisChallengePos):thisChallengePos,
              challengeTypePos : eventRanking.scoreFilters.reversedChallengeTypeOrder?(nbChallengeTypes-thisChallengeTypePos):thisChallengeTypePos,
              name             : unsortedTable[it1].challenges[it2].name,
              value            : unsortedTable[it1].challenges[it2].score,
              titleElem        : unsortedTable[it1].challenges[it2].elem,
              viewElem         : unsortedTable[it1].challenges[it2].viewElem,
              editElem         : unsortedTable[it1].challenges[it2].editElem,
              typeElem         : unsortedTable[it1].challenges[it2].typeElem
            };
          }
        }
      }
      if(eventRanking.scoreFilters.showChallengeTypes == true) {
        for (it2=0; it2<nbChallengeTypes; it2++) {
          var thisChallengeTypePos = unsortedTable[it1].subtotals[it2].pos;
          if(unsortedTable[it1].subtotals[it2] != undefined) {
            sortedTable[it1].scores[nbChallenges+it2] = {
              id               : nbChallenges+it2,
              elemType         : 'challengeType',
              challengeId      : -1,
              challengeTypeId  : unsortedTable[it1].subtotals[it2].id,
              challengePos     : -1,
              challengeTypePos : eventRanking.scoreFilters.reversedChallengeTypeOrder?(nbChallengeTypes-thisChallengeTypePos):thisChallengeTypePos,
              name             : unsortedTable[it1].subtotals[it2].name,
              value            : unsortedTable[it1].subtotals[it2].score,
              titleElem        : unsortedTable[it1].subtotals[it2].elem,
              viewElem         : unsortedTable[it1].subtotals[it2].viewElem,
              editElem         : undefined,
              typeElem         : undefined
            };
          }
        }
      }
      if(eventRanking.scoreFilters.showTotal == true) {
        sortedTable[it1].scores[nbChallenges+nbChallengeTypes] = {
          id               : nbChallenges+nbChallengeTypes,
          elemType         : 'total',
          challengeTypeId  : -1,
          challengeId      : -1,
          challengePos     : -1,
          challengeTypePos : -1,
          name             : 'Total',
          value            : unsortedTable[it1].total,
          titleElem        : unsortedTable[it1].totalTitle,
          viewElem         : unsortedTable[it1].totalElem,
          editElem         : undefined,
          typeElem         : undefined
        };
      }
    }
  }
  for(it1 = 0; it1< unsortedTable.length; it1++) {
    if(unsortedTable[it1] != undefined) {
      sortedTable[it1].scores.sort(eventRanking.scoreFilters.challengeOrderFcts[eventRanking.scoreFilters.challengeOrder].getReorder);
    }
  }
//   console.log(sortedTable);
  return sortedTable;
};


eventRanking.scoreFilters.hideElements = function(unsortedTable) {
  var it1, it2;
  var nbTeams = unsortedTable.length;
  for(it1 = 0; it1<nbTeams; it1++) {
    if(unsortedTable[it1] != undefined) {
      var hideTeam = eventRanking.scoreFilters.hiddenCategories.indexOf(unsortedTable[it1].team.category) != -1;
      while (hideTeam) {
	unsortedTable.splice(it1,1);
	if(unsortedTable[it1] != undefined){
          hideTeam = eventRanking.scoreFilters.hiddenCategories.indexOf(unsortedTable[it1].team.category) != -1;
	}
        else {
	  hideTeam = false;
	}
      }
    }
    if(unsortedTable[it1] != undefined) {
      var nbChallenges = unsortedTable[it1].scores.length;
      for(it2 = 0; it2 < nbChallenges; it2++) {
        if(unsortedTable[it1].scores[it2] != undefined) {
          var hideChallenge = eventRanking.scoreFilters.hiddenChallengeTypes.indexOf(unsortedTable[it1].scores[it2].challengeTypeId) != -1;
	  while (hideChallenge) {
	    unsortedTable[it1].scores.splice(it2,1);
	    if(unsortedTable[it1].scores[it2] != undefined) {
	      hideChallenge = eventRanking.scoreFilters.hiddenChallengeTypes.indexOf(unsortedTable[it1].scores[it2].challengeTypeId) != -1;
	    }
	    else {
	      hideChallenge = false;
	    }
	  }
	}
      }
    }
  }
  
  
  //  eventRanking.scoreFilters.hiddenChallengeTypes        = [];
  //  eventRanking.scoreFilters.hiddenCategories            = [];
  //  var nbHiddenChallengeTypes = eventRanking.scoreFilters.hiddenChallengeTypes.length;
  // for (it1 = 0; it1 < it1_max; it1++) {
  //   if(eventRanking.scoreFilters.hiddenCategories[it1] != undefined)
  //     deteting bad entries : while(array.indexOf() >=0 ) array.splice(array.indexOf(), 1);
//   console.log(unsortedTable);
  return unsortedTable;
}
  