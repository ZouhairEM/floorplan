# Floorplan
This is a plugin that allows you to create visualized tables to easily show which tables and seats are already booked for your events.

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

Include the plugin within the head tag,

```
<script src="floorplan.js"></script>
```


### Add floorplan to a div
Select any div and add floorplan to it like so,
```<div></div>
    <script>
        $('div').floorplan({
            numofTables: 10, //Number of tables
            bookedTables: [1,2], //Specify which tables
            bookedSeats: {
                tableNums: [0, 0, 3], //Be sure to match elements
                seatNums: [1, 2, 5]
            }
        });
    </script>
```
## Demo
link not yet up

## Author(s)

* **Zouhair El-Mariami**  - [ZouhairEM](https://github.com/https://github.com/ZouhairEM)

## Acknowledgments

* Thank you [Ties](https://github.com/https://github.com/Indoguy) for some help
* Some code still needs to be made more efficiently
