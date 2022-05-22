const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: "/arts/:slug",
    exact: true,
    component: "Arts",
  },
];

export default routes;
