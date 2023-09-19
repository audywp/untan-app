import {useQuery, QueryClientProvider,  QueryClient} from 'react-query'
import { waitFor, renderHook, render, screen, fireEvent } from '@testing-library/react'
import App from './App';

const queryClient = new QueryClient()

function useCustomHook() {
    return useQuery({ queryKey: ['customHook'], queryFn: () => 'Hello' });
}
const wrapper = ({children}) => {
   return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
   )
}
describe('test app js', () => {
    test("test react query", async () => {
        const { result } = renderHook(() => useCustomHook(), {wrapper})
    
        await waitFor(() => expect(result.current.isSuccess).toBe(true))
    })
    test("render app", async () => {
        render(<App />, {wrapper})
        const router = screen.getByText(/Why do we need Test ?/)
        expect(router).toBeInTheDocument()
        fireEvent.click(screen.getByText(/List Users/))
        expect(screen.getByText(/loading..../)).toBeInTheDocument()
    })
})