export const getErrorMessage = (error: any) => {
    return error.response?.data?.message || error.message
}

export const getStatusCode = (error: any) => {
    return error.response?.status || 400;
}