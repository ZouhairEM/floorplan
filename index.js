makeFloorPlan();
function makeFloorPlan() {
    var defaultSettings = {
        numberofTables: 5,  
        tablePos: {
            posX: 100,
            posY: 100
        },
        tableSize: {
            tableW: 10,
            tableH: 12
        },
        takenTables: [2, 4], //
        numberofChairs: 30,
        chairPos: {
            posX: 20,
            posY: 80
        },
        chairSize: {
            chairW: 1,
            chairH: 2
        },
        speed: 1000, // tables fade in
    };

    function createAvailTables() {
        var availableTables = [],
            newTable, tableProp;
        for (var i = 0; i < defaultSettings.numberofTables; i++) {
            newTable = $('<div id="table' + i + '"></div').css({
                'width': defaultSettings.tableSize.tableW + '%',
                'height': defaultSettings.tableSize.tableH + '%',
                'background-color': 'black'
            });
            tableProp = {
                'left': defaultSettings.tablePos.posX,
                'top': defaultSettings.tablePos.posY,
                'position': 'absolute',
                'display': 'none'
            };
            if (defaultSettings.tablePos.posX >= 400) {
                defaultSettings.tablePos.posX = 100;
                defaultSettings.tablePos.posY += 200;
            } else {
                defaultSettings.tablePos.posX += 200;
            }
            newTable.css(tableProp).appendTo('body').fadeIn(defaultSettings.speed);
            availableTables.push(newTable);
        }
        return availableTables;
    }

    function createAvailChairs() {
        var availableChairs = [],
            newChair, chairProp;
        for (var i = 0; i < defaultSettings.numberofChairs; i++) {
            newChair = $('<div class="chair' + i + '"></div').css({
                'width': defaultSettings.chairSize.chairW + '%',
                'height': defaultSettings.chairSize.chairH + '%',
                'background-color': 'green'
            });
            chairProp = {
                'left': defaultSettings.chairPos.posX,
                'top': defaultSettings.chairPos.posY,
                'position': 'absolute',
                'display': 'none'
            };
            if (defaultSettings.chairPos.posX >= 400) {
                defaultSettings.chairPos.posX = 100;
                defaultSettings.chairPos.posY += 200;
            } else {
                defaultSettings.chairPos.posX += 200;
            }
            newChair.css(chairProp).appendTo('body').fadeIn(defaultSettings.speed);
            availableChairs.push(newChair);
        }
        return availableChairs;
    }
    var availableTables = createAvailTables();
    var availableChairs = createAvailChairs();
    //trim chair arrays into 6 chairs per array
    var chunkSize = 6;
    availableChairs = availableChairs.reduce((acc, item, idx) => {
        let group = acc.pop();
        if (group.length == chunkSize) {
            acc.push(group);
            group = [];
        }
        group.push(item);
        acc.push(group);
        return acc;
    }, [
        []
    ]);
    //target specific chair(s)
    /*    for (var i=0; i<availableChairs.length; i++){
    availableChairs[0][i].css({ 'background-color': 'red' });
    }*/
    var takenTables;
    var allOthers = availableTables.filter(function(num) {
        return num !== 5;
    });
    takenTables = allOthers[Math.floor(Math.random() * defaultSettings.numberofTables)];
    $("#check").click(function() {
        for (var i = 0; i < availableTables.length; i++) {
            allOthers[i].css({
                'opacity': '0.5'
            });
            takenTables.css({
                'opacity': '1'
            }).fadeIn(defaultSettings.speed);
        }
    });
console.log(takenTables);
}
