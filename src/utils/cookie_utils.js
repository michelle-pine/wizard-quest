import Cookies from 'universal-cookie';

export const cookieUtils = {
  bakeCookie: function(name, value) {
    const cookies = new Cookies();
    cookies.set(name, value, { path: '/' });
  },
  deleteUserCookieData: function() {
    const cookies = new Cookies();
    cookies.remove("currentStep");
    cookies.remove("choice");
    cookies.remove("doubleTraitor");
  },
  getUserCookieData: function() {
    const cookies = new Cookies();
    const lastState = {
      currentStep: cookies.get("currentStep"),
      choice: cookies.get("choice"),
      doubleTraitor: cookies.get("doubleTraitor"),
    };
    return lastState;
  }
}