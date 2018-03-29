
eventRanking.graphics.refresh = function (){
  var list = document.body;
  // As long as "list" has a child node, remove it
  while (list.hasChildNodes()) {  
      list.removeChild(list.firstChild);
  }
  
  var eHeader = document.createElement('header');
  var eH1     = document.createElement('h1');
  var eH2     = document.createElement('h2');
  var eNav    = document.createElement('nav');
  var eUl1    = document.createElement('ul');
  var eUl2    = document.createElement('ul');
  
  var eLi11 = document.createElement('li');
  var eLi12 = document.createElement('li');
  var eLi13 = document.createElement('li');
  var eLi14 = document.createElement('li');
  var eLi15 = document.createElement('li');
  
  var eLi21 = document.createElement('li');
  var eLi22 = document.createElement('li');
  var eLi23 = document.createElement('li');
  var eLi24 = document.createElement('li');
  var eLi25 = document.createElement('li');
  var eLi26 = document.createElement('li');
  var eLi27 = document.createElement('li');
  
  eH1.appendChild(document.createTextNode(eventRanking.eventsInfo.name));
  eH2.appendChild(document.createTextNode("Classement"));
  
  eUl1.className = "lineList";
  eUl2.className = "columnList";
  
  eLi11.appendChild(document.createTextNode("Nouveau"));
  eLi11.className = 'button new';
  eLi11.onclick = eventRanking.storage.newEvent;
  eLi12.appendChild(document.createTextNode("Ouvrir"));
  eLi12.className = 'button open';
  eLi12.onclick = function() {dialogBoxes.open("openFileForm", eventRanking.storage.openForm(), "Sélectionnez le fichier de classement (.json)")};
  eLi13.appendChild(document.createTextNode("Sauvegarder"));
  eLi13.className = 'button save';
  eLi13.onclick = eventRanking.storage.saveEvent;
  eLi14.appendChild(document.createTextNode("Informations"));
  eLi14.className = 'button info';
  eLi14.onclick = function() {dialogBoxes.open("editEventInfo", eventRanking.eventsInfo.getFormElem(), "Information à propos de l'événement");};
  eLi15.appendChild(document.createTextNode("Undo"));
  eLi15.className = 'button undo';
  eLi15.onclick = eventRanking.storage.undo;
  
  eLi21.appendChild(document.createTextNode("Types d'épreuves"));
  if(eventRanking.graphics.actualPage == "ChallengeTypesList") eLi21.className = "selectedTab";
  eLi21.onclick = function() {    eventRanking.graphics.actualPage = "ChallengeTypesList";  eventRanking.graphics.refresh();  };
  eLi22.appendChild(document.createTextNode("Épreuves"));
  if(eventRanking.graphics.actualPage == "ChallengesList")     eLi22.className = "selectedTab";
  eLi22.onclick = function() {    eventRanking.graphics.actualPage = "ChallengesList";          eventRanking.graphics.refresh();  };
  eLi23.appendChild(document.createTextNode("Catégories"));
  if(eventRanking.graphics.actualPage == "CategoriesList")     eLi23.className = "selectedTab";
  eLi23.onclick = function() {    eventRanking.graphics.actualPage = "CategoriesList";      eventRanking.graphics.refresh();  };
  eLi24.appendChild(document.createTextNode("Troupes/Compagnies"));
  if(eventRanking.graphics.actualPage == "GroupsList")         eLi24.className = "selectedTab";
  eLi24.onclick = function() {    eventRanking.graphics.actualPage = "GroupsList";          eventRanking.graphics.refresh();  };
  eLi25.appendChild(document.createTextNode("Équipes"));
  if(eventRanking.graphics.actualPage == "TeamsList")          eLi25.className = "selectedTab";
  eLi25.onclick = function() {    eventRanking.graphics.actualPage = "TeamsList";          eventRanking.graphics.refresh();  };
  eLi26.appendChild(document.createTextNode("Formules"));
  if(eventRanking.graphics.actualPage == "FormulaeList")       eLi26.className = "selectedTab";
  eLi26.onclick = function() {    eventRanking.graphics.actualPage = "FormulaeList";          eventRanking.graphics.refresh();  };
  eLi27.appendChild(document.createTextNode("Grille de points"));
  if(eventRanking.graphics.actualPage == "ScoreGrid" || eventRanking.graphics.actualPage == "main")       eLi27.className = "selectedTab";
  eLi27.onclick = function() {    eventRanking.graphics.actualPage = "ScoreGrid";           eventRanking.graphics.refresh();  };
  
  if(eventRanking.graphics.displayOnly != true)
    eUl1.appendChild(eLi11);
  eUl1.appendChild(eLi12);
  if(eventRanking.graphics.displayOnly != true)
    eUl1.appendChild(eLi13);
  eUl1.appendChild(eLi14);
  if(eventRanking.graphics.displayOnly != true)
    eUl1.appendChild(eLi15);
  
  eUl2.appendChild(eLi27);
  eUl2.appendChild(eLi21);
  eUl2.appendChild(eLi22);
  eUl2.appendChild(eLi26);
  eUl2.appendChild(eLi23);
  eUl2.appendChild(eLi24);
  eUl2.appendChild(eLi25);
  
  eNav.appendChild(eUl1);
  if(eventRanking.graphics.displayOnly != true)
    eNav.appendChild(eUl2);
  
  eHeader.appendChild(eH1);
  eHeader.appendChild(eH2);
  eHeader.appendChild(eNav);
  
  if(eventRanking.graphics.displayOnly == true) eventRanking.graphics.actualPage   = "ScoreGrid";
  if(eventRanking.graphics.displayOnly == true) eventRanking.graphics.tableSubview = 'view';
    
  var eSection   = document.createElement('section');
  var eSectionH1 = document.createElement('h1');
  var eArticle   = document.createElement('article');
  switch (eventRanking.graphics.actualPage){ 
    case "main" :
      eventRanking.repairScores();
      eventRanking.refreshScores();
      eSectionH1.appendChild(document.createTextNode("Grille de points"));
      eArticle.appendChild(eventRanking.graphics.menuScores());
      eArticle.appendChild(eventRanking.graphics.tableScores());
      eArticle.className = "noTopMargin";
//       eSectionH1.appendChild(document.createTextNode('Test Page'));
//       eArticle.appendChild(document.createTextNode("Hello World"));
    break;
    case "FormulaeList" :
      eSectionH1.appendChild(document.createTextNode("Liste de formules pour le comptage des points"));
      eArticle.appendChild(eventRanking.graphics.listFormulae());
    break;
    case "ChallengeTypesList" :
      eSectionH1.appendChild(document.createTextNode("Liste des Types d'épreuves"));
      eArticle.appendChild(eventRanking.graphics.listChallengeTypes());
    break;
    case "ChallengesList" :
      eSectionH1.appendChild(document.createTextNode("Liste des épreuves"));
      eArticle.appendChild(eventRanking.graphics.listChallenges());
    break;
    case "CategoriesList" :
      eSectionH1.appendChild(document.createTextNode("Liste des catégories"));
      eArticle.appendChild(eventRanking.graphics.listCategories());
    break;
    case "GroupsList" :
      eSectionH1.appendChild(document.createTextNode("Liste des troupes/compagnies"));
      eArticle.appendChild(eventRanking.graphics.listGroups());
    break;
    case "TeamsList" :
      eSectionH1.appendChild(document.createTextNode("Liste des équipes"));
      eArticle.appendChild(eventRanking.graphics.listTeams());
    break;
    case "ScoreGrid" :
      eventRanking.repairScores();
      eventRanking.refreshScores();
      eSectionH1.appendChild(document.createTextNode("Grille de points"));
      eArticle.appendChild(eventRanking.graphics.menuScores());
      eArticle.appendChild(eventRanking.graphics.tableScores());
      eArticle.className = "noTopMargin";
    break;
    default :
      eSectionH1.appendChild(document.createTextNode('Test Page'));
      eArticle.appendChild(document.createTextNode("Hello World"));
    break;
  }
  eSection.appendChild(eSectionH1);
  eSection.appendChild(eArticle);
  
  document.body.appendChild(eHeader);
  document.body.appendChild(eSection);
};


