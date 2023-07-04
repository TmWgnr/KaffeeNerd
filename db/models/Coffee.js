import mongoose from "mongoose";

const { Schema } = mongoose;

const coffeeSchema = new Schema({
  name: { type: String, required: true },
  origins: { type: [String], default: [] },
  sorts: { type: [String], default: [] },
  aroma: { type: [String], default: [] },
  grind: { type: Number, default: 0.0 },
  grams: { type: Number, default: 0 },
  milliliters: { type: Number, default: 0 },
  shop: { type: String },
});

const Coffee = mongoose.models.Coffee || mongoose.model("Coffee", coffeeSchema);

export default Coffee;
