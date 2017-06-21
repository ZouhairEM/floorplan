(function($) {
    $.fn.floorplan = function(options) {

        var settings = $.extend({
            numofTables: 5, //default is set to 5 tables
            bookedTables: [0],
            bookedSeats: {
                tableNums: [0],
                seatNums: [0]
            },
            tableXY: {
                Xpos: 17,
                Ypos: 10
            },
            tableWH: {
                tableW: 12,
                tableH: 12
            },
            seatWH: {
                seatW: 10,
                seatH: 10
            },
            duration: 1000,
        }, options);

        var allTables = [],
            allSeats = [],
            table, seat, text, tableProps, seatProps, seatX, seatY; //Global declarations

        function makeTables() {

            for (var i = 0; i < settings.numofTables; i++) {
                tableProps = {
                    'width': settings.tableWH.tableW + '%',
                    'height': settings.tableWH.tableH + '%',
                    'left': settings.tableXY.Xpos + '%',
                    'top': settings.tableXY.Ypos + '%',
                    'background-color': 'black',
                    'border': 'solid black 2px',
                    'position': 'absolute',
                    'display': 'none'
                };
                allSeats = makeSeats(i);

                if (settings.tableXY.Xpos >= 60) {
                    settings.tableXY.Xpos = 17, settings.tableXY.Ypos += 30;
                } else {
                    settings.tableXY.Xpos += 18;
                }

                table = $('<div id="table' + i + '"><div class="text">Table ' + (i + 1) + '</div></div').css(tableProps).appendTo('body').fadeIn(settings.duration);
                allTables.push(table);
                text = $('.text').css({
                    'font-family': '"Trebuchet MS", Helvetica, sans-serif',
                    'color': 'white',
                    'position': 'absolute',
                    'left': '50%',
                    'top': '50%',
                    'transform': 'translate(-50%, -50%)'
                });
            }
            return allTables;
        }

        function makeSeats(tableXY) {
            var horPosArr = new Array(0, 5, 10);
            for (var j = 0; j < 6; j++) {
                if (j < 3) {
                    seatX = settings.tableXY.Xpos + horPosArr[j];
                    seatY = settings.tableXY.Ypos + 14;
                } else {
                    seatX = settings.tableXY.Xpos + horPosArr[j - 3];
                    seatY = settings.tableXY.Ypos - 4.5;
                }

                seatProps = {
                    'left': seatX + 0.5 + '%',
                    'top': seatY + '%',
                    'position': 'absolute',
                    'display': 'none',
                    'width': settings.seatWH.seatW,
                    'height': settings.seatWH.seatH,
                    'background-color': 'white',
                    'border': 'solid black 1.5px'
                };
                seat = $('<div class="table' + tableXY + 'seat' + j + '"></div').css(seatProps).appendTo('body').fadeIn(settings.duration);
                allSeats.push(seat);
            }
            return allSeats;
        }
        allTables = makeTables();

        function checkSeats() {
            for (var i = 0; i < settings.bookedTables.length; i++) {
                $("#table" + settings.bookedTables[i]).fadeTo(settings.duration, 0.10);
                $(".table" + settings.bookedTables[i] + 'seat' + [0]).fadeTo(settings.duration, 0.10);
                $(".table" + settings.bookedTables[i] + 'seat' + [1]).fadeTo(settings.duration, 0.10);
                $(".table" + settings.bookedTables[i] + 'seat' + [2]).fadeTo(settings.duration, 0.10);
                $(".table" + settings.bookedTables[i] + 'seat' + [3]).fadeTo(settings.duration, 0.10);
                $(".table" + settings.bookedTables[i] + 'seat' + [4]).fadeTo(settings.duration, 0.10);
                $(".table" + settings.bookedTables[i] + 'seat' + [5]).fadeTo(settings.duration, 0.10);
            }

            for(i = 0; i< settings.bookedSeats.seatNums.length; i++){
                var tN = settings.bookedSeats.tableNums[i],
                    sN = settings.bookedSeats.seatNums[i];
                $(".table" + tN + 'seat' + sN).fadeTo(settings.duration, 0.10);
            }
        }
        checkSeats();
    };
}(jQuery));