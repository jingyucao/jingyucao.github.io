import {render, screen} from '@testing-library/react';
import Welcome from "./Welcome.tsx";
import userEvent from "@testing-library/user-event";

describe(
  'Welcome Component', () => {
    test('renders Hello World', () => {
      render(<Welcome/>);
      const welcomeElement = screen.getByText(/Hello World/, {exact: true});
      const nameElement = screen.getByText(/JINGYU CAO/, {exact: true});
      expect(welcomeElement).toBeInTheDocument();
      expect(nameElement).toBeInTheDocument()
    });

    test('show whiteLogo when div NOT hovered', () => {
      render(<Welcome/>);
      const whiteLinkedinLogo = screen.queryByTestId('whiteLinkedinLogo');
      const colorLinkedinLogo = screen.queryByTestId('colorLinkedinLogo');
      const whiteGithubLogo = screen.queryByTestId('whiteGithubLogo');
      const colorGithubLogo = screen.queryByTestId('colorGithubLogo');
      expect(whiteLinkedinLogo).toBeInTheDocument();
      expect(colorLinkedinLogo).toBeInTheDocument();
      expect(whiteGithubLogo).toBeInTheDocument();
      expect(colorGithubLogo).toBeInTheDocument();
    })

  }
)


