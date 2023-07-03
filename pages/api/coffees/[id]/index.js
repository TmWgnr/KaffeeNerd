import dbConnect from "../../../../db/connect";
import Coffee from "../../../../db/models/Coffee";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (!id) {
    return;
  }

  if (request.method === "GET") {
    const coffee = await Coffee.findById(id);
    if (!coffee) {
      response.status(404).json({ status: "Not found" });
      return;
    }
    response.status(200).json(coffee);
    return;
  }

  if (request.method === "PATCH") {
    await Coffee.findByIdAndUpdate(id, {
      $set: request.body,
    });
    response.status(200).json({ status: `Coffee ${id} updated` });
  }

  // if (request.method === "DELETE") {
  //   await Coffee.findByIdAndDelete(id);
  //   response.status(200).json({ status: `Coffee ${id} deleted` });
  // }
}
