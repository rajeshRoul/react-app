/* eslint-disable no-undef */
import React, { ReactElement } from 'react'
import { render, cleanup } from '@testing-library/react'
import TextInput from '../TextInput'
import '@testing-library/jest-dom/extend-expect'
import ThemeProvider, { ThemeContext } from '../../../util/themeContext'

const renderWithContext = (component: ReactElement): any => {
    return {
        ...render(
            <ThemeProvider value={ThemeContext}>{component}</ThemeProvider>
        ),
    }
}

afterEach(cleanup)

test('button click', () => {
    const { getByTestId } = renderWithContext(
        <TextInput
            type="text"
            placeholder="test placeholder"
            value="test"
            handleChange={() => {}}
        />
    )
    expect(getByTestId('textInput')).toHaveValue('test')
})

it('should take a snapshot', () => {
    const { getByTestId } = renderWithContext(
        <TextInput
            type="text"
            placeholder="test placeholder"
            value="test"
            handleChange={() => {}}
        />
    )
    expect(getByTestId('textInput')).toMatchSnapshot()
})
