

// export const fromStringToObject = (incomingRequest: any) => {
//     const kartoffelRequestString = incomingRequest.value.toString().replace(/\s/g, "");
//     return JSON.parse(kartoffelRequestString);
// }

export const fromStringToObject = (text: string) => {
    const object = JSON.parse(text.replace(/\s/g, ""));
    return object;
}