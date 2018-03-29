

eventRanking.scoreFilters.challengeOrderFcts[1] = new eventRanking.ScoreOrdering(1, "Épreuves   - Catégories -  Total", 
  function (a,b) {
    var a1,a2,b1,b2;
    if (a.challengeTypePos < 0) {
      if(b.challengeTypePos < 0) {
        a1 = 1; b1 = 1; }
      else {
        a1 = b.challengeTypePos+1; b1 = b.challengeTypePos;}}
    else if (b.challengeTypePos < 0) {
      a1 = a.challengeTypePos; b1 = a.challengeTypePos+1; }
    else {
      a1 = a.challengeTypePos; b1 = b.challengeTypePos;}
    if (a.challengePos < 0) {
      if(b.challengePos < 0) {
        a2 = 1; b2 = 1;  }
      else {
        a2 = b.challengePos+1; b2 = b.challengePos;}    }
    else if (b.challengePos < 0) {
      a2 = a.challengePos; b2 = a.challengePos+1;    }
    else {
      a2 = a.challengePos; b2 = b.challengePos;    }
    
    if(a2 == b2) {
      return a1-b1; }
    else {
      return a2-b2; }
  });

eventRanking.scoreFilters.challengeOrderFcts[2] = new eventRanking.ScoreOrdering(2, "Total - Catégories -  Épreuves", 
  function (a,b) {
    var a1,a2,b1,b2;
    if (a.challengeTypePos < 0) {
      if(b.challengeTypePos < 0) {
        a1 = 1; b1 = 1; }
      else {
        a1 = b.challengeTypePos-1; b1 = b.challengeTypePos;}}
    else if (b.challengeTypePos < 0) {
      a1 = a.challengeTypePos; b1 = a.challengeTypePos-1; }
    else {
      a1 = a.challengeTypePos; b1 = b.challengeTypePos;}
    if (a.challengePos < 0) {
      if(b.challengePos < 0) {
        a2 = 1; b2 = 1;  }
      else {
        a2 = b.challengePos-1; b2 = b.challengePos;}    }
    else if (b.challengePos < 0) {
      a2 = a.challengePos; b2 = a.challengePos-1;    }
    else {
      a2 = a.challengePos; b2 = b.challengePos;    }
    
    if(a2 == b2) {
      return a1-b1; }
    else {
      return a2-b2; }
  });

eventRanking.scoreFilters.challengeOrderFcts[3] = new eventRanking.ScoreOrdering(3, "Total - Épreuves - Catégories", 
  function (a,b) {
    var a1,a2,b1,b2;
    if (a.challengeTypePos < 0) {
      if(b.challengeTypePos < 0) {
        a1 = 1; b1 = 1; }
      else {
        a1 = b.challengeTypePos+1; b1 = b.challengeTypePos;}}
    else if (b.challengeTypePos < 0) {
      a1 = a.challengeTypePos; b1 = a.challengeTypePos+1; }
    else {
      a1 = a.challengeTypePos; b1 = b.challengeTypePos;}
    if (a.challengePos < 0) {
      if(b.challengePos < 0) {
        a2 = 1; b2 = 1;  }
      else {
        a2 = b.challengePos+1; b2 = b.challengePos;}    }
    else if (b.challengePos < 0) {
      a2 = a.challengePos; b2 = a.challengePos+1;    }
    else {
      a2 = a.challengePos; b2 = b.challengePos;    }
    if(a.challengeTypePos < 0 && a.challengePos < 0) {
      
    }
    if(a.challengeTypePos < 0 && a.challengePos < 0) {
      a2 = b2-1;    }
    if(b.challengeTypePos < 0 && b.challengePos < 0) {
      b2 = a2-1;    }
    
    if(a2 == b2) {
      return a1-b1; }
    else {
      return a2-b2; }
  });

