/**
 * Fetch the user information from the local storage.
 *
 * @returns {object | null} - The user information retrieved from the local storage, or null if not found.
 */
export const fetchUser = () => {
  // Retrieve the user information from the local storage.
  const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  return userInfo;
};
