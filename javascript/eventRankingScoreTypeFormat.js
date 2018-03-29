
eventRanking.scoreTypes['normal'] =  new eventRanking.ScoreType('normal','Normal',  true,  function (value, challengeId){return value;});
eventRanking.scoreTypes['zero']   =  new eventRanking.ScoreType('zero',  'Zéro',    false, function (value, challengeId){return 0;});
eventRanking.scoreTypes['mean']   =  new eventRanking.ScoreType('mean',  'Moyenne', false, 
  function (value, challengeId){
    var it1;
    var tmpScores = [];
    for(it1 in eventRanking.scores) {
      if(eventRanking.scores[it1] != undefined)
      if(eventRanking.scores[it1].challengeId == challengeId)
      if(eventRanking.scoreTypes[eventRanking.scores[it1].type].calculate)
        tmpScores.push(eventRanking.scores[it1].evaluate());
    }
    var scoresSum = 0;
    for (it1 in tmpScores) scoresSum += tmpScores[it1];
    return scoresSum/tmpScores.length;
  });
eventRanking.scoreTypes['med']    =  new eventRanking.ScoreType('med',   'Médiane', false, 
  function (value, challengeId){
    var it1;
    var tmpScores = [];
    for(it1 in eventRanking.scores) {
      if(eventRanking.scores[it1] != undefined)
      if(eventRanking.scores[it1].challengeId == challengeId)
      if(eventRanking.scoreTypes[eventRanking.scores[it1].type].calculate)
        tmpScores.push(eventRanking.scores[it1].evaluate());
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
  });
eventRanking.scoreTypes['min']    =  new eventRanking.ScoreType('min',   'Minimun', false, 
  function (value, challengeId){
    var it1;
    var tmpScores = [];
    for(it1 in eventRanking.scores) {
      if(eventRanking.scores[it1] != undefined)
      if(eventRanking.scores[it1].challengeId == challengeId)
      if(eventRanking.scoreTypes[eventRanking.scores[it1].type].calculate)
        tmpScores.push(eventRanking.scores[it1].evaluate());
    }
    if(tmpScores.length > 0) {
      tmpScores.sort(function(a, b){return a-b});
      return tmpScores[0];
    }
    else {
      return 0;
    }
  });
eventRanking.scoreTypes['max']    =  new eventRanking.ScoreType('max',   'Maximum', false, 
  function (value, challengeId){
    var it1;
    var tmpScores = [];
    for(it1 in eventRanking.scores) {
      if(eventRanking.scores[it1] != undefined)
      if(eventRanking.scores[it1].challengeId == challengeId)
      if(eventRanking.scoreTypes[eventRanking.scores[it1].type].calculate)
        tmpScores.push(eventRanking.scores[it1].evaluate());
    }
    if(tmpScores.length > 0) {
      tmpScores.sort(function(a, b){return b-a});
      return tmpScores[0];
    }
    else {
      return 0;
    }
  });




eventRanking.scoreFormats['float']               = new eventRanking.ScoreFormat ('float', 'Nombre à virgule',
  function (formatedValue, elem, changeAction) {
    var elemId       = elem.getAttribute('id');
    var tmp          =  parseFloat(formatedValue);
    var iValue       = document.createElement('input');
    iValue.id        = elemId+'FloatInput';
    iValue.type      = 'number';
    iValue.name      = 'float';
    iValue.value     = tmp;
    iValue.step      = 0.001;
    iValue.className = "numeric tabable";
    iValue.onchange  = changeAction;
    elem.appendChild(iValue);
    return elem;
  },
  function (valueOrElem) {
    if(valueOrElem.nodeType === Node.ELEMENT_NODE && valueOrElem.tagName == 'FORM') {
      return  valueOrElem.elements['float'].value;
    }
    else if(valueOrElem == parseInt(valueOrElem) || valueOrElem == parseFloat(valueOrElem)) {
      return parseFloat(valueOrElem);
    }
    else {
      return false;
    }
  },
  function (formatedValue) {
      return parseFloat(formatedValue);
  }
);
eventRanking.scoreFormats['int']                 = new eventRanking.ScoreFormat ('int', 'Nombre entier',
  function (formatedValue, elem, changeAction) {
    var elemId       = elem.getAttribute('id');
    var tmp          = parseInt(formatedValue);
    var iValue       = document.createElement('input');
    iValue.id        = elemId+'IntInput';
    iValue.type      = 'number';
    iValue.name      = 'int';
    iValue.value     = tmp;
    iValue.step      = 1;
    iValue.className = "numeric tabable";
    iValue.onchange  = changeAction;
    elem.appendChild(iValue);
    return elem;
  },
  function (valueOrElem) {
    if(valueOrElem.nodeType === Node.ELEMENT_NODE && valueOrElem.tagName == 'FORM') {
      return  valueOrElem.elements['int'].value;
    }
    else if(valueOrElem == parseInt(valueOrElem) || valueOrElem == parseFloat(valueOrElem)) {
      return parseInt(valueOrElem);
    }
    else {
      return false;
    }
  },
  function (formatedValue) {
      return parseInt(formatedValue);
  }
);
eventRanking.scoreFormats['mm:ss']               = new eventRanking.ScoreFormat ('mm:ss', 'Temps (mm:ss)',
  function (formatedValue, elem, changeAction) {
    var elemId       = elem.getAttribute('id');
    var tmp          = formatedValue.split(':');
    var iMin         = document.createElement('input');
    var iSec         = document.createElement('input');
    iMin.id          = elemId+'iMinInput';
    iMin.type        = 'number';
    iMin.name        = 'min';
    iMin.value       = tmp[0];
    iMin.min         = 0;
    iMin.max         = 59;
    iMin.step        = 1;
    iMin.className   = "twodigits tabable";
    iMin.onchange    = changeAction;
    iSec.id          = elemId+'iSecInput';
    iSec.type        = 'number';
    iSec.name        = 'sec';
    iSec.value       = tmp[1];
    iSec.min         = 0;
    iSec.max         = 59;
    iSec.step        = 1;
    iSec.className   = "twodigits tabable";
    iSec.onchange    = changeAction;
    elem.appendChild(iMin);
    elem.appendChild(document.createTextNode('m'));
    elem.appendChild(iSec);
    elem.appendChild(document.createTextNode('s'));
    return elem;
  },
  function (valueOrElem) {
    if(valueOrElem.nodeType === Node.ELEMENT_NODE && valueOrElem.tagName == 'FORM') {
      return  valueOrElem.elements['min'].value+':'+valueOrElem.elements['sec'].value;
    }
    else if(valueOrElem == parseInt(valueOrElem) || valueOrElem == parseFloat(valueOrElem)) {
      var min = Math.floor(valueOrElem/60);
      var sec = Math.floor(valueOrElem%60);
      return min+':'+sec;
    }
    else {
      return false;
    }
  },
  function (formatedValue) {
      var tmp = formatedValue.split(':');
      return parseFloat(tmp[0])*60+parseFloat(tmp[1]);
  }
);
eventRanking.scoreFormats['hh:mm:ss']            = new eventRanking.ScoreFormat ('hh:mm:ss', 'Temps (hh:mm:ss)',
  function (formatedValue, elem, changeAction) {
    var elemId       = elem.getAttribute('id');
    var tmp          = formatedValue.split(':');
    var iHour        = document.createElement('input');
    var iMin         = document.createElement('input');
    var iSec         = document.createElement('input');
    iHour.id         = elemId+'iHourInput';
    iHour.type       = 'number';
    iHour.name       = 'hour';
    iHour.value      = tmp[0];
    iHour.min        = 0;
    iHour.max        = 23;
    iHour.step       = 1;
    iHour.className  = "twodigits tabable";
    iHour.onchange   = changeAction;
    iMin.id          = elemId+'iMinInput';
    iMin.type        = 'number';
    iMin.name        = 'min';
    iMin.value       = tmp[1];
    iMin.min         = 0;
    iMin.max         = 59;
    iMin.step        = 1;
    iMin.className   = "twodigits tabable";
    iMin.onchange    = changeAction;
    iSec.id          = elemId+'iSecInput';
    iSec.type        = 'number';
    iSec.name        = 'sec';
    iSec.value       = tmp[2];
    iSec.min         = 0;
    iSec.max         = 59;
    iSec.step        = 1;
    iSec.className   = "twodigits tabable";
    iSec.onchange    = changeAction;
    elem.appendChild(iHour);
    elem.appendChild(document.createTextNode('h'));
    elem.appendChild(iMin);
    elem.appendChild(document.createTextNode('m'));
    elem.appendChild(iSec);
    elem.appendChild(document.createTextNode('s'));
    return elem;
  },
  function (valueOrElem) {
    if(valueOrElem.nodeType === Node.ELEMENT_NODE && valueOrElem.tagName == 'FORM') {
      value =  valueOrElem.elements['hour'].value+':'+valueOrElem.elements['min'].value+':'+valueOrElem.elements['sec'].value;
    }
    else if(valueOrElem == parseInt(valueOrElem) || valueOrElem == parseFloat(valueOrElem)) {
      var hour = Math.floor(valueOrElem/3600);
      var min  = Math.floor(valueOrElem/60);
      var sec  = Math.floor(valueOrElem%60);
      return hour+':'+min+':'+sec;
    }
    else {
      return false;
    }
  },
  function (formatedValue) {
      var tmp = formatedValue.split(':');
      return parseFloat(tmp[0])*3600+parseFloat(tmp[1])*60+parseFloat(tmp[2]);
  }
);
eventRanking.scoreFormats['start.stop.hh:mm:ss'] = new eventRanking.ScoreFormat ('start.stop.hh:mm:ss', 'Temps (Start/Stop - hh:mm:ss)',
  function (formatedValue, elem, changeAction) {
    var elemId       = elem.getAttribute('id');
    var tmp          = formatedValue.split(/[.:]/);
    var iHour2       = document.createElement('input');
    var iMin2        = document.createElement('input');
    var iSec2        = document.createElement('input');
    var iHour1       = document.createElement('input');
    var iMin1        = document.createElement('input');
    var iSec1        = document.createElement('input');
    iHour2.id        = elemId+'iHour2Input';
    iHour2.type      = 'number';
    iHour2.name      = 'hour2';
    iHour2.value     = tmp[0];
    iHour2.min       = 0;
    iHour2.max       = 23;
    iHour2.step      = 1;
    iHour2.className = "twodigits tabable";
    iHour2.onchange  = changeAction;
    iMin2.id         = elemId+'iMin2Input';
    iMin2.type       = 'number';
    iMin2.name       = 'min2';
    iMin2.value      = tmp[1];
    iMin2.min        = 0;
    iMin2.max        = 59;
    iMin2.step       = 1;
    iMin2.className  = "twodigits tabable";
    iMin2.onchange   = changeAction;
    iSec2.id         = elemId+'iSec2Input';
    iSec2.type       = 'number';
    iSec2.name       = 'sec2';
    iSec2.value      = tmp[2];
    iSec2.min        = 0;
    iSec2.max        = 59;
    iSec2.step       = 1;
    iSec2.className  = "twodigits tabable";
    iSec2.onchange   = changeAction;
    iHour1.id        = elemId+'iHour1Input';
    iHour1.type      = 'number';
    iHour1.name      = 'hour1';
    iHour1.value     = tmp[3];
    iHour1.min       = 0;
    iHour1.max       = 23;
    iHour1.step      = 1;
    iHour1.className = "twodigits tabable";
    iHour1.onchange  = changeAction;
    iMin1.id         = elemId+'iMin1Input';
    iMin1.type       = 'number';
    iMin1.name       = 'min1';
    iMin1.value      = tmp[4];
    iMin1.min        = 0;
    iMin1.max        = 59;
    iMin1.step       = 1;
    iMin1.className  = "twodigits tabable";
    iMin1.onchange   = changeAction;
    iSec1.id         = elemId+'iSec1Input';
    iSec1.type       = 'number';
    iSec1.name       = 'sec1';
    iSec1.value      = tmp[5];
    iSec1.min        = 0;
    iSec1.max        = 59;
    iSec1.step       = 1;
    iSec1.className  = "twodigits tabable";
    iSec1.onchange   = changeAction;
    elem.appendChild(document.createTextNode('Start : '));
    elem.appendChild(iHour1);
    elem.appendChild(document.createTextNode('h'));
    elem.appendChild(iMin1);
    elem.appendChild(document.createTextNode('m'));
    elem.appendChild(iSec1);
    elem.appendChild(document.createTextNode('s'));
    elem.appendChild(document.createElement('br'));
    elem.appendChild(document.createTextNode('Stop : '));
    elem.appendChild(iHour2);
    elem.appendChild(document.createTextNode('h'));
    elem.appendChild(iMin2);
    elem.appendChild(document.createTextNode('m'));
    elem.appendChild(iSec2);
    elem.appendChild(document.createTextNode('s'));
    return elem;
  },
  function (valueOrElem) {
    if(valueOrElem.nodeType === Node.ELEMENT_NODE && valueOrElem.tagName == 'FORM') {
      return valueOrElem.elements['hour2'].value+':'+valueOrElem.elements['min2'].value+':'+valueOrElem.elements['sec2'].value+'.'+valueOrElem.elements['hour1'].value+':'+valueOrElem.elements['min1'].value+':'+valueOrElem.elements['sec1'].value;
    }
    else if(valueOrElem == parseInt(valueOrElem) || valueOrElem == parseFloat(valueOrElem)) {
      var hour = Math.floor(valueOrElem/3600);
      var min  = Math.floor(valueOrElem/60);
      var sec  = Math.floor(valueOrElem%60);
      return hour+':'+min+':'+sec+'.0:0:0';
    }
    else {
      return false;
    }
  },
  function (formatedValue) {
    var tmp = formatedValue.split(/[.:]/);
    return parseFloat(tmp[0])*3600+parseFloat(tmp[1])*60+parseFloat(tmp[2]) - parseFloat(tmp[3])*3600-parseFloat(tmp[4])*60-parseFloat(tmp[5]);
  }
);
eventRanking.scoreFormats['start.stop.mm:ss']    = new eventRanking.ScoreFormat ('start.stop.mm:ss', 'Temps (Start/Stop - mm:ss)',
  function (formatedValue, elem, changeAction) {
    var elemId       = elem.getAttribute('id');
    var tmp          = formatedValue.split(/[.:]/);
    var iMin2        = document.createElement('input');
    var iSec2        = document.createElement('input');
    var iMin1        = document.createElement('input');
    var iSec1        = document.createElement('input');
    iMin2.id         = elemId+'iMin2Input';
    iMin2.type       = 'number';
    iMin2.name       = 'min2';
    iMin2.value      = tmp[0];
    iMin2.min        = 0;
    iMin2.max        = 59;
    iMin2.step       = 1;
    iMin2.className  = "twodigits tabable";
    iMin2.onchange   = changeAction;
    iSec2.id         = elemId+'iSec2Input';
    iSec2.type       = 'number';
    iSec2.name       = 'sec2';
    iSec2.value      = tmp[1];
    iSec2.min        = 0;
    iSec2.max        = 59;
    iSec2.step       = 1;
    iSec2.className  = "twodigits tabable";
    iSec2.onchange   = changeAction;
    iMin1.id         = elemId+'iMin1Input';
    iMin1.type       = 'number';
    iMin1.name       = 'min1';
    iMin1.value      = tmp[2];
    iMin1.min        = 0;
    iMin1.max        = 59;
    iMin1.step       = 1;
    iMin1.className  = "twodigits tabable";
    iMin1.onchange   = changeAction;
    iSec1.id         = elemId+'iSec1Input';
    iSec1.type       = 'number';
    iSec1.name       = 'sec1';
    iSec1.value      = tmp[3];
    iSec1.min        = 0;
    iSec1.max        = 59;
    iSec1.step       = 1;
    iSec1.className  = "twodigits tabable";
    iSec1.onchange   = changeAction;
    elem.appendChild(document.createTextNode('Start : '));
    elem.appendChild(iMin1);
    elem.appendChild(document.createTextNode('m'));
    elem.appendChild(iSec1);
    elem.appendChild(document.createTextNode('s'));
    elem.appendChild(document.createElement('br'));
    elem.appendChild(document.createTextNode('Stop : '));
    elem.appendChild(iMin2);
    elem.appendChild(document.createTextNode('m'));
    elem.appendChild(iSec2);
    elem.appendChild(document.createTextNode('s'));
    return elem;
  },
  function (valueOrElem) {
    if(valueOrElem.nodeType === Node.ELEMENT_NODE && valueOrElem.tagName == 'FORM') {
      return  valueOrElem.elements['min2'].value+':'+valueOrElem.elements['sec2'].value+'.'+valueOrElem.elements['min1'].value+':'+valueOrElem.elements['sec1'].value;
    }
    else if(valueOrElem == parseInt(valueOrElem) || valueOrElem == parseFloat(valueOrElem)) {
      var min = Math.floor(valueOrElem/60);
      var sec = Math.floor(valueOrElem%60);
      return min+':'+sec+'.0:0';
    }
    else {
      return false;
    }
  },
  function (formatedValue) {
    var tmp = formatedValue.split(/[.:]/);
    return parseFloat(tmp[0])*60+parseFloat(tmp[1]) - parseFloat(tmp[2])*60-parseFloat(tmp[3]);
  }
);
