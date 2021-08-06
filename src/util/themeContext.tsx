import React, { ReactElement, useState } from 'react'

export const ThemeContext = React.createContext({
    theme: 'light',
    toggleTheme: () => {},
})

const ThemeProvider = ({ children }: any): ReactElement => {
    const [theme, setTheme] = useState('Light')

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme: () =>
                    setTheme(theme === 'Light' ? 'Dark' : 'Light'),
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
