import {render, screen} from '@testing-library/react';
import Welcome from "./Welcome.tsx";

describe(
  'Welcome Component', () => {
    test('renders Hello World', () => {
      render(<Welcome/>);
      const welcomeElement = screen.getByText(/Hello World/, {exact: true});
      expect(welcomeElement).toBeInTheDocument();
    });
    //
    // test('renders whiteLogo when div NOT hovered', () => {
    //   render(<Welcome/>);
    //   const whiteLogo = screen.queryByTestId('whiteLogo');
    //   expect(whiteLogo).toBeVisible();
    // })
    //
    // test('NOT renders white Logo when div hovered', () => {
    //   render(<Welcome/>);
    //   const logoCard = screen.queryByTestId('logoCard');
    //   userEvent.hover(logoCard);
    //   const whiteLogo = screen.queryByTestId('whiteLogo');
    //   expect(whiteLogo.get(0).props.style).toHaveProperty('none')
    // })
    //
    // test('renders colorLogo when div hovered', () => {
    //   render(<Welcome/>);
    //   const logoCard = screen.queryByTestId('logoCard');
    //   userEvent.hover(logoCard);
    //   const colorLogo = screen.queryByTestId('colorLogo');
    //   expect(colorLogo).toBeVisible();
    // })

    // test('not renders color Logo when div NOT hovered', () => {
    //   render(<Welcome/>);
    //   const colorLogo = screen.getAllByTestId('colorLogo');
    //   expect(colorLogo[0]).not.toBeVisible();
    // })
  }
)


