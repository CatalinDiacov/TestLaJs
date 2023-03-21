class Tour {
    constructor(name, costOneDay, days, insurance) {
        this.name = name;
        this.costOneDay = costOneDay;
        this.days = days;
        this.insurance = insurance;

    }
    getPrice(){
        return this.costOneDay * this.days + this.insurance
    }
}

var tour = new Tour('Turkey', 1500, 7, 750);
console.log(tour.name); //afișează ' Turkey'
console.log(tour.costOneDay); //afișează 1500
console.log(tour.days); //afișează 7
console.log(tour.insurance); //afișează 750
console.log(tour.getPrice()); //afișează 11250 = 1500*7+750

var tour1 = new Tour('Moldova', 10, 10, 150);
console.log(tour1.name);
console.log(tour1.costOneDay);
console.log(tour1.days);
console.log(tour1.insurance);
console.log(tour1.getPrice());

var tour2 = new Tour('Algeria', 1000, 12, 720);
console.log(tour2.name);
console.log(tour2.costOneDay);
console.log(tour2.days);
console.log(tour2.insurance);
console.log(tour2.getPrice());

if (tour2.getPrice()>tour1.getPrice()){
    console.log('turul 1 are cel mai mic pret de '+tour1.getPrice()+'. cu '+(tour2.getPrice()-tour1.getPrice())+' mai putin de cit altul')
}

if (tour1.getPrice()>tour2.getPrice()){
    console.log('turul 2 are cel mai mic pret de '+tour1.getPrice()+'. cu '+(tour2.getPrice()-tour1.getPrice())+' mai putin de cit altul')
}

class NewTour {
    #name;
    #costOneDay;
    #days;
    #insurance;
    #tax;
    constructor(name, costOneDay, days, insurance) {
        this.#name = name;
        this.#costOneDay = costOneDay;
        this.#days = days;
        this.#insurance = insurance;

    }
    getPrice(){
        return this.#costOneDay * this.#days + this.#insurance
    }

    getName() {
        return this.#name ;
    }

    getCostOneDay() {
        return  this.#costOneDay;
    }

    getDays() {
        return this.#days;
    }

    getInsurance() {
        return this.#insurance;
    }
    increaseDays(a){
        this.#days+=(+a)
}
    setTax(a){
        this.#tax=(+a)/100
    }

    getPriceNetto() {
        return this.getPrice()*(1+this.#tax);
    }
}

var newtour = new NewTour('Turkey', 1500, 7, 750);
console.log(newtour.getName()); //afișează ' Turkey'
console.log(newtour.getCostOneDay()); //afișează 1500
console.log(newtour.getDays()); //afișează 7
console.log(newtour.getInsurance()); //afișează 750
console.log(newtour.getPrice()); //afișează 11250 = 1500*7+750
newtour.increaseDays(3); //mărește days cu 3
console.log(newtour.getPrice()); //afișează 11250 = 1500*7+750
newtour.setTax(5); //setează procentul agenției de turism la 5%
console.log(newtour.getPriceNetto()); //afișează 15750 + 5% = 16537.5

a=[]

var t1 = new NewTour('Turkey', 1500, 7, 750);
var t2 = new NewTour('Moldova', 10, 10, 150);
var t3 = new NewTour('Algeria', 1000, 12, 720);

a.push(t1,t2,t3)

for (i=0; i<a.length; i++){
    console.log(a[i].getName()); //afișează ' Turkey'
    console.log(a[i].getCostOneDay()); //afișează 1500
    console.log(a[i].getDays()); //afișează 7
    console.log(a[i].getInsurance()); //afișează 750
    console.log(a[i].getPrice()); //afișează 11250 = 1500*7+750
}