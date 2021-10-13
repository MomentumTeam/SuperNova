export const fromStringToObject = (text: string) => {
  try {
    const jsonObj = JSON.parse(text.replace(/\s/g, ''));
    return jsonObj;
  } catch (error) {
    throw error;
  }
};
