import BarDisplay from './BarDisplay';
import LineDisplay from './LineDisplay';
import ScatterDisplay from './ScatterDisplay';

let barData = [50, 75, 14, 20, 25,90,7];
let barWidth = 400;
let barHeight = 300;
let barPadding = 2;
let barHolder = "#barSpace";

let myBars = new BarDisplay(barData, barHolder, barWidth, barHeight, barPadding);

let lineHeight = 350;
let lineWidth = 400;
let monthlySales = [
    {"month": 10,"sales": 100},
    {"month": 20,"sales": 130},
    {"month": 30,"sales": 250},
    {"month": 40,"sales": 300},
    {"month": 50,"sales": 265},
    {"month": 60,"sales": 225},
    {"month": 70,"sales": 180},
    {"month": 80,"sales": 120},
    {"month": 90,"sales": 145},
    {"month": 100,"sales": 230}
];
let myLines = new LineDisplay(lineHeight, lineWidth, monthlySales);
let myScatter = new ScatterDisplay(lineHeight, lineWidth, monthlySales);



