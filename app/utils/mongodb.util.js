const { MongoClient} = require("mongodb");

class MogoDB {
    static connect = async (uri) => {
        if (this.cilent) return this.client;
        this.client = await MongoClient.connect(uri);
        return this.client;
    };
}

module.exports = MogoDB;