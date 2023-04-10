import React from 'react'
import { isTokenActivated } from '../utils/helper'
import { getDataFromLocal } from '../utils/localStorage'

const withAuth = (RenderComponent, NavigateComponent) => ({ to, replace, ...props }) => {

    const token = getDataFromLocal('token')
    return !isTokenActivated(token) ? <RenderComponent {...props} /> : <NavigateComponent {...{ to, replace }} />
}

export default withAuth