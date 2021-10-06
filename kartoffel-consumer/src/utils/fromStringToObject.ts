export const fromStringToObject = (text: string) => {
    const object = JSON.parse(text.replace(/\s/g, ""));
    return object;
}