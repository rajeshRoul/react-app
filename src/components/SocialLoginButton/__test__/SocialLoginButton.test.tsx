/* eslint-disable no-undef */
import React from 'react'
import { render, cleanup, fireEvent, screen } from '@testing-library/react'
import SocialLoginButton from '../SocialLoginButton'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)

test('social login button click', () => {
    const handleClick = jest.fn()
    const { getByTestId } = render(
        <SocialLoginButton
            name="test"
            logoUrl="/test"
            handleClick={handleClick}
        />
    )
    fireEvent.click(getByTestId('socialButton'))
    expect(handleClick).toHaveBeenCalledTimes(1)
    fireEvent.click(getByTestId('socialButton'))
    expect(handleClick).toHaveBeenCalledTimes(2)
    const imgElement = screen.getByAltText('test')
    expect(imgElement).toBeInTheDocument()
})

it('should take a snapshot', () => {
    const { getByTestId } = render(
        <SocialLoginButton name="test" logoUrl="/test" handleClick={() => {}} />
    )
    expect(getByTestId('socialButton')).toMatchSnapshot()
})
