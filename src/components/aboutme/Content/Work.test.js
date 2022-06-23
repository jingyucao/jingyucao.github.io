import {render, screen} from '@testing-library/react';
import Work from "./Work.tsx";
import userEvent from "@testing-library/user-event";

describe('Work Component', () => {

  test('renders "Work"and"2016-2022"as text', () => {
    render(<Work onShowModal={() => {
    }}/>);
    const workText = screen.queryByText(/Work/, {exact: true});
    const workYearText = screen.queryByText(/2016-2022/, {exact: true});
    expect(workText).toBeInTheDocument();
    expect(workYearText).toBeInTheDocument();
  })

  test('renders both offices as text', () => {
    render(<Work onShowModal={() => {
    }}/>);
    const loidlText = screen.queryByText(/Atelier-Loidl Landschaftsarchitektur/, {exact: true});
    const a24Text = screen.queryByText(/A24 Landschaftsarchitektur/, {exact: true});
    expect(loidlText).toBeInTheDocument();
    expect(a24Text).toBeInTheDocument();
  })

  test('renders detailButton', () => {
    render(<Work onShowModal={() => {
    }}/>);
    const workButton = screen.queryByTestId('detailButton');
    expect(workButton).toBeInTheDocument();
    expect(workButton).toHaveTextContent('Learn More');
  })

  test('renders workCarousel when button is clicked', async () => {
    render(<Work onShowModal={() => {
    }}/>);
    const educationButton = screen.queryByTestId('detailButton');
    userEvent.click(educationButton);
    // expect(educationCarousel).toBeInTheDocument();
  })


})
