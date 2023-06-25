// testing the deploy
export const fetchUser = () => {
  const userInfo =
    localStorage.getItem("user") !== "underfined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  return userInfo;
};
