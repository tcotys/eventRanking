
eventRanking.ChallengeType.prototype.getTableTitleElem      = function () {
  var arrow_up64   = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApElEQVQ4jc3RsQpBARSH8V83k8FskEEeQQbpTp7C6E1kkAwewSijhzDJaJJBkicwGMTilm7XdV0lp/7TOd93Oh3+vcqofCOYYpYXbuCKG1p5BMsHfMMKwSdw9wmO0ssKF3FIEJxQyiLoJ8BRRu/gKs4pggvqaYJ5Chxl8QoOY4M7DDHANtbrxOEAaxwxQTNhQQNj7LFBIX57KNuvA7RRyzD7g7oDSqo5eSqN/7gAAAAASUVORK5CYII=')";
  var arrow_down64 = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAt0lEQVQ4jcXSMWpCQRRG4Y9olcLaQiwkna1YCFq5ipTZiVgESeESLCWli7ASy1TBQoxYp7CwkKRwHsTH+HxRxB8uAzP3HO4ww71TCGsNdXzh5wzzgHbo+042i/jAEm9oRMAmhlhjHkRH6QZrUp/o4xWL1Fnn1HiTVGOs3rPu94RdBrxFNUsAgwxB7xwMJWwi8AqPeQTwEhE854U5PNHsDzz9D5ykFeC9+L/IlTFGl8JQQfkawe3zC/XOPR1kYs0YAAAAAElFTkSuQmCC')";

  
  var tmp = document.createElement('td');
  tmp.appendChild(document.createTextNode(this.name));
  tmp.appendChild(document.createElement('BR'));
  tmp.appendChild(document.createTextNode('(Soustotal)'));
  tmp.style.backgroundColor = this.color;
  tmp.style.fontWeight = 'bold';
  tmp.style.whiteSpace = "nowrap";
  
  tmp.dataset.ordering = 'subtotal'+this.id;
  tmp.onclick = eventRanking.graphics.setTableOrdering;
  tmp.style.textAlign = "center";
  tmp.style.paddingRight = "16px";
  if(eventRanking.graphics.ordering == 'subtotal'+this.id) {
    if(eventRanking.scoreFilters.reversedTeamOrder)
      tmp.style.backgroundImage    = arrow_down64;
//       tmp.style.backgroundImage    ='url("images/arrow-down-16.png")';
    else
      tmp.style.backgroundImage    = arrow_up64;
//       tmp.style.backgroundImage    ='url("images/arrow-up-16.png")';
    tmp.style.backgroundPosition = 'right bottom';
    tmp.style.backgroundRepeat   = 'no-repeat';
  }
  return tmp;
};
eventRanking.Challenge.prototype.getTableTitleElem      = function () {
  var arrow_up64   = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApElEQVQ4jc3RsQpBARSH8V83k8FskEEeQQbpTp7C6E1kkAwewSijhzDJaJJBkicwGMTilm7XdV0lp/7TOd93Oh3+vcqofCOYYpYXbuCKG1p5BMsHfMMKwSdw9wmO0ssKF3FIEJxQyiLoJ8BRRu/gKs4pggvqaYJ5Chxl8QoOY4M7DDHANtbrxOEAaxwxQTNhQQNj7LFBIX57KNuvA7RRyzD7g7oDSqo5eSqN/7gAAAAASUVORK5CYII=')";
  var arrow_down64 = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAt0lEQVQ4jcXSMWpCQRRG4Y9olcLaQiwkna1YCFq5ipTZiVgESeESLCWli7ASy1TBQoxYp7CwkKRwHsTH+HxRxB8uAzP3HO4ww71TCGsNdXzh5wzzgHbo+042i/jAEm9oRMAmhlhjHkRH6QZrUp/o4xWL1Fnn1HiTVGOs3rPu94RdBrxFNUsAgwxB7xwMJWwi8AqPeQTwEhE854U5PNHsDzz9D5ykFeC9+L/IlTFGl8JQQfkawe3zC/XOPR1kYs0YAAAAAElFTkSuQmCC')";

  
  var tmp = document.createElement('td');
  tmp.appendChild(document.createTextNode(this.name));
  if(eventRanking.challengeTypes[this.typeId] != undefined) {
    tmp.style.backgroundColor = eventRanking.challengeTypes[this.typeId].color;
    tmp.appendChild(document.createElement('br'));
    tmp.appendChild(document.createTextNode('('+eventRanking.challengeTypes[this.typeId].name+')'));
  }
  tmp.dataset.ordering = 'challenge'+this.id;
  tmp.onclick = eventRanking.graphics.setTableOrdering;
  tmp.style.textAlign = "center";
  tmp.style.paddingRight = "16px";
  tmp.style.whiteSpace = "nowrap";
  if(eventRanking.graphics.ordering == 'challenge'+this.id) {
    if(eventRanking.scoreFilters.reversedTeamOrder)
      tmp.style.backgroundImage    = arrow_down64;
//       tmp.style.backgroundImage    ='url("images/arrow-down-16.png")';
    else
      tmp.style.backgroundImage    = arrow_up64;
//       tmp.style.backgroundImage    ='url("images/arrow-up-16.png")';
    tmp.style.backgroundPosition = 'right bottom';
    tmp.style.backgroundRepeat   = 'no-repeat';
    }
  return tmp;
};



