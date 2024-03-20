export const getUser = async () => {
  try {
    const cookieUserName = document.cookie.replace(
      /(?:(?:^|.*;\s*)auth_user_name\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    if (cookieUserName) {
      return {name: cookieUserName};
    }
  } catch (err) {
    console.error(err);
  }
};
