function makeTable() {

    var defaultSettings = {
        numberofTables: x, //change to specific number for your amount
        tablePos: { posX: 300, posY: 100 },
        tableSize: { tableW: 10, tableH: 12 },
        takenTables: [2,4], //
        speed: 1000, // [in milliseconds] if you want the tables to fade in
    };

    function createAvailTables() {
        var availableTables = [],
            newTable, tableProp;
        for (var i = 0; i < defaultSettings.numberofTables; i++) {

            newTable = $('<div id="div' + i + '"></div').css({ 'width': defaultSettings.tableSize.tableW + '%', 'height': defaultSettings.tableSize.tableH + '%', 'background-color': 'black' });
            tableProp = { 'left': defaultSettings.tablePos.posX, 'top': defaultSettings.tablePos.posY, 'position': 'absolute', 'display': 'none' };

            if (defaultSettings.tablePos.posX >= 800) {
                defaultSettings.tablePos.posX = 300;
                defaultSettings.tablePos.posY += 200;
            } else {
                defaultSettings.tablePos.posX += 200;
            }

            newTable.css(tableProp).appendTo('body').fadeIn(defaultSettings.speed).delay(500, function() {});
            availableTables.push(newTable);
        }
            return availableTables;
    }

    var availableTables = createAvailTables();
    console.log(availableTables);

    var takenTables;
    var allOthers = availableTables.filter(function(num) {
        return num !== 5;
    });

$("#check").click(function(){
    for (var i = 0; i < availableTables.length; i++) {
        takenTables = allOthers[6];

        allOthers[i].css({ 'opacity': '0.5' });
        takenTables.css({ 'opacity': '1' }).fadeIn(defaultSettings.speed);
    } 
});
}
