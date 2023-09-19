import { render, screen} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'
import Home from './'

// describe
describe('is Testing Example word exist', () => {
    render(<Home />, {wrapper: BrowserRouter})
    test('Testing Example', () => {
        const findText = screen.getByText(/Testing Example/)
        expect(findText).toBeInTheDocument()
    })
 })

// test