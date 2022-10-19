const mongoose = require('mongoose');

const CatSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true, // every cat must have a name
        unique: true, // cannot have 2 with the same name
    },
    bedsOwned: {
        type: Number,
        min: 0,
        required: true,
    },
    createdDate: {
        type: Date,
        default: Date.now, // if a function is added as a default, it will execute on addition

    }

});

const CatModel = mongoose.model('Cat', CatSchema);

module.exports = CatModel;