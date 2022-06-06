import {render, screen} from '@testing-library/react';
import AboutMe from "./AboutMe.tsx";
import userEvent from "@testing-library/user-event";
import Welcome from "../welcome/Welcome";

describe(
  'AboutMe Component', () => {

    test('renders Programming as a text', () => {
      render(<AboutMe/>);
      const programmingElement = screen.getByText(/Programming/, {exact: true});
      expect(programmingElement).toBeInTheDocument();
    });

    test('renders Work as a text', () => {
      render(<AboutMe/>);
      const workElement = screen.getByText(/Work/, {exact: true});
      expect(workElement).toBeInTheDocument();
    });

    test('renders Education as a text', () => {
      render(<AboutMe/>);
      const educationElement = screen.getByText(/Education/, {exact: true});
      expect(educationElement).toBeInTheDocument();
    });
  }
)


