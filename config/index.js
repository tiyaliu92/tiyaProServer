module.exports = {
    dburl:process.env.NODE_ENV == "product" ? "mongodb+srv://Bella:<password>@cluster0-4zdq0.mongodb.net/test?retryWrites=true&w=majority":"mgongodb://localhost:27017/"
}