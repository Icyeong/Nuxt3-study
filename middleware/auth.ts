export default defineNuxtRouteMiddleware(
  (to, from) => {
    console.log(to);
    console.log(from);
    const isLoggedIn = false;
    if (isLoggedIn) {
      // redirect to the page we want to go
      return navigateTo(to.fullPath);
    }
    // redirect to a login page
    return navigateTo("/login");
  }
  // ,{global : true}
);
