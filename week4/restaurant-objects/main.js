////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////Restaurant Objects Part 1//////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////


class Food {
        constructor(strName, foodItem, numCal, vegan, glutenFree, citrusFree){
        this.strName = strName;
        this.foodItem = foodItem;
        this.numCal = numCal;
        this.vegan = vegan;
        this.glutenFree = glutenFree;
        this.citrusFree = citrusFree;
    }
        stringify() {
        console.log(this.strName + " is a Great " + this.foodItem + " choice. It contains " + this.numCal + "kcals. " + this.strName + " is " + this.vegan + ", " + this.glutenFree + " & " + this.citrusFree + ". " + this.strName + " is a heathly food choice for hipsters with finicky digestive systems. " );
        }
}


var food = new Food("Steak", "Dinner", "400", "Vegan Friendly", "Gluten Free", "Citrus Free")
 food.stringify()



/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////Restaurant Objects Part Douche//////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

class Drink {
    constructor(drkName, drkDesc, drkPrice, fooditemIng){
    this.drkName = drkName;
    this.drkDesc = drkDesc;
    this.drkPrice = drkPrice;//number
    this.fooditemIng = fooditemIng;//Array of fiiditem ingredients
    }
    stringify(){
        console.log();
    }
}
var drink = new Drink("Mary-Marigarita", "A delightfully intoxicating kick to the groin", "$36.01", ["Band-Aid brand Band-Aids", "Ox-Blood", "Seagram 7 Vodka, Bath Water Edition", "Fresh Mint", "Dried Tears"])
drink.stringify()

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Plate{
    constructor(plateName, plateDesc, platePrice, fooditemIng){
        this.plateName = plateName;
        this.plateDesc = plateDesc;
        this.platePrice = platePrice;//number
        this.fooditemIng = fooditemIng;//Array of Food Item Ingredients
    }
    stringify(){
        console.log(this.plateName, this.plateDesc, this.platePrice, this.fooditemIng);
    }
}
var plate1 =new Plate("Kitchen Sink", "All the things you didn't want in your meal", "1st Mortgage", ["Ox Meat", "Browner Mustard", "Day-Old French Fries", "Spit a.k.a. Colorado All-Spice", "Whole, Un-Sliced Tomatoes"])
var plate2 =new Plate ("Santa Maria", "It's mean and crucifies you for eating it", "2 Human fetuses", ["Flour Tortilla", "Beans and Rice", "Side of Salsa", "Queso Fresco", "Lettuce" , "Tomatoes & Guacamole", "Goat Meat harvested by our own Chupacabra"])
var plate3 =new Plate("Diet Dinner", "For those with weight loss in mind", "50 Air Squats", ["Bowl", "Ice Cubes", "More Ice Cubes", "Pinch of Salt"])
plate1.stringify()
plate2.stringify()
plate3.stringify()
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Order{
    constructor(plate){
        this.plate = plate; //Array of Plate plates
    }
    stringify(){
        for (var i = 0; i < this.plate.length; i++){
            this.plate[i].stringify()
        }
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Menu{
    constructor(Plate){
        this.plate; //Array of Plate plates
    }
    stringify(){
        for(var i=0; i < this.plate.length; i++){
            this.plate[i].stringify()
        }

    }
}
var menu = new Menu ([plate1, plate2, plate3, drink])
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Restaurant{
    constructor(resName, resDesc, resMenu){
    this.resName = resName;
    this.resDesc = resDesc;
    this.resMenu = resMenu;
    }
    stringify(){
        console.log(this.resName, this.resDesc, this.resMenu);

    }
}
var restaurant =new Restaurant("Kombucha", "An Organicly Fair traded Lie", menu);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Customer{
    constructor(dietPref){
    this.dietPref=dietPref;
    }
    stringify(){
        console.log(dietPref);

    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
