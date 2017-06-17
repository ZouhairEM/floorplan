        $( document ).ready(function() {
    makeFloorPlan();

    function makeFloorPlan() {
        var defaultSettings = {
                numberofTables: 10, //5 tables 
                tablePos: {
                        posX: 100,
                        posY: 100
                },
                tableSize: {
                        tableW: 10,
                        tableH: 12
                },
                takenTables: [2, 4], //
                numberofChairs: 60,
                chairPos: {
                        posX: 20,
                        posY: 80
                },
                chairSize: {
                        chairW: 1,
                        chairH: 2
                },
                speed: 1000 // tables fade in
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

                    //create chairs for the table

                        var availableChairs = [],
                        newChair, chairProp;
                        var horPosArr = new Array(0, 50, 100);
                        var chairPosX, chairPosY; 
                        for (var j = 0; j < 6; j++) {                             

                            if(j<3) {
                                chairPosX = defaultSettings.tablePos.posX + horPosArr[j];
                                chairPosY = defaultSettings.tablePos.posY - 20;
                                //console.log("chair" + chairPosX + "," + chairPosY);                                    
                            }
                            else {
                                chairPosX = defaultSettings.tablePos.posX + horPosArr[j-3];
                                chairPosY = defaultSettings.tablePos.posY + 100;
                                //console.log("chair" + chairPosX + "," + chairPosY);                                    
                            }                                
                                newChair = $('<div class="chair' + j + '"></div').css({
                                        'width': defaultSettings.chairSize.chairW + '%',
                                        'height': defaultSettings.chairSize.chairH + '%',
                                        'background-color': 'green'
                                });
                                chairProp = {
                                        'left': chairPosX,
                                        'top': chairPosY,
                                        'position': 'absolute',
                                        'display': 'none'
                                };

                                newChair.css(chairProp).appendTo('body').fadeIn(defaultSettings.speed);
                                availableChairs.push(newChair);
                        }


        if (defaultSettings.tablePos.posX >= 400) {
            defaultSettings.tablePos.posX = 100;
            defaultSettings.tablePos.posY += 200;
        } else {
            defaultSettings.tablePos.posX += 200;
        }                        

        newTable.css(tableProp).appendTo('body').fadeIn(defaultSettings.speed);
        availableTables.push(newTable);

    }
            //console.log(availableTables);
    return availableTables;                
        }

        var availableTables = createAvailTables();

        $("#check").click(function() {
                for (var i = 0; i < defaultSettings.takenTables.length; i++) {
                    console.log(defaultSettings.takenTables[i]);
                    $("#table"+defaultSettings.takenTables[i] ).fadeTo( defaultSettings.speed, 0.33 );
                }
        });


        }
    });