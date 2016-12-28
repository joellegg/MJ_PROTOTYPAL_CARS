// Create a function named Car with one property named
// `manufactured_date` whose value will be Date.now()
function Car() {
    // Create the manufactured date property (see above)
    this.manufactured_date = Date.now()
}

/*
    1. Create a new constructor function for the make of your favorite car.
    2. It must inherit from the more general Car object.
    3. Give it one property, named manufacturer, that holds a string value.
                 For, example, this.manufacturer = "Ford".
 */
function Jeep () {
    // Define the manufacturer instance variable
    this.manufacturer = 'Jeep'
}
// Set the prototype to a new Car instance
Jeep.prototype = new Car();


/*
    1. Create a constructor function named after your favorite car model.
    2. It must inherit from the specific make type you created in previous step.
    3. Create some instance properties that are specific to the specific car model
            (e.g. horsepower, cargo capacity, etc.)
*/

function Cherokee (horesepower, interior_color, color) {
    this.horsepower = horesepower;
    this.interior_color = interior_color;
    this.color = color;
}
// // Set the prototype to appropriate model you created above and set the model name argument
Cherokee.prototype = new Jeep();

/*
    Being an avid car collector, you own three different cars all of same model from your favorite manufacturer.
    1. Create three new instances of your favorite car.
    2. Create a new property on each object to hold the license plate number for each car.
*/
var myFirstCar = new Cherokee(357, 'Black', 'Black');
myFirstCar.plate_number = "037 FQJ";
var mySecondCar = new Cherokee(450, 'Gray', 'Green');
mySecondCar.plate_number = "BIG BOY";
var myThirdCar = new Cherokee(246, 'Black', 'Burgundy');
myThirdCar.plate_number = "BURGUNDY";

/*
    Now let's see some power of prototypal inheritance. Create a function for
    another model that's made by the manufacturer as your previous car. So if
    your first model was Fusion, make another one here for F150, for example.
 */
function GrandCherokee (horesepower, interior_color, color) {
    this.horsepower = horesepower;
    this.interior_color = interior_color;
    this.color = color;
};
/*
    Assign the prototype to the make you define above. Now both models will
    inherit the `manufacturer` property from the make function.
 */
GrandCherokee.prototype = new Jeep();

/*
    Now create an instance of this new car model to put in your garage. Remember
    to give it a plate number.
 */
var myFourthCar = new GrandCherokee(455, 'Tan', 'White');
myFourthCar.plate_number = "WIZ KID";
