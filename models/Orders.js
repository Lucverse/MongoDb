const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    itemArray: {
        type: [{
            id: String,
            quantity: Number,
        }],
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
