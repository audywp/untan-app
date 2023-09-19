import { QueryClientProvider,  QueryClient} from 'react-query'
import { waitFor, render, screen, fireEvent} from '@testing-library/react'
import Users from '.'
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient
    test("is data collected", async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Users />
                </BrowserRouter>
            </QueryClientProvider>
        )
        expect(screen.getByText(/loading..../)).toBeInTheDocument()
        await waitFor(() => {
            expect(screen.getByText(/Back To Home/)).toBeInTheDocument()
            expect(screen.getByText(/Leanne Graham/)).toBeInTheDocument()

            waitFor(() => {
                fireEvent.click(screen.getByText(/Back To Home/))

                expect(screen.getByText(/Why do we need Test ?/)).toBeInTheDocument()
            })
        })
    })
