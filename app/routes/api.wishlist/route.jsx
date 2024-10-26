import { json } from "@remix-run/node";

export async function loader() {
  return json({
    title: "Wishlist",
    description: "Wishlist page",
  });
}

export async function action({ request }) {
    const method = request.method;
    switch (method) {
      case "POST":
        // return await addToWishlist(request);
        return json({ message: "POST" });
        break;
      case "PATCH":
        // return await updateWishlist(request);
        return json({ message: "PATCH" });
        break;
      case "DELETE":
        // return await removeFromWishlist(request);
        break
      default:
        return json({ message: "Invalid method" });
    }
//   return json({ message: "Hello from the API" });
}