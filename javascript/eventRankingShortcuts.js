// Windows/Linux
shortcut.add('ctrl+s', eventRanking.storage.saveEvent);
shortcut.add('ctrl+z', eventRanking.storage.undo);
shortcut.add('ctrl+o', function() {dialogBoxes.open("openFileForm", eventRanking.storage.openForm())});

// MacOSX
shortcut.add('meta+s', eventRanking.storage.saveEvent);
shortcut.add('meta+z', eventRanking.storage.undo);
shortcut.add('meta+o', function() {dialogBoxes.open("openFileForm", eventRanking.storage.openForm())});