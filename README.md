<<<<<<< refs/remotes/origin/master
<<<<<<< refs/remotes/origin/master
# Floorplan
This is a plugin that allows you to create visualized tables to easily show which tables and seats are already booked for your events.

![alt text](http://oi67.tinypic.com/2dn9tv.jpg)

=======
# Floorplan
This is a plugin that allows you to create visualized tables to easily show which tables and seats are already booked for your events.

>>>>>>> Added content to readme.md
What is customizable?
* The number of tables. The default is set to 10.
* The booked tables. You can specify which tables are fully booked.
* The booked chairs. Specify which chairs are booked at tables that aren't fully booked.

A lot more is customizable like positions or number of chairs, but you can tweak them in the floorplan.js plugin in settings.

## Getting Started

Be sure to include jQuery above the floorplan.js plugin in your head tags.

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
```

### Add the floorplan plugin

<<<<<<< refs/remotes/origin/master
Include the plugin within the head tag, make sure it's below jQuery.
=======
Include the plugin within the head tag,
>>>>>>> Added content to readme.md

```
<script src="floorplan.js"></script>
```


<<<<<<< refs/remotes/origin/master
### Add floorplan
Add floorplan to your page with this code. You can set your own number of tables with `numOfTables`, book entire tables with `bookedTables` and book individual seats with `seatNums` matching at which tables they're at with `tableNums`. 

```
    <script>
        $('body').floorplan({
            numofTables: 10, //Number of tables
            bookedTables: [1,5], //Specify which tables, remember: arrays count from 0
            bookedSeats: {
                tableNums: [8], //Be sure to match table elements with seat elements
                seatNums: [2] //Seat elements.
=======
### Add floorplan to a div
Select any div and add floorplan to it like so,

```
    <div></div>
    <script>
        $('div').floorplan({
            numofTables: 10, //Number of tables
            bookedTables: [1,2], //Specify which tables
            bookedSeats: {
                tableNums: [0, 0, 3], //Be sure to match elements
                seatNums: [1, 2, 5]
>>>>>>> Added content to readme.md
            }
        });
    </script>
```
## Demo
<<<<<<< refs/remotes/origin/master
<<<<<<< refs/remotes/origin/master
<<<<<<< refs/remotes/origin/master
[Live demo](http://mariami.nl/projects/floorplan/index.html)
=======
link not yet up
>>>>>>> Added content to readme.md
=======
[mariami.nl/projects/floorplan/index.html](mariami.nl/projects/floorplan/index.html)
>>>>>>> Final readme fix, promise
=======
[Live demo](http://mariami.nl/projects/floorplan/index.html)
>>>>>>> Fixed seats array bug

## Author(s)

* **Zouhair El-Mariami**  - [ZouhairEM](https://github.com/https://github.com/ZouhairEM)

## Acknowledgments

<<<<<<< refs/remotes/origin/master
<<<<<<< refs/remotes/origin/master
* Thank you [Ties](https://github.com/Indoguy) for some help
* Future additions
    * Some code still needs to be made more efficiently
    * I wanna work with real JSON objects to load data in
    * I want to append Floorplan to specific divs, while keeping CSS aspect ratios.
=======
frameworkfloorplan
>>>>>>> Divs create function in new repo
=======
* Thank you [Ties](https://github.com/https://github.com/Indoguy) for some help
=======
* Thank you [Ties](https://github.com/Indoguy) for some help
>>>>>>> Fixed readme.md
* Some code still needs to be made more efficiently
>>>>>>> Added content to readme.md
