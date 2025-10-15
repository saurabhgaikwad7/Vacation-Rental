const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
    await mongoose.connect(MONGO_URL);
    console.log("connected to DB");
    await initDB();
    mongoose.connection.close(); // optional: close after done
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: "68a45111b108d348a772d38e",
    }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

main().catch(err => {
    console.log(err);
});
