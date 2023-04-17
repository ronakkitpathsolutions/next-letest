import jwt_decode from "jwt-decode";

export const classNames = (...classes) => classes.filter(Boolean).join(' ')

export const decodeToken = (token) => {
    if (!token) return null
    return jwt_decode(token);
}

export const isTokenActivated = (token) => {
    if (!token) return false
    const decoded = jwt_decode(token)
    return (decoded?.exp > Date.now() / 1000)
}

export const swapKeyValue = (object) => {
    if(!object) return {}
    return Object.fromEntries(Object.entries(object).map(([key, val]) => [val, key]))
}