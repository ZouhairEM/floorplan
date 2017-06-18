(function makeFloorPlan() {
  var defaultSettings = {
    numberofTables: 10, //number of tables 
    tablePos: { posX: 17, posY: 10 },
    tableSize: { tableW: 12, tableH: 12 },
    takenTables: [2,5,6], //place your taken tables here like so
    takenSeats: [{'1': '5'}], //place table # and then its seat(s) number(s)
    scrollsectionPos: { posX: 20, posY: 80 },
    seatSize: { seatW: 10, seatH: 10 }, //seatSize
    speed: 1000 // tables fade in with this speed
  };
  
  function createTables() {
    var availableTables = [], newTable, tableProp;
    for (var i = 0; i < defaultSettings.numberofTables; i++) {
      newTable = $('<div id="table' + i + '"></div').css({ 'width': defaultSettings.tableSize.tableW + '%', 'height': defaultSettings.tableSize.tableH + '%', 'background-color': 'black' });
      tableProp = { 'left': defaultSettings.tablePos.posX + '%', 'top': defaultSettings.tablePos.posY + '%', 'position': 'absolute', 'display': 'none' };

      var availableSeats = createSeats(i);
      if (defaultSettings.tablePos.posX >= 60) {
        defaultSettings.tablePos.posX = 17, defaultSettings.tablePos.posY += 30;
      } else { defaultSettings.tablePos.posX += 18; }
      newTable.css(tableProp).appendTo('body').fadeIn(defaultSettings.speed);
      availableTables.push(newTable);
    
    }
    return availableTables;
  }

  function createSeats(tablePos) {
    var availableSeats = []; 
    var seatPosX, seatPosY;
    var horPosArr = new Array(0, 5, 10);
    for (var j = 0; j < 6; j++) {
      if (j < 3) {
        seatPosX = defaultSettings.tablePos.posX + horPosArr[j];
        seatPosY = defaultSettings.tablePos.posY + 14;
      } else {
        seatPosX = defaultSettings.tablePos.posX + horPosArr[j - 3];
        seatPosY = defaultSettings.tablePos.posY - 4.5;
      }

      var newSeat = $('<div class="table' + tablePos + 'seat' + j + '"></div').css({ 'width': defaultSettings.seatSize.seatW, 'height': defaultSettings.seatSize.seatH, 'background-color': 'white', 'border': 'solid black 2px' });
      var seatProp = { 'left': seatPosX + 0.5 + '%', 'top': seatPosY + '%', 'position': 'absolute', 'display': 'none' };
      newSeat.css(seatProp).appendTo('body').fadeIn(defaultSettings.speed);
      availableSeats.push(newSeat);
    }
    return availableSeats;
  }
  var availableTables = createTables();

    checkTables.addEventListener("click", function(e) {
        for (var i = 0; i < defaultSettings.takenTables.length; i++) {
            $("#table" + defaultSettings.takenTables[i]).fadeTo(defaultSettings.speed, 0.10);
            $(".table" + defaultSettings.takenTables[i] + 'seat' + [0]).fadeTo(defaultSettings.speed, 0.10);
            $(".table" + defaultSettings.takenTables[i] + 'seat' + [1]).fadeTo(defaultSettings.speed, 0.10);
            $(".table" + defaultSettings.takenTables[i] + 'seat' + [2]).fadeTo(defaultSettings.speed, 0.10);
            $(".table" + defaultSettings.takenTables[i] + 'seat' + [3]).fadeTo(defaultSettings.speed, 0.10);
            $(".table" + defaultSettings.takenTables[i] + 'seat' + [4]).fadeTo(defaultSettings.speed, 0.10);
            $(".table" + defaultSettings.takenTables[i] + 'seat' + [5]).fadeTo(defaultSettings.speed, 0.10);

            $(".table2seat5").css({'background-color': 'red'});
        }
    }, false);

}());




