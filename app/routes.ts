// import { type RouteConfig, index } from "@react-router/dev/routes";

// export default [index("routes/home.tsx")] satisfies RouteConfig;

import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("catalog", "routes/catalog.tsx"),
  route("about", "routes/aboutPage.tsx"), 
  route("contacts", "routes/contactsPage.tsx"),
  route("product/:slug", "routes/product.$slug.tsx"),
] satisfies RouteConfig;

// export default [
//   route("Headphone", "", [
//     index("routes/home.tsx"),
//     route("catalog", "routes/catalog.tsx"),
//     route("reviews", "routes/reviews-page.tsx"),
//   ]),
// ] satisfies RouteConfig;