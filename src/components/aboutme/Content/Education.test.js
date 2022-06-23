import {render, screen} from '@testing-library/react';
import Education from "./Education.tsx";
import userEvent from "@testing-library/user-event";

describe('Education Component', () => {

  test('renders "Education"and"2007-2016"as text', () => {
    render(<Education onShowModal={() => {
    }}/>);
    const educationText = screen.queryByText(/Education/, {exact: true});
    const educationYearText = screen.queryByText(/2007-2016/, {exact: true});
    expect(educationText).toBeInTheDocument();
    expect(educationYearText).toBeInTheDocument();
  })

  test('renders both universities as text', () => {
    render(<Education onShowModal={() => {
    }}/>);
    const bachelorText = screen.queryByText(/Qingdao University of Technology/, {exact: true});
    const masterText = screen.queryByText(/Karlsruhe Institute of Technology/, {exact: true});
    expect(bachelorText).toBeInTheDocument();
    expect(masterText).toBeInTheDocument();
  })

  test('renders detailButton', () => {
    render(<Education onShowModal={() => {
    }}/>);
    const educationButton = screen.queryByTestId('detailButton');
    expect(educationButton).toBeInTheDocument();
    expect(educationButton).toHaveTextContent('Learn More');
  })

  test('renders educationCarousel when button is clicked', async () => {
    render(<Education onShowModal={() => {
    }}/>);
    const educationButton = screen.queryByTestId('detailButton');
    userEvent.click(educationButton);
    // expect(educationCarousel).toBeInTheDocument();
  })


})
