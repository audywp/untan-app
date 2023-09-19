import {render, screen} from "@testing-library/react"
import Button from "."

test("button test", () => {
    render(<Button bgColor={"green"} />)
    const button = screen.getByTestId(/button-cta/)
    expect(button).toHaveClass("bg-green-700")
})