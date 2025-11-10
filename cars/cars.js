//define the object's action
function printCars()
{
    var make_line = "<td>" + this.make + "</td>";
    var model_line = "<td>" + this.model + "</td>";
    var year_line = "<td>" + this.year + "</td>";
    var color_line = "<td>" + this.color + "</td>";
    var engine_line = "<td>" + this.engine + "</td>";

    var row = "<tr>" + make_line + model_line + year_line + color_line + engine_line + "</tr>";

    document.write(row);
}




//define object

function cars(make, model, year, color, engine)
{
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.engine = engine;

    this.printCars = printCars;
}

//create cars

var mustang = new cars("Ford", "Mustang", "1965", "Hunter Green", "289 High Perfomance V8" );
var charger = new cars("Dodge", "Charger", "1969", "Burnt Orange", "426 Hemi");
var chevelle = new cars ("Chevrolet", "Chevelle SS ", "1970", "Candy Apple Red", "LS6 454 V8");

//arrays
var musArray = [mustang.make, mustang.model, mustang.year, mustang.color, mustang.engine];
for(var counter = 0; counter < musArray.length; counter++)
{
    document.write(musArray[counter] + "<br>" );
}

var charArray = [charger.make, charger.model, charger.year, charger.color, charger.engine]
for(var counter = 0; counter < charArray.length; counter++)
{
    document.write(charArray[counter] + "<br>" + "<br>");
}

var chevArray = [chevelle.make, chevelle.model, chevelle.year, chevelle.color, chevelle.engine]
for(var counter = 0; counter < chevArray.length; counter++)
{
    document.write(chevArray[counter] + "<br>" );
}