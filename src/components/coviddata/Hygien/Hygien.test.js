import {render, screen} from '@testing-library/react';
import Hygien from "./Hygien.tsx";
import userEvent from "@testing-library/user-event";

describe('Hygien Component', () => {

  test('renders vaccination Image', () => {
    render(<Hygien/>);
    const vaccinationImg = screen.queryByAltText(/Vaccination/);
    expect(vaccinationImg).toBeInTheDocument();
  })

  test('renders "fight off the virus" as text when vaccination Img is clicked', () => {
    render(<Hygien/>);
    const vaccinationImg = screen.queryByAltText(/Vaccination/);
    userEvent.click(vaccinationImg);
    const vaccinationText = screen.queryByText('fight off the virus', {exact: false});
    expect(vaccinationText).toBeInTheDocument();
  })

  test('NOT renders "fight off the virus" as text when vaccination Img is not clicked', () => {
    render(<Hygien/>);
    const vaccinationText = screen.queryByText('fight off the virus', {exact: false});
    expect(vaccinationText).not.toBeInTheDocument();
  })

  test('renders facemask Image', () => {
    render(<Hygien/>);
    const facemaskImg = screen.queryByAltText(/Wear facemask/);
    expect(facemaskImg).toBeInTheDocument();
  })

  test('renders "prevent the virus from spreading" as text when facemask Img is clicked', () => {
    render(<Hygien/>);
    const facemaskImg = screen.queryByAltText(/Wear facemask/);
    userEvent.click(facemaskImg);
    const facemaskText = screen.queryByText('prevent the virus from spreading', {exact: false});
    expect(facemaskText).toBeInTheDocument();
  })

  test('NOT renders "prevent the virus from spreading" as text when vaccination Img is not clicked', () => {
    render(<Hygien/>);
    const facemaskText = screen.queryByText('prevent the virus from spreading', {exact: false});
    expect(facemaskText).not.toBeInTheDocument();
  })

  test('renders antiseptic Image', () => {
    render(<Hygien/>);
    const antisepticImg = screen.queryByAltText(/Use antiseptic/);
    expect(antisepticImg).toBeInTheDocument();
  })

  test('NOT renders "prevent the virus from spreading" as text when antiseptic Img is clicked', () => {
    render(<Hygien/>);
    const antisepticImg = screen.queryByAltText(/Use antiseptic/);
    userEvent.click(antisepticImg);
    const facemaskText = screen.queryByText('prevent the virus from spreading', {exact: false});
    expect(facemaskText).not.toBeInTheDocument();
  })

  test('renders Washhands Image', () => {
    render(<Hygien/>);
    const washhandsImg = screen.queryByAltText(/Wash hands/);
    expect(washhandsImg).toBeInTheDocument();
  })

})
