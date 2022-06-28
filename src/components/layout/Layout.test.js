import {render, screen} from '@testing-library/react';
import Layout from "./Layout.tsx";
import {HashRouter} from 'react-router-dom';

describe('Layout Component', () => {

  test('renders Layout Body', () => {
    render(<HashRouter> <Layout/> </HashRouter>);
    const headerComponent = screen.queryByTestId('layoutHeader');
    const bodyComponent = screen.queryByTestId('layoutBody')
    expect(headerComponent).toBeInTheDocument();
    expect(bodyComponent).toBeInTheDocument();
  })

  test('renders navigation Text', () => {
    render(<HashRouter> <Layout/> </HashRouter>);
    const homeText = screen.queryByText('Home');
    const aboutMeText = screen.queryByText('About me');
    const foodDeliveryText = screen.queryByText('Food Delivery');
    const covidDataText = screen.queryByText('Covid Data');
    expect(homeText).toBeVisible();
    expect(aboutMeText).toBeVisible();
    expect(foodDeliveryText).toBeVisible();
    expect(covidDataText).toBeVisible()
  })

})
