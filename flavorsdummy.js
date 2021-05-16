const flavors = require('./flavors');
const connection = require('../config/mongoConnection');

async function main(){
    try{
        let original = {
            name: "Original",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "../public/imgs/original.png"
        }
        await flavors.create(original);
        let frostbite = {
            name: "Frostbite",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "../public/imgs/bite.png"
        }
        await flavors.create(frostbite);
        let pb = {
            name: "pitch black",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "../public/imgs/black.jpeg"
        }
        await flavors.create(pb);
        let blast_zero = {
            name: "Baja Blast Zero",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "../public/imgs/blast_zero.jpg"
        }
        await flavors.create(blast_zero);
        let blast = {
            name: "Baja Blast",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "../public/imgs/blast.png"
        }
        await flavors.create(blast);
        let brew = {
            name: "Liberty Brew",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "../public/imgs/brew.jpeg"
        }
        await flavors.create(brew);
        let cc = {
            name: "Citrus Cherry",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "../public/imgs/citrus_cherry.png"
        }
        await flavors.create(cc);
        let citrus = {
            name: "Citrus Blast",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "../public/imgs/citrus_blast.png"
        }
        await flavors.create(citrus);
        let cyclone = {
            name: "Cyclone",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "../public/imgs/cyclone.png"
        }
        await flavors.create(cyclone.png);
        let diet = {
            name: "Diet Mountain Dew",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "../public/imgs/diet.png"
        }
        await flavors.create(diet);
        let dsa = {
            name: "Dew-S-A",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "../public/imgs/dsa.png"
        }
        await flavors.create(dsa);
        let ice = {
            name: "Ice",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "../public/imgs/ice.jpg"
        }
        await flavors.create(ice);
        let lightning = {
            name: "Sweet Lightning",
            flavor: "Peach",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "../public/imgs/lightning.png"
        }
        await flavors.create(lightning);
        let live = {
            name: "Live-wire",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "../public/imgs/live.png"
        }
        await flavors.create(live);
        let mash = {
            name: "Merry Mash-up",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "../public/imgs/mash-up.jpeg"
        }
        await flavors.create(mash);
        let melonz = {
            name: "Major Melon Zero",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "../public/imgs/melon-zero.png"
        }
        await flavors.create(melonz);
        let melon = {
            name: "Major Melon",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "../public/imgs/melon.png"
        }
        await flavors.create(melon);
        let red = {
            name: "Code Red",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "../public/imgs/red.png"
        }
        await flavors.create(red);
        let throwback = {
            name: "Throwback",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "../public/imgs/throwback.png"
        }
        await flavors.create(throwback);
        let voltage = {
            name: "Voltage",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "../public/imgs/voltage.png"
        }
        await flavors.create(voltage);
        let vd = {
            name: "VooDew",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "../public/imgs/voodew.jpg"
        }
        await flavors.create(vd);
        let wo = {
            name: "Whiteout",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "../public/imgs/whiteout.jpeg"
        }
        await flavors.create(wo);
        let zero_sugar = {
            name: "Mountain Dew: Zero Sugar",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "../public/imgs/zero_sugar.png"
        }
        await flavors.create(zero_sugar);
    }
    catch(e){
        console.log(e);
    }
}

main();