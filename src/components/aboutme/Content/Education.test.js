import {render, screen} from '@testing-library/react';
import Education from "./Education.tsx";
import userEvent from "@testing-library/user-event";

describe('Education Component', ()=>{
  test('renders educationCarousel when button is clicked', () => {
    render(<Education onShowModal={()=>{}}/>);
    const educationButton = screen.queryByTestId('detailButton');
    expect(educationButton).toBeInTheDocument();
    expect(educationButton).toHaveTextContent('Learn More')
    userEvent.click(educationButton);
    const modalFragment = screen.queryByTestId('modalFragment')
    expect(modalFragment).toBeVisible()

  })
})
