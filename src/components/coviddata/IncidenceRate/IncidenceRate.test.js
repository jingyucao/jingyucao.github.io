import {render, screen} from '@testing-library/react';
import IncidenceRate from "./IncidenceRate.tsx";

describe(
  'IncidenceRate Component', () => {

    test('renders date as a text', async () => {
      render(<IncidenceRate/>);
      const dateText = await screen.findByText('2022',{exact:false},{timeout:5000});
      expect(dateText).toBeInTheDocument();
      // const bgAboutMeImg = screen.getByTestId('bgAboutMeImg');
      // expect(bgAboutMeImg).toBeVisible();
      // expect(bgAboutMeImg).toBeInTheDocument();
    });

  }
)


