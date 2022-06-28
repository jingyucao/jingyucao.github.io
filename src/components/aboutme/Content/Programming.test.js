import {render, screen} from '@testing-library/react';
import Programming from "./Programming.tsx";
import userEvent from "@testing-library/user-event";

describe('Programming Component', () => {

  test('renders "Programming"and"2020-2022"as text', () => {
    render(<Programming onShowModal={() => {
    }}/>);
    const programmingText = screen.queryByText(/Programming/, {exact: true});
    const programmingYearText = screen.queryByText(/2020-2022/, {exact: true});
    expect(programmingText).toBeInTheDocument();
    expect(programmingYearText).toBeInTheDocument();
  })

  test('renders both skills as text', () => {
    render(<Programming onShowModal={() => {
    }}/>);
    const technologiesText = screen.queryByText(/Technologies/, {exact: true});
    const designText = screen.queryByText(/Design/, {exact: true});
    expect(technologiesText).toBeInTheDocument();
    expect(designText).toBeInTheDocument();
  })

  test('renders detailButton', () => {
    render(<Programming onShowModal={() => {
    }}/>);
    const programmingButton = screen.queryByTestId('detailButton');
    expect(programmingButton).toBeInTheDocument();
    expect(programmingButton).toHaveTextContent('Learn More');
  })

  test('renders programmingCarousel when button is clicked', async () => {
    render(<Programming onShowModal={() => {
    }}/>);
    const programmingButton = screen.queryByTestId('detailButton');
    userEvent.click(programmingButton);
    // expect(educationCarousel).toBeInTheDocument();
  })

})
