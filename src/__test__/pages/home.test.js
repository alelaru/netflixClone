import { render } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';

import Home from "../../pages/home";

describe("<Homepage/>", () => {

it('renders the basic <Homepage /> with a background', () => {
    const { getByText, getAllByPlaceholderText, getAllByText } = render(
      <Router><Home></Home></Router>
    );

    expect(getByText('Unlimited films, tv, programs and more')).toBeTruthy();
    expect(getByText('Watch anywhere and cancel anytime')).toBeTruthy();
    expect(getAllByPlaceholderText('Email address')).toBeTruthy();
    expect(getAllByText('Try it now')).toBeTruthy();

    })

})


