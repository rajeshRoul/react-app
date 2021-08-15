/* eslint-disable no-undef */
import React from 'react'
import { render, cleanup, screen } from '@testing-library/react'
import Author from '../Author'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)

test('renders Author component', () => {
    const name = 'test'
    const url = '/test'
    const { getByTestId } = render(<Author name={name} url={url} />)
    expect(getByTestId('authorName')).toHaveTextContent(name)
    const imgElement = screen.getByAltText(name)
    expect(imgElement).toBeInTheDocument()
})

it('should take a snapshot', () => {
    const name = 'test'
    const url = '/test'
    const { getByTestId } = render(<Author name={name} url={url} />)
    expect(getByTestId('author')).toMatchSnapshot()
})
