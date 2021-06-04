export const getTimeZone = () => {
  const d = new Date();
    const timeZone = d.toString().split(" ")[5].split("").slice(3).join("");
    return timeZone
}