/* eslint-disable no-undef */
import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Button from '../Button'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)

test('button click', () => {
    const handleClick = jest.fn()
    const { getByTestId } = render(
        <Button value="test button" handleClick={handleClick} />
    )
    expect(getByTestId('button')).toHaveTextContent('test button')
    fireEvent.click(getByTestId('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
    fireEvent.click(getByTestId('button'))
    expect(handleClick).toHaveBeenCalledTimes(2)
})

it('should take a snapshot', () => {
    const { getByTestId } = render(
        <Button value="test button" handleClick={() => {}} />
    )
    expect(getByTestId('button')).toMatchSnapshot()
})