eventRanking.graphics.listFormulae = function() {
  var it1;
  var ulFormulae = document.createElement('ul');
  var formulaeOrdered = eventRanking.getOrderedFormulae();
  for(it1 = 1; it1 < eventRanking.getNewPos(formulaeOrdered); it1++) {
    var id = formulaeOrdered[it1].id;
    var liFormula = document.createElement('li');
    var spanFormula = formulaeOrdered[it1].getListElem();
    
    var aMoveUp          = document.createElement('a');
    aMoveUp.dataset.id   = id;
    aMoveUp.className    = 'button moveup';
    aMoveUp.appendChild(document.createTextNode('moveup'));
    aMoveUp.onclick      = eventRanking.graphics.moveUpFormula;
    
    var aMoveDown        = document.createElement('a');
    aMoveDown.className  = 'button movedown';
    aMoveDown.dataset.id = id;
    aMoveDown.onclick    = eventRanking.graphics.moveDownFormula;
    aMoveDown.appendChild(document.createTextNode('movedown'));
    
    
    var aEdit            = document.createElement('a');
    aEdit.dataset.id     = id;
    aEdit.className      = 'button edit';
    aEdit.appendChild(document.createTextNode('edit'));
    aEdit.onclick        = eventRanking.graphics.openEditFormula;
    
    var aDelete = document.createElement('a');
    aDelete.dataset.id   = id;
    aDelete.className    = 'button delete';
    aDelete.appendChild(document.createTextNode('delete'));
    aDelete.onclick = eventRanking.graphics.deleteFormulaEvent;
    
    spanFormula.appendChild(aMoveUp);
    spanFormula.appendChild(aMoveDown);
    spanFormula.appendChild(aEdit);
    spanFormula.appendChild(aDelete);
    liFormula.appendChild(spanFormula);
    ulFormulae.appendChild(liFormula);
  }
  var liLink = document.createElement('li');
  var aLink  = document.createElement('a');
  aLink.onclick = function() {
    var tmp;
    var newFormula = new eventRanking.Formula("0", "", "", "Pondération simple", "VAL/MAX", "float");
    dialogBoxes.open('newChallengeType', newFormula.getFormElem(), "Nouvelle formule");
  };
  aLink.appendChild(document.createTextNode("nouveau"));
  liLink.appendChild(aLink);
  
  ulFormulae.appendChild(liLink);
  return ulFormulae;
};
eventRanking.graphics.listChallengeTypes = function() {
  var it1;
  var ulChallengeTypes = document.createElement('ul');
  var challengeTypesOrdered = eventRanking.getOrderedChallengeTypes();
  for(it1 = 1; it1 < eventRanking.getNewPos(challengeTypesOrdered); it1++) {
    var id = challengeTypesOrdered[it1].id;
    var liChallengeType = document.createElement('li');
    var spanChallengeType = challengeTypesOrdered[it1].getListElem();
    
    var aMoveUp          = document.createElement('a');
    aMoveUp.dataset.id   = id;
    aMoveUp.className    = 'button moveup';
    aMoveUp.appendChild(document.createTextNode('moveup'));
    aMoveUp.onclick      = eventRanking.graphics.moveUpChallengeType;
    
    var aMoveDown        = document.createElement('a');
    aMoveDown.className  = 'button movedown';
    aMoveDown.dataset.id = id;
    aMoveDown.onclick    = eventRanking.graphics.moveDownChallengeType;
    aMoveDown.appendChild(document.createTextNode('movedown'));
    
    
    var aEdit            = document.createElement('a');
    aEdit.dataset.id     = id;
    aEdit.className      = 'button edit';
    aEdit.appendChild(document.createTextNode('edit'));
    aEdit.onclick        = eventRanking.graphics.openEditChallengeType;
    
    var aDelete = document.createElement('a');
    aDelete.dataset.id   = id;
    aDelete.className    = 'button delete';
    aDelete.appendChild(document.createTextNode('delete'));
    aDelete.onclick = eventRanking.graphics.deleteChallengeTypeEvent;
    
    spanChallengeType.appendChild(aMoveUp);
    spanChallengeType.appendChild(aMoveDown);
    spanChallengeType.appendChild(aEdit);
    spanChallengeType.appendChild(aDelete);
    liChallengeType.appendChild(spanChallengeType);
    ulChallengeTypes.appendChild(liChallengeType);
  }
  var liLink = document.createElement('li');
  var aLink  = document.createElement('a');
  aLink.onclick = function() {
    var tmp;
    var newChallengeType = new eventRanking.ChallengeType("0", "", "", "3e jours", "Le moment relax de fin de Mafeking", '100', '#7FFFD4');
    dialogBoxes.open('newChallengeType', newChallengeType.getFormElem(), "Nouveau type d'épreuve");
  };
  aLink.appendChild(document.createTextNode("nouveau"));
  liLink.appendChild(aLink);
  
  ulChallengeTypes.appendChild(liLink);
  return ulChallengeTypes;
};
eventRanking.graphics.listChallenges = function() {
  var it1;
  var ulChallengeslist = document.createElement('ul');
  var challengesOrdered = eventRanking.getOrderedChallenges();
  for(it1 = 1; it1 < eventRanking.getNewPos(challengesOrdered); it1++) {
    var id = challengesOrdered[it1].id;
    var liChallenge = document.createElement('li');
    var spanChallenge = challengesOrdered[it1].getListElem2();
    
    var aMoveUp          = document.createElement('a');
    aMoveUp.dataset.id   = id;
    aMoveUp.className    = 'button moveup';
    aMoveUp.appendChild(document.createTextNode('moveup'));
    aMoveUp.onclick      = eventRanking.graphics.moveUpChallenge;
    
    var aMoveDown        = document.createElement('a');
    aMoveDown.className  = 'button movedown';
    aMoveDown.dataset.id = id;
    aMoveDown.onclick    = eventRanking.graphics.moveDownChallenge;
    aMoveDown.appendChild(document.createTextNode('movedown'));
    
    
    var aEdit            = document.createElement('a');
    aEdit.dataset.id     = id;
    aEdit.className      = 'button edit';
    aEdit.appendChild(document.createTextNode('edit'));
    aEdit.onclick        = eventRanking.graphics.openEditChallenge;
    
    var aDelete = document.createElement('a');
    aDelete.dataset.id   = id;
    aDelete.className    = 'button delete';
    aDelete.appendChild(document.createTextNode('delete'));
    aDelete.onclick = eventRanking.graphics.deleteChallengeEvent;
    
    spanChallenge.appendChild(aMoveUp);
    spanChallenge.appendChild(aMoveDown);
    spanChallenge.appendChild(aEdit);
    spanChallenge.appendChild(aDelete);
    liChallenge.appendChild(spanChallenge);
    ulChallengeslist.appendChild(liChallenge);
  }
  var liLink = document.createElement('li');
  var aLink  = document.createElement('a');
  aLink.onclick = function() {
    var tmp;
    var newChallenge = new eventRanking.Challenge("0", "", "", "Karting", "1", 1, 1);
    dialogBoxes.open('newChallengeType', newChallenge.getFormElem(), "Nouvelle épreuve");
  };
  aLink.appendChild(document.createTextNode("nouveau"));
  liLink.appendChild(aLink);
  
  ulChallengeslist.appendChild(liLink);
  return ulChallengeslist;
};
eventRanking.graphics.listCategories = function() {
  var it1;
  var ulCategoriesList = document.createElement('ul');
  var orderedCategories = eventRanking.getOrderedCategories();
  for(it1 = 1; it1 < eventRanking.getNewPos(orderedCategories); it1++) {
    var id = orderedCategories[it1].id;
    var liCategory = document.createElement('li');
    var spanCategory = orderedCategories[it1].getListElem();
    
    var aMoveUp        = document.createElement('a');
    aMoveUp.dataset.id = id;
    aMoveUp.className  = 'button moveup';
    aMoveUp.appendChild(document.createTextNode('moveup'));
    aMoveUp.onclick    = eventRanking.graphics.moveUpCategory;
    
    var aMoveDown        = document.createElement('a');
    aMoveDown.dataset.id = id;
    aMoveDown.className  = 'button movedown';
    aMoveDown.appendChild(document.createTextNode('movedown'));
    aMoveDown.onclick    = eventRanking.graphics.moveDownCategory;
    
    var aEdit = document.createElement('a');
    aEdit.dataset.id = id;
    aEdit.className  = 'button edit';
    aEdit.appendChild(document.createTextNode('edit'));
    aEdit.onclick = eventRanking.graphics.openEditCategory;
    
    var aDelete = document.createElement('a');
    aDelete.dataset.id = id;
    aDelete.className  = 'button delete';
    aDelete.appendChild(document.createTextNode('delete'));
    aDelete.onclick = eventRanking.graphics.deleteCategoryEvent;
    
    spanCategory.appendChild(aMoveUp);
    spanCategory.appendChild(aMoveDown);
    spanCategory.appendChild(aEdit);
    spanCategory.appendChild(aDelete);
    liCategory.appendChild(spanCategory);
    ulCategoriesList.appendChild(liCategory);
  }
  var liLink = document.createElement('li');
  var aLink  = document.createElement('a');
  aLink.onclick = function() {
    var tmp;
    var newCategory = new eventRanking.Category("0", "", "", "Scouts", '#B0C4DE');
    dialogBoxes.open('newCategory', newCategory.getFormElem(), 'Nouvelle catégorie');
  };
  aLink.appendChild(document.createTextNode("nouveau"));
  liLink.appendChild(aLink);
  
  ulCategoriesList.appendChild(liLink);
  return ulCategoriesList;
};
eventRanking.graphics.listGroups = function() {
  var it1;
  var ulGroupsList = document.createElement('ul');
  var orderedGroups = eventRanking.getOrderedGroups();
  for(it1 = 1; it1 < eventRanking.getNewPos(orderedGroups); it1++) {
    var id = orderedGroups[it1].id;
    var liGroups = document.createElement('li');
    var spanGroups = orderedGroups[it1].getListElem();
    
    var aMoveUp        = document.createElement('a');
    aMoveUp.dataset.id = id;
    aMoveUp.className  = 'button moveup';
    aMoveUp.appendChild(document.createTextNode('moveup'));
    aMoveUp.onclick    = eventRanking.graphics.moveUpGroup;
    
    var aMoveDown        = document.createElement('a');
    aMoveDown.dataset.id = id;
    aMoveDown.className  = 'button movedown';
    aMoveDown.appendChild(document.createTextNode('movedown'));
    aMoveDown.onclick    = eventRanking.graphics.moveDownGroup;
    
    var aEdit = document.createElement('a');
    aEdit.dataset.id = id;
    aEdit.className  = 'button edit';
    aEdit.appendChild(document.createTextNode('edit'));
    aEdit.onclick = eventRanking.graphics.openEditGroup;
    
    var aDelete = document.createElement('a');
    aDelete.dataset.id = id;
    aDelete.className  = 'button delete';
    aDelete.appendChild(document.createTextNode('delete'));
    aDelete.onclick = eventRanking.graphics.deleteGroupEvent;
    
    spanGroups.appendChild(aMoveUp);
    spanGroups.appendChild(aMoveDown);
    spanGroups.appendChild(aEdit);
    spanGroups.appendChild(aDelete);
    liGroups.appendChild(spanGroups);
    ulGroupsList.appendChild(liGroups);
  }
  var liLink = document.createElement('li');
  var aLink  = document.createElement('a');
  aLink.onclick = function() {
    var tmp;
    var newGroup = new eventRanking.Group("0", "", "", "La Malaise", "SV042", 1, "Les grosses nouilles") 
    dialogBoxes.open('newCategory', newGroup.getFormElem(), 'Nouvelle troupe/compagnie');
  };
  aLink.appendChild(document.createTextNode("nouveau"));
  liLink.appendChild(aLink);
  
  ulGroupsList.appendChild(liLink);
  return ulGroupsList;
};
eventRanking.graphics.listTeams = function() {
  var it1;
  var ulTeamsList = document.createElement('ul');
  var orderedTeams = eventRanking.getOrderedTeams();
  for(it1 = 1; it1 < eventRanking.getNewPos(orderedTeams); it1++) {
    var id = orderedTeams[it1].id;
    var liTeams = document.createElement('li');
    var spanTeams = orderedTeams[it1].getListElem();
    
    var aMoveUp        = document.createElement('a');
    aMoveUp.dataset.id = id;
    aMoveUp.className  = 'button moveup';
    aMoveUp.appendChild(document.createTextNode('moveup'));
    aMoveUp.onclick    = eventRanking.graphics.moveUpTeam;
    
    var aMoveDown        = document.createElement('a');
    aMoveDown.dataset.id = id;
    aMoveDown.className  = 'button movedown';
    aMoveDown.appendChild(document.createTextNode('movedown'));
    aMoveDown.onclick    = eventRanking.graphics.moveDownTeam;
    
    var aEdit = document.createElement('a');
    aEdit.dataset.id = id;
    aEdit.className  = 'button edit';
    aEdit.appendChild(document.createTextNode('edit'));
    aEdit.onclick = eventRanking.graphics.openEditTeam;
    
    var aDelete = document.createElement('a');
    aDelete.dataset.id = id;
    aDelete.className  = 'button delete';
    aDelete.appendChild(document.createTextNode('delete'));
    aDelete.onclick = eventRanking.graphics.deleteTeamEvent;
    
    spanTeams.appendChild(aMoveUp);
    spanTeams.appendChild(aMoveDown);
    spanTeams.appendChild(aEdit);
    spanTeams.appendChild(aDelete);
    liTeams.appendChild(spanTeams);
    ulTeamsList.appendChild(liTeams);
  }
  var liLink = document.createElement('li');
  var aLink  = document.createElement('a');
  aLink.onclick = function() {
    var tmp;
    var newTeam = new eventRanking.Team("0", "", "", "Loutre", 1, 7) 
    dialogBoxes.open('newCategory', newTeam.getFormElem(), 'Nouvelle équipe');
  };
  aLink.appendChild(document.createTextNode("nouveau"));
  liLink.appendChild(aLink);
  
  ulTeamsList.appendChild(liLink);
  return ulTeamsList;
};