eventRanking.Team.prototype.getTableNameElem      = function () {
  var arrow_up64   = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApElEQVQ4jc3RsQpBARSH8V83k8FskEEeQQbpTp7C6E1kkAwewSijhzDJaJJBkicwGMTilm7XdV0lp/7TOd93Oh3+vcqofCOYYpYXbuCKG1p5BMsHfMMKwSdw9wmO0ssKF3FIEJxQyiLoJ8BRRu/gKs4pggvqaYJ5Chxl8QoOY4M7DDHANtbrxOEAaxwxQTNhQQNj7LFBIX57KNuvA7RRyzD7g7oDSqo5eSqN/7gAAAAASUVORK5CYII=')";
  var arrow_down64 = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAt0lEQVQ4jcXSMWpCQRRG4Y9olcLaQiwkna1YCFq5ipTZiVgESeESLCWli7ASy1TBQoxYp7CwkKRwHsTH+HxRxB8uAzP3HO4ww71TCGsNdXzh5wzzgHbo+042i/jAEm9oRMAmhlhjHkRH6QZrUp/o4xWL1Fnn1HiTVGOs3rPu94RdBrxFNUsAgwxB7xwMJWwi8AqPeQTwEhE854U5PNHsDzz9D5ykFeC9+L/IlTFGl8JQQfkawe3zC/XOPR1kYs0YAAAAAElFTkSuQmCC')";

  var tmp = document.createElement('td');
//   tmp.appendChild(document.createTextNode(this.pos + ' ' + this.name));
  tmp.appendChild(document.createTextNode(this.name));
  tmp.style.whiteSpace = "nowrap";
  if (eventRanking.groups[this.group] != undefined) {
    tmp.appendChild(document.createElement('br'));
    tmp.appendChild(document.createTextNode('('+eventRanking.groups[this.group].name+')'));
    if(eventRanking.categories[eventRanking.groups[this.group].category] != undefined) 
      tmp.style.backgroundColor = eventRanking.categories[eventRanking.groups[this.group].category].color;
  }
  return tmp;
};
eventRanking.Team.prototype.getTableTitleElem      = function () {
  var arrow_up64   = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApElEQVQ4jc3RsQpBARSH8V83k8FskEEeQQbpTp7C6E1kkAwewSijhzDJaJJBkicwGMTilm7XdV0lp/7TOd93Oh3+vcqofCOYYpYXbuCKG1p5BMsHfMMKwSdw9wmO0ssKF3FIEJxQyiLoJ8BRRu/gKs4pggvqaYJ5Chxl8QoOY4M7DDHANtbrxOEAaxwxQTNhQQNj7LFBIX57KNuvA7RRyzD7g7oDSqo5eSqN/7gAAAAASUVORK5CYII=')";
  var arrow_down64 = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAt0lEQVQ4jcXSMWpCQRRG4Y9olcLaQiwkna1YCFq5ipTZiVgESeESLCWli7ASy1TBQoxYp7CwkKRwHsTH+HxRxB8uAzP3HO4ww71TCGsNdXzh5wzzgHbo+042i/jAEm9oRMAmhlhjHkRH6QZrUp/o4xWL1Fnn1HiTVGOs3rPu94RdBrxFNUsAgwxB7xwMJWwi8AqPeQTwEhE854U5PNHsDzz9D5ykFeC9+L/IlTFGl8JQQfkawe3zC/XOPR1kYs0YAAAAAElFTkSuQmCC')";

  var tmp = document.createElement('td');
  tmp.appendChild(document.createTextNode('# / Nom'));
  tmp.dataset.ordering = 'teamNum';
  tmp.onclick = eventRanking.graphics.setTableOrdering;
  tmp.style.textAlign = "center";
  tmp.style.paddingRight = "16px";
  tmp.style.whiteSpace = "nowrap";
  if(eventRanking.graphics.ordering == 'teamNum') {
    if(eventRanking.scoreFilters.reversedTeamOrder)
      tmp.style.backgroundImage    = arrow_down64;
//       tmp.style.backgroundImage    ='url("images/arrow-down-16.png")';
    else
      tmp.style.backgroundImage    = arrow_up64;
//       tmp.style.backgroundImage    ='url("images/arrow-up-16.png")';
    tmp.style.backgroundPosition = 'right bottom';
    tmp.style.backgroundRepeat   = 'no-repeat';
  }
  return tmp;
};
eventRanking.Team.prototype.getTableTotalElem      = function () {
  var tmp = document.createElement('td');
  tmp.appendChild(document.createTextNode(this.getTotalScore().toFixed(0)));
  tmp.style.textAlign = "right";
  tmp.style.fontWeight = 'bold';
  return tmp;
};
eventRanking.Team.prototype.getTableTotalTitleElem      = function () {
  var arrow_up64   = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApElEQVQ4jc3RsQpBARSH8V83k8FskEEeQQbpTp7C6E1kkAwewSijhzDJaJJBkicwGMTilm7XdV0lp/7TOd93Oh3+vcqofCOYYpYXbuCKG1p5BMsHfMMKwSdw9wmO0ssKF3FIEJxQyiLoJ8BRRu/gKs4pggvqaYJ5Chxl8QoOY4M7DDHANtbrxOEAaxwxQTNhQQNj7LFBIX57KNuvA7RRyzD7g7oDSqo5eSqN/7gAAAAASUVORK5CYII=')";
  var arrow_down64 = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAt0lEQVQ4jcXSMWpCQRRG4Y9olcLaQiwkna1YCFq5ipTZiVgESeESLCWli7ASy1TBQoxYp7CwkKRwHsTH+HxRxB8uAzP3HO4ww71TCGsNdXzh5wzzgHbo+042i/jAEm9oRMAmhlhjHkRH6QZrUp/o4xWL1Fnn1HiTVGOs3rPu94RdBrxFNUsAgwxB7xwMJWwi8AqPeQTwEhE854U5PNHsDzz9D5ykFeC9+L/IlTFGl8JQQfkawe3zC/XOPR1kYs0YAAAAAElFTkSuQmCC')";

  var tmp = document.createElement('td');
  tmp.appendChild(document.createTextNode('TOTAL'));
  tmp.dataset.ordering = 'total';
  tmp.onclick = eventRanking.graphics.setTableOrdering;
  tmp.style.fontWeight = 'bold';
  tmp.style.textAlign = "center";
  tmp.style.whiteSpace = "nowrap";
  tmp.style.paddingRight = "16px";
  if(eventRanking.graphics.ordering == 'total') {
    if(eventRanking.scoreFilters.reversedTeamOrder)
      tmp.style.backgroundImage    = arrow_down64;
//       tmp.style.backgroundImage    ='url("images/arrow-down-16.png")';
    else
      tmp.style.backgroundImage    = arrow_up64;
//       tmp.style.backgroundImage    ='url("images/arrow-up-16.png")';
    tmp.style.backgroundPosition = 'right bottom';
    tmp.style.backgroundRepeat   = 'no-repeat';
    }
  return tmp;
};
eventRanking.Team.prototype.getTableSubtotalElem      = function (challengeId) {
  var tmp = document.createElement('td');
  tmp.appendChild(document.createTextNode(this.getSubotalScore(challengeId).toFixed(0)));
  tmp.style.textAlign = "right";
  tmp.style.backgroundColor = "lightgrey";
  return tmp;
};



