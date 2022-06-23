import {screen, render} from "@testing-library/react";
import Content from "./Content";

describe('Content Component', () => {
    test('renders Education,Work,Programming Components', () => {
        render(<Content/>);
        const educationComponent = screen.getByTestId('educationComponent');
        const workComponent = screen.getByTestId('workComponent');
        const programmingComponet = screen.getByTestId('programmingComponent');
        expect(educationComponent).toBeInTheDocument();
        expect(workComponent).toBeInTheDocument();
        expect(programmingComponet).toBeInTheDocument();
      }
    )
  }
)
