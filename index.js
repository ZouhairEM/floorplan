(function ($) {
    $.fn.floorplan = function(options){ 

  var settings = $.extend({
    numberofTables: 8, //number of tables 
    tablePos: { posX: 17, posY: 10 },
    tableSize: { tableW: 12, tableH: 12 },
    takenTables: [2], //place your taken tables here like so [2,4] for tables #3 and #5
    takenSeats: {
    tableNum: [3], 
    seatNum: [0]}, //place table # and then its seat(s) number(s)
    seatSize: { seatW: 10, seatH: 10 }, //seatSize
    speed: 1000 // tables fade in with this speed
  }, options);

//global declarations
    var availableTables = [], availableSeats = [], newTable, tableProp, seatPosX, seatPosY;

  function createTables() {

    for (var i = 0; i < settings.numberofTables; i++) {
      newTable = $('<div id="table' + i + '"></div').css({ 'width': settings.tableSize.tableW + '%', 'height': settings.tableSize.tableH + '%', 'background-color': 'black' });
      tableProp = { 'left': settings.tablePos.posX + '%', 'top': settings.tablePos.posY + '%', 'position': 'absolute', 'display': 'none' };
      availableSeats = createSeats(i);

      if (settings.tablePos.posX >= 60) {
        settings.tablePos.posX = 17, settings.tablePos.posY += 30;
      } else { settings.tablePos.posX += 18; }
      newTable.css(tableProp).appendTo('body').fadeIn(settings.speed);
      availableTables.push(newTable);
    
    }
    return availableTables;
  }

  function createSeats(tablePos) {
    var horPosArr = new Array(0, 5, 10);
    for (var j = 0; j < 6; j++) {
      if (j < 3) {
        seatPosX = settings.tablePos.posX + horPosArr[j];
        seatPosY = settings.tablePos.posY + 14;
      } else {
        seatPosX = settings.tablePos.posX + horPosArr[j - 3];
        seatPosY = settings.tablePos.posY - 4.5;
      }

      var newSeat = $('<div class="table' + tablePos + 'seat' + j + '"></div').css({ 'width': settings.seatSize.seatW, 'height': settings.seatSize.seatH, 'background-color': 'white', 'border': 'solid black 2px' });
      var seatProp = { 'left': seatPosX + 0.5 + '%', 'top': seatPosY + '%', 'position': 'absolute', 'display': 'none' };
      newSeat.css(seatProp).appendTo('body').fadeIn(settings.speed);
      availableSeats.push(newSeat);
    }
    return availableSeats;
  }
    availableTables = createTables();

function checkSeats(){
        for (var i = 0; i < settings.takenTables.length; i++) {
            $("#table" + settings.takenTables[i]).fadeTo(settings.speed, 0.10);
            $(".table" + settings.takenTables[i] + 'seat' + [0]).fadeTo(settings.speed, 0.10);
            $(".table" + settings.takenTables[i] + 'seat' + [1]).fadeTo(settings.speed, 0.10);
            $(".table" + settings.takenTables[i] + 'seat' + [2]).fadeTo(settings.speed, 0.10);
            $(".table" + settings.takenTables[i] + 'seat' + [3]).fadeTo(settings.speed, 0.10);
            $(".table" + settings.takenTables[i] + 'seat' + [4]).fadeTo(settings.speed, 0.10);
            $(".table" + settings.takenTables[i] + 'seat' + [5]).fadeTo(settings.speed, 0.10);
            
            var tN = settings.takenSeats.tableNum[i], sN = settings.takenSeats.seatNum[i];
            $(".table" + tN + 'seat' + sN).fadeTo(settings.speed, 0.10);
        }
} 
checkSeats();
    
return ({
    numberofTables: settings
});

    };
}(jQuery));