eventRanking.Score.prototype.getTableEditElem   = function () {
  var eTd    = document.createElement('td');
  var format = eventRanking.formulae[eventRanking.challenges[this.challengeId].formulaId].format;
  var fScore = document.createElement('form');
  var iId    = document.createElement('input');
  fScore.setAttribute('id','score'+this.id+'Form');
  iId.type = 'hidden';
  iId.name = 'id';
  iId.value = this.id;
  fScore.appendChild(iId);
  var iFormat  = document.createElement('input');
  iFormat.type = 'hidden';
  iFormat.name = 'format';
  iFormat.value = format;
  iFormat.className = "numeric";
  fScore.appendChild(iFormat);
  var iSubmit = document.createElement('input');
  iSubmit.type = 'submit';
  iSubmit.name = 'Save';
  iSubmit.style.display = "none";
  fScore.appendChild(iSubmit);
  if(this.value == 'mean' || this.value == 'min' || this.value == 'max' || this.value == 'zero') {
    var iValue  = document.createElement('input');
    iValue.type = 'text';
    iValue.name = 'value';
    iValue.value = this.value;
    iValue.className = "numeric";
    fScore.appendChild(iValue);
  }
  else {
    fScore = eventRanking.scoreFormats[format].getInputElem(this.value, fScore, eventRanking.graphics.setScoreEvent);
  }
  fScore.onsubmit = eventRanking.graphics.setScoreEvent;
  eTd.appendChild(fScore);
  eTd.style.whiteSpace = "nowrap";
  return eTd;
};

