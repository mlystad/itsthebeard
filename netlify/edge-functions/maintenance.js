export default async (request, context) => {
  if (Deno.env.get("MAINTENANCE_MODE") === "true") {
    const url = new URL(request.url);
    if (url.pathname === "/maintenance.html") {
      return context.next();
    }
    return Response.redirect(new URL("/maintenance.html", request.url), 302);
  }
  return context.next();
};
