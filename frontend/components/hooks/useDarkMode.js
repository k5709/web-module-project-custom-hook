import React from 'react'
import { useState } from 'react'

import useLocalStorage from './useLocalStorage';

const useDarkMode = (initialValue) => {
    const [darkmode, setDarkMode] = useLocalStorage(initialValue);
    return [darkmode, setDarkMode];
}
export default useDarkMode;