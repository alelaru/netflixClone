import { render, fireEvent, getByPlaceholderText } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from "react-dom/test-utils"
import SignIn from "../../pages/signin";
import FirebaseContext from "../../context/firebase";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({}),
}));

describe("<SignIn/>", () => {
    beforeEach(() => {
        jest.clearAllMocks();
});


it('renders the SignIn page with a form submission', async () => {
    const succeededToLogin = jest.fn(() => Promise.resolve('I am signed in!'));
    const firebase = {
      auth: jest.fn(() => ({
        signInWithEmailAndPassword: succeededToLogin
      }))
    };

    console.log("Aquí firebase",firebase.auth().signInWithEmailAndPassword())


    const { getByPlaceholderText, queryByTestId, getByTestId, debug } = render(

      <Router>
          <FirebaseContext.Provider value={firebase}>
            <SignIn></SignIn>
          </FirebaseContext.Provider>
    </Router>
    );

    await act(async () => {
        await fireEvent.change(getByPlaceholderText("Email Address"), {target: { value: "alelaru@gmail.com" }});
        await fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password' } });
        // fireEvent.click(getByTestId("sign-in"))

        expect(getByPlaceholderText("Email Address").value).toBe("alelaru@gmail.com")
        expect(getByPlaceholderText("Password").value).toBe("password")
        expect(queryByTestId("error")).toBeFalsy();

        // debug();

    })
    // expect(getByText('Unlimited films, tv, programs and more')).toBeTruthy();
    // expect(getByText('Watch anywhere and cancel anytime')).toBeTruthy();
    // expect(getAllByPlaceholderText('Email address')).toBeTruthy();
    // expect(getAllByText('Try it now')).toBeTruthy();

    })

})


