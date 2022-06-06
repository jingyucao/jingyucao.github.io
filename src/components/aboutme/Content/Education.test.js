import {render, screen} from '@testing-library/react';
import Education from "./Education.tsx";
import userEvent from "@testing-library/user-event";

describe('Education Component', ()=>{
  test('renders educationCarousel when button is clicked', () => {
    render(<Education/>);
    const educationButton = screen.getByRole('button');
    expect(educationButton).toBeInTheDocument()
    userEvent.click(educationButton);

  })
})
