export const getErrorMessage = (error: any) => {
    return error.response?.data?.message ? error.response?.data?.message : error.message
}

export const getStatusCode = (error: any) => {
    return error.response?.status? error.response?.status: 400;
}