var MongoClient = require('mongodb').MongoClient;
//Create a database named "flavors":
var url = "mongodb://localhost:27017/flavors";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

const mongoCollections = require('./config/mongoCollections');
const connection = require('./config/mongoConnection');
const flavors = mongoCollections.flavors;

async function main(){
    const flavorsCollection = await flavors;
    try{
        let original = {
            name: "Original",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "./public/imgs/original.png"
        }
        await flavorsCollection.insertOne(original);
        let frostbite = {
            name: "Frostbite",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "./public/imgs/bite.png"
        }
        await flavorsCollection.insertOne(frostbite);
        let pb = {
            name: "pitch black",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "./public/imgs/black.jpeg"
        }
        await flavorsCollection.insertOne(pb);
        let blast_zero = {
            name: "Baja Blast Zero",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "./public/imgs/blast_zero.jpg"
        }
        await flavorsCollection.insertOne(blast_zero);
        let blast = {
            name: "Baja Blast",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "./public/imgs/blast.png"
        }
        await flavorsCollection.insertOne(blast);
        let brew = {
            name: "Liberty Brew",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "./public/imgs/brew.jpeg"
        }
        await flavorsCollection.insertOne(brew);
        let cc = {
            name: "Citrus Cherry",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "./public/imgs/citrus_cherry.png"
        }
        await flavorsCollection.insertOne(cc);
        let citrus = {
            name: "Citrus Blast",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "./public/imgs/citrus_blast.png"
        }
        await flavorsCollection.insertOne(citrus);
        let cyclone = {
            name: "Cyclone",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "./public/imgs/cyclone.png"
        }
        await flavorsCollection.insertOne(cyclone.png);
        let diet = {
            name: "Diet Mountain Dew",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "./public/imgs/diet.png"
        }
        await flavorsCollection.insertOne(diet);
        let dsa = {
            name: "Dew-S-A",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "./public/imgs/dsa.png"
        }
        await flavorsCollection.insertOne(dsa);
        let ice = {
            name: "Ice",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "./public/imgs/ice.jpg"
        }
        await flavorsCollection.insertOne(ice);
        let lightning = {
            name: "Sweet Lightning",
            flavor: "Peach",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "./public/imgs/lightning.png"
        }
        await flavorsCollection.insertOne(lightning);
        let live = {
            name: "Live-wire",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "./public/imgs/live.png"
        }
        await flavorsCollection.insertOne(live);
        let mash = {
            name: "Merry Mash-up",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "./public/imgs/mash-up.jpeg"
        }
        await flavorsCollection.insertOne(mash);
        let melonz = {
            name: "Major Melon Zero",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "./public/imgs/melon-zero.png"
        }
        await flavorsCollection.insertOne(melonz);
        let melon = {
            name: "Major Melon",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "./public/imgs/melon.png"
        }
        await flavorsCollection.insertOne(melon);
        let red = {
            name: "Code Red",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "./public/imgs/red.png"
        }
        await flavorsCollection.insertOne(red);
        let throwback = {
            name: "Throwback",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "./public/imgs/throwback.png"
        }
        await flavorsCollection.insertOne(throwback);
        let voltage = {
            name: "Voltage",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "./public/imgs/voltage.png"
        }
        await flavorsCollection.insertOne(voltage);
        let vd = {
            name: "VooDew",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "./public/imgs/voodew.jpg"
        }
        await flavorsCollection.insertOne(vd);
        let wo = {
            name: "Whiteout",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "./public/imgs/whiteout.jpeg"
        }
        await flavorsCollection.insertOne(wo);
        let zero_sugar = {
            name: "Mountain Dew: Zero Sugar",
            flavor: "citrus",
            rating: "0",
            potency: "0",
            weight: "0",
            carb: "0",
            gbi: "",
            img: "./public/imgs/zero_sugar.png"
        }
        await flavorsCollection.insertOne(zero_sugar);
    }
    catch(e){
        console.log(e);
    }
    const db = await connection();
	await db.serverConfig.close();
	console.log("main finished");
}

module.exports = {main};