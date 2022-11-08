const { MongoClient } = require("mongodb");
const uri = 'mongodb+srv://FerchoDrone:Gmail79057593@cluster0.hymzxbs.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

const getData = async () => {
    const dataBase = client.db('sample_airbnb');
    const objeto = dataBase.collection('listingsAndReviews');
    const result = await objeto.find({ bathrooms: { $gte: 2 } }).limit(50).toArray();
    return result;
};

const getData1 = async () => {
    const dataBase = client.db('sample_airbnb');
    const objeto = dataBase.collection('listingsAndReviews');
    const result = await objeto.find({ price: { $lte: 300 } }).sort({ price: -1 }).limit(50).toArray();
    return result;
};

const getData2 = async () => {
    const dataBase = client.db('sample_airbnb');
    const objeto = dataBase.collection('listingsAndReviews');
    const result = await objeto.find({ house_rules: 'No smoking' }).limit(50).toArray();
    return result;
};

const getData3 = async () => {
    const dataBase = client.db('sample_airbnb');
    const objeto = dataBase.collection('listingsAndReviews');
    const result = await objeto.find({
        last_review: {
            $gte: new Date('2017-02-01'),
            $lte: new Date('2018-12-23')
        }
    }).limit(50).toArray();
    return result;
};

const getData4 = async () => {
    const dataBase = client.db('sample_airbnb');
    const objeto = dataBase.collection('listingsAndReviews');
    const result = await objeto.find({ cancellation_policy: 'flexible', cancellation_policy: 'moderate' }).limit(50).toArray();
    return result;
};

const getData5 = async () => {
    const dataBase = client.db('sample_airbnb');
    const objeto = dataBase.collection('listingsAndReviews');
    const result = await objeto.find({ $and: [{ bedrooms: 6 }, { beds: 6 }] }).limit(50).toArray();
    return result;
};

// const getData6 = async (price) => {
// const dataBase = client.db('sample_airbnb');
// const collection = dataBase.collection('listingsAndReviews');
// const result = await collection.find({price:{$eq:Number(price)}}).toArray();
// return result;
// };

const sevPoint = async (price) => {
    const dataBase = client.db('sample_airbnb');
    const collection = dataBase.collection('listingsAndReviews');
    const result = await collection.find({ price: { $eq: Number(price) } }).toArray();
    return result;
};

const newPrice = async (price) => {
    const dataBase = client.db('sample_airbnb');
    const collection = dataBase.collection('listingsAndReviews');
    const result = await collection.find({ price: { $eq: Number(price)} }).toArray();
    return result;

};

module.exports = { getData, getData1, getData2, getData3, getData4, getData5, sevPoint, newPrice };