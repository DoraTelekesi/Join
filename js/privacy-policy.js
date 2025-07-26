/**
 * Initializes the privacy policy page by loading and displaying logged-in user information.
 */
async function init() {
  loadLoginInfo("whoIsLoggedIn");
  await showLoggedInInfo();
  highlightMenuActual();
}

/**
 * Displays logged-in user information.
 */
async function showLoggedInInfo() {
  const loginInfo = JSON.parse(localStorage.getItem("loginInfo"));
  if (loginInfo.isGuest === true) {
    document.getElementById("initialLetter").innerHTML = "G";
  } else {
    document.getElementById("initialLetter").innerHTML = loginInfo.userLoggedIn.avatar;
  }
}