eventRanking.scoreFilters.challengeOrderFcts[4] = new eventRanking.ScoreOrdering(4, "Catégories - Épreuves - Total", 
  function (a,b) {
    var a1,a2,b1,b2;
    if (a.challengeTypePos < 0) {
      if(b.challengeTypePos < 0) {
        a1 = 1; b1 = 1; }
      else {
        a1 = b.challengeTypePos-1; b1 = b.challengeTypePos;}}
    else if (b.challengeTypePos < 0) {
      a1 = a.challengeTypePos; b1 = a.challengeTypePos-1; }
    else {
      a1 = a.challengeTypePos; b1 = b.challengeTypePos;}
    if (a.challengePos < 0) {
      if(b.challengePos < 0) {
        a2 = 1; b2 = 1;  }
      else {
        a2 = b.challengePos-1; b2 = b.challengePos;}    }
    else if (b.challengePos < 0) {
      a2 = a.challengePos; b2 = a.challengePos-1;    }
    else {
      a2 = a.challengePos; b2 = b.challengePos;    }
    if(a.challengeTypePos < 0 && a.challengePos < 0) {
      
    }
    if(a.challengeTypePos < 0 && a.challengePos < 0) {
      a2 = b2+1;    }
    if(b.challengeTypePos < 0 && b.challengePos < 0) {
      b2 = a2+1;    }
    
    if(a2 == b2) {
      return a1-b1; }
    else {
      return a2-b2; }
  });

eventRanking.scoreFilters.challengeOrderFcts[5] = new eventRanking.ScoreOrdering(5, "Épreuves - Total - Catégories", 
  function (a,b) {
    var a1,a2,b1,b2;
    if (a.challengeTypePos < 0) {
      if(b.challengeTypePos < 0) {
        a1 = 1; b1 = 1; }
      else {
        a1 = b.challengeTypePos+1; b1 = b.challengeTypePos;}}
    else if (b.challengeTypePos < 0) {
      a1 = a.challengeTypePos; b1 = a.challengeTypePos+1; }
    else {
      a1 = a.challengeTypePos; b1 = b.challengeTypePos;}
    if (a.challengePos < 0) {
      if(b.challengePos < 0) {
        a2 = 1; b2 = 1;  }
      else {
        a2 = b.challengePos+1; b2 = b.challengePos;}    }
    else if (b.challengePos < 0) {
      a2 = a.challengePos; b2 = a.challengePos+1;    }
    else {
      a2 = a.challengePos; b2 = b.challengePos;    }
    if(a.challengeTypePos < 0 && a.challengePos < 0) {
      
    }
    if(a.challengeTypePos < 0 && a.challengePos < 0) {
      a1 = b1-1;    }
    if(b.challengeTypePos < 0 && b.challengePos < 0) {
      b1 = a1-1;    }
    
    if(a2 == b2) {
      return a1-b1; }
    else {
      return a2-b2; }
  });

eventRanking.scoreFilters.challengeOrderFcts[6] = new eventRanking.ScoreOrdering(6, " Catégories - Total - Épreuves", 
  function (a,b) {
    var a1,a2,b1,b2;
    if (a.challengeTypePos < 0) {
      if(b.challengeTypePos < 0) {
        a1 = 1; b1 = 1; }
      else {
        a1 = b.challengeTypePos-1; b1 = b.challengeTypePos;}}
    else if (b.challengeTypePos < 0) {
      a1 = a.challengeTypePos; b1 = a.challengeTypePos-1; }
    else {
      a1 = a.challengeTypePos; b1 = b.challengeTypePos;}
    if (a.challengePos < 0) {
      if(b.challengePos < 0) {
        a2 = 1; b2 = 1;  }
      else {
        a2 = b.challengePos-1; b2 = b.challengePos;}    }
    else if (b.challengePos < 0) {
      a2 = a.challengePos; b2 = a.challengePos-1;    }
    else {
      a2 = a.challengePos; b2 = b.challengePos;    }
    if(a.challengeTypePos < 0 && a.challengePos < 0) {
      
    }
    if(a.challengeTypePos < 0 && a.challengePos < 0) {
      a1 = b1+1;    }
    if(b.challengeTypePos < 0 && b.challengePos < 0) {
      b1 = a1+1;    }
    
    if(a2 == b2) {
      return a1-b1; }
    else {
      return a2-b2; }
  });

eventRanking.scoreFilters.challengeOrderFcts[7] = new eventRanking.ScoreOrdering(7, "(Épreuves   et Catégories) -  Total", 
  function (a,b) {
    var a1,a2,b1,b2;
    if (a.challengeTypePos < 0) {
      if(b.challengeTypePos < 0) {
        a1 = 1; b1 = 1; }
      else {
        a1 = b.challengeTypePos+1; b1 = b.challengeTypePos;}}
    else if (b.challengeTypePos < 0) {
      a1 = a.challengeTypePos; b1 = a.challengeTypePos+1; }
    else {
      a1 = a.challengeTypePos; b1 = b.challengeTypePos;}
    if (a.challengePos < 0) {
      if(b.challengePos < 0) {
        a2 = 1; b2 = 1;  }
      else {
        a2 = b.challengePos+1; b2 = b.challengePos;}    }
    else if (b.challengePos < 0) {
      a2 = a.challengePos; b2 = a.challengePos+1;    }
    else {
      a2 = a.challengePos; b2 = b.challengePos;    }
    
    if(a1 == b1) {
      return a2-b2; }
    else {
      return a1-b1; }
  });