eventRanking.graphics.menuScores = function() {
  var eUl  = document.createElement('ul');
  var eLi1 = document.createElement('li');
  var eLi2 = document.createElement('li');
  var eLi3 = document.createElement('li');
  
  var eLi4 = document.createElement('li');
  
  eUl.className = "lineList";
  
  if(eventRanking.graphics.displayOnly != true) {
    eLi1.appendChild(document.createTextNode("Éditer"));
    if(eventRanking.graphics.tableSubview == "edit")       eLi1.className = "selectedTab";
    eLi1.onclick = function() {    eventRanking.graphics.tableSubview = "edit";           eventRanking.graphics.refresh();  };
    eLi2.appendChild(document.createTextNode("Voir (calculé)"));
    if(eventRanking.graphics.tableSubview == "view")       eLi2.className = "selectedTab";
    eLi2.onclick = function() {    eventRanking.graphics.tableSubview = "view";           eventRanking.graphics.refresh();  };
    eLi3.appendChild(document.createTextNode("Points spéciaux"));
    if(eventRanking.graphics.tableSubview == "type")       eLi3.className = "selectedTab";
    eLi3.onclick = function() {    eventRanking.graphics.tableSubview = "type";           eventRanking.graphics.refresh();  };
    eUl.appendChild(eLi1);
    eUl.appendChild(eLi2);
    eUl.appendChild(eLi3);
  }
  
  eLi4.appendChild(document.createTextNode("Filtres"));
  eLi4.onclick = eventRanking.graphics.openEditFilters;
  eUl.appendChild(eLi4);
  return eUl;
};