eventRanking.Score.prototype.getTableViewElem   = function () {
  var tmp = document.createElement('td');
  if(eventRanking.scoreTypes[this.type].calculate) {
//     tmp.appendChild(document.createTextNode(this.getPonderatedValue().toFixed(0)));
    tmp.appendChild(document.createTextNode(this.ponderatedValue.toFixed(0)));
  }
  else {
    tmp.appendChild(document.createTextNode(eventRanking.scoreTypes[this.type].name));
  }
  tmp.style.textAlign = "right";
  return tmp;
};

eventRanking.Score.prototype.getTableTypeElem   = function () {
  var eTd    = document.createElement('td');
  var format = eventRanking.formulae[eventRanking.challenges[this.challengeId].formulaId].format;
  var fScore = document.createElement('form');
  var iId    = document.createElement('input');
  var it1;
  iId.type = 'hidden';
  iId.name = 'id';
  iId.value = this.id;
  fScore.appendChild(iId);
  var sType  = document.createElement('select');
  sType.name = 'format';
  sType.onchange = eventRanking.graphics.setScoreTypeEvent;
  for(it1 in eventRanking.scoreTypes) {
    var oType = document.createElement('option');
    oType.value = eventRanking.scoreTypes[it1].id;
    oType.appendChild(document.createTextNode(eventRanking.scoreTypes[it1].name));
    if(eventRanking.scoreTypes[it1].id == this.type) oType.selected = "selected";
    sType.appendChild(oType);
  }
  fScore.appendChild(sType);
  
  var iSubmit = document.createElement('input');
  iSubmit.type = 'submit';
  iSubmit.name = 'Save';
  iSubmit.style.display = "none";
  fScore.appendChild(iSubmit);
  
  fScore.onsubmit = eventRanking.graphics.setScoreTypeEvent;
  eTd.appendChild(fScore);
  return eTd;
};