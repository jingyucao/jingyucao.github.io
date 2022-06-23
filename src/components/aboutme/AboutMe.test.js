import {render, screen} from '@testing-library/react';
import AboutMe from "./AboutMe.tsx";

describe(
  'AboutMe Component', () => {

    test('renders About Me Background', () => {
      render(<AboutMe/>);
      const bgGrayColor = screen.getByTestId('bgGrayColor');
      expect(bgGrayColor).toBeVisible();
      expect(bgGrayColor).toBeInTheDocument();
      const bgAboutMeImg = screen.getByTestId('bgAboutMeImg');
      expect(bgAboutMeImg).toBeVisible();
      expect(bgAboutMeImg).toBeInTheDocument();
    });

  }
)