eventRanking.graphics.tableScores = function() {
  // check if there is enough data...
  if (eventRanking.getMaxId(eventRanking.teams) > 0 &&
      eventRanking.getMaxId(eventRanking.challengeTypes) > 0 &&
      eventRanking.getMaxId(eventRanking.challenges) > 0 &&
      eventRanking.getMaxId(eventRanking.groups) > 0 &&
      eventRanking.getMaxId(eventRanking.categories) > 0 &&
      eventRanking.getMaxId(eventRanking.formulae) > 0) {
  
    var it1, it2;
    var scoreTable = eventRanking.scoreFilters.createScoresTable();
    scoreTable     = eventRanking.scoreFilters.sortRankingTable(scoreTable);
    scoreTable     = eventRanking.scoreFilters.orderChallenges(scoreTable);
    scoreTable     = eventRanking.scoreFilters.hideElements(scoreTable);
    
    var eTable   = document.createElement('table');
    var eTr = document.createElement('tr');
    if(scoreTable[0] != undefined){
      eTr.appendChild(scoreTable[0].team.titleElem);
      for (it2=0; it2<scoreTable[0].scores.length; it2++) {
        if(scoreTable[0].scores[it2] != undefined) {
          if(eventRanking.graphics.tableSubview == 'view' && scoreTable[0].scores[it2].viewElem != undefined) eTr.appendChild(scoreTable[0].scores[it2].titleElem);
          if(eventRanking.graphics.tableSubview == 'edit' && scoreTable[0].scores[it2].editElem != undefined) eTr.appendChild(scoreTable[0].scores[it2].titleElem);
          if(eventRanking.graphics.tableSubview == 'type' && scoreTable[0].scores[it2].typeElem != undefined) eTr.appendChild(scoreTable[0].scores[it2].titleElem);
        }
      }
      eTable.appendChild(eTr);
      for (it1=0; it1<scoreTable.length; it1++) {
        if(scoreTable[it1] != undefined) {
          eTr = document.createElement('tr');
          eTr.appendChild(scoreTable[it1].team.tableElem);
          for (it2=0; it2<scoreTable[it1].scores.length; it2++) {
            if(scoreTable[0].scores[it2] != undefined) {
              if(eventRanking.graphics.tableSubview == 'view' && scoreTable[it1].scores[it2].viewElem != undefined) eTr.appendChild(scoreTable[it1].scores[it2].viewElem);
              if(eventRanking.graphics.tableSubview == 'edit' && scoreTable[it1].scores[it2].editElem != undefined) eTr.appendChild(scoreTable[it1].scores[it2].editElem);
              if(eventRanking.graphics.tableSubview == 'type' && scoreTable[it1].scores[it2].typeElem != undefined) eTr.appendChild(scoreTable[it1].scores[it2].typeElem);
            }
          }
          eTable.appendChild(eTr);
        }
      }
    }
    return eTable
  }
  else {
    return document.createTextNode('Erreur : Il reste des éléments à encoder pour pouvoir afficher le classement.');
  }
};
