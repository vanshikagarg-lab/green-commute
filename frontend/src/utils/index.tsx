export const mapRoutes = (routes: any) => {
  const finalRoutes = {
    bike: false,
    bus: false,
    train: false,
    car: false,
  };
  routes.map((route: any) => {
    if (route.routeName.includes("Bike")) {
      finalRoutes.bike = true;
    }
    if (route.routeName.includes("Car")) {
      finalRoutes.car = true;
    }
    if (route.routeName.includes("Train")) {
      finalRoutes.train = true;
    }
    if (route.routeName.includes("Bus")) {
      finalRoutes.bus = true;
    }
    return routes;
  });
  return finalRoutes;
};
