import Coffee from "../../../db/models/Coffee";
import dbConnect from "../../../db/connect";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const coffees = await Coffee.find();

    if (!coffees) {
      return response.status(404).json({ status: "Not found" });
    }
    response.status(200).json(coffees);
  }

  if (request.method === "POST") {
    try {
      const coffeeData = JSON.parse(request.body);
      console.log(coffeeData);
      await Coffee.create(coffeeData);
      response.status(201).json({ status: "coffee created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}
