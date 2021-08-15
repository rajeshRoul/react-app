/* eslint-disable no-undef */
import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Counter from '../Counter'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)

test('increment/decrement on button clicks', () => {
    const { getByTestId } = render(<Counter />)
    expect(getByTestId('counterValue')).toHaveTextContent('0')
    fireEvent.click(getByTestId('decrementCounter'))
    expect(getByTestId('counterValue')).toHaveTextContent('-1')
    fireEvent.click(getByTestId('incrementCounter'))
    expect(getByTestId('counterValue')).toHaveTextContent('0')
    fireEvent.click(getByTestId('incrementCounter'))
    expect(getByTestId('counterValue')).toHaveTextContent('1')
})

it('should take a snapshot', () => {
    const { getByTestId } = render(<Counter />)
    expect(getByTestId('Counter')).toMatchSnapshot()
})