eventRanking.scoreFilters.challengeOrderFcts[8] = new eventRanking.ScoreOrdering(8, "Total - (Catégories et Épreuves)", 
  function (a,b) {
    var a1,a2,b1,b2;
    if (a.challengeTypePos < 0) {
      if(b.challengeTypePos < 0) {
        a1 = 1; b1 = 1; }
      else {
        a1 = b.challengeTypePos-1; b1 = b.challengeTypePos;}}
    else if (b.challengeTypePos < 0) {
      a1 = a.challengeTypePos; b1 = a.challengeTypePos-1; }
    else {
      a1 = a.challengeTypePos; b1 = b.challengeTypePos;}
    if (a.challengePos < 0) {
      if(b.challengePos < 0) {
        a2 = 1; b2 = 1;  }
      else {
        a2 = b.challengePos-1; b2 = b.challengePos;}    }
    else if (b.challengePos < 0) {
      a2 = a.challengePos; b2 = a.challengePos-1;    }
    else {
      a2 = a.challengePos; b2 = b.challengePos;    }
    
    if(a1 == b1) {
      return a2-b2; }
    else {
      return a1-b1; }
  });

eventRanking.scoreFilters.challengeOrderFcts[9] = new eventRanking.ScoreOrdering(9, "(Catégories et Épreuves) - Total", 
  function (a,b) {
    var a1,a2,b1,b2;
    if (a.challengeTypePos < 0) {
      if(b.challengeTypePos < 0) {
        a1 = 1; b1 = 1; }
      else {
        a1 = b.challengeTypePos-1; b1 = b.challengeTypePos;}}
    else if (b.challengeTypePos < 0) {
      a1 = a.challengeTypePos; b1 = a.challengeTypePos-1; }
    else {
      a1 = a.challengeTypePos; b1 = b.challengeTypePos;}
    if (a.challengePos < 0) {
      if(b.challengePos < 0) {
        a2 = 1; b2 = 1;  }
      else {
        a2 = b.challengePos-1; b2 = b.challengePos;}    }
    else if (b.challengePos < 0) {
      a2 = a.challengePos; b2 = a.challengePos-1;    }
    else {
      a2 = a.challengePos; b2 = b.challengePos;    }
    if(a.challengeTypePos < 0 && a.challengePos < 0) {
      a1 = b1+1;    }
    if(b.challengeTypePos < 0 && b.challengePos < 0) {
      b1 = a1+1;    }
    
    if(a1 == b1) {
      return a2-b2; }
    else {
      return a1-b1; }
  });

eventRanking.scoreFilters.challengeOrderFcts[10] = new eventRanking.ScoreOrdering(10, "Total - (Épreuves et Catégories)", 
  function (a,b) {
    var a1,a2,b1,b2;
    if (a.challengeTypePos < 0) {
      if(b.challengeTypePos < 0) {
        a1 = 1; b1 = 1; }
      else {
        a1 = b.challengeTypePos+1; b1 = b.challengeTypePos;}}
    else if (b.challengeTypePos < 0) {
      a1 = a.challengeTypePos; b1 = a.challengeTypePos+1; }
    else {
      a1 = a.challengeTypePos; b1 = b.challengeTypePos;}
    if (a.challengePos < 0) {
      if(b.challengePos < 0) {
        a2 = 1; b2 = 1;  }
      else {
        a2 = b.challengePos+1; b2 = b.challengePos;}    }
    else if (b.challengePos < 0) {
      a2 = a.challengePos; b2 = a.challengePos+1;    }
    else {
      a2 = a.challengePos; b2 = b.challengePos;    }
    if(a.challengeTypePos < 0 && a.challengePos < 0) {
      a1 = b1-1;    }
    if(b.challengeTypePos < 0 && b.challengePos < 0) {
      b1 = a1-1;    }
    
    if(a1 == b1) {
      return a2-b2; }
    else {
      return a1-b1; }
  });
