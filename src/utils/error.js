const Log = (text, env, status) => {
  if (env === "development") {
    if (status === "error") {
      console.error("Error:", text);
    } else if (status === "warn") {
      console.warn(text);
    } else {
      console.log(text);
    }
  }
};
export default Log;
