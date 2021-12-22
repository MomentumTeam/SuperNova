export const fromStringToObject = (text: string) => {
  try {
    const jsonObj = JSON.parse(text);
    return jsonObj;
  } catch (error) {
    throw error;
  }
};
