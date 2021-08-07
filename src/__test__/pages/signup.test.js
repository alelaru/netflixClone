import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from "react-dom/test-utils"
import SignUp from "../../pages/signup";
import FirebaseContext from "../../context/firebase";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({}),
}));

describe("<SignUp/>", () => {
    beforeEach(() => {
        jest.clearAllMocks();
});


it('renders the SignUp page with a form submission', async () => {
    const succeededToSignUp = jest.fn(() => 
        Promise.resolve({ user: 
            { updateProfile: jest.fn(() => 
                Promise.resolve("I am signed up")
            )} 
        })
    )
    const firebase = {
      auth: jest.fn(() => ({
        createUserWithEmailAndPassword: succeededToSignUp
      }))
    };

    console.log("Aquí firebas createUsername",firebase.auth().createUserWithEmailAndPassword())


    const { getByText, getByPlaceholderText, queryByTestId, getByTestId, debug } = render(

      <Router>
          <FirebaseContext.Provider value={firebase}>
            <SignUp></SignUp>
          </FirebaseContext.Provider>
    </Router>
    );

    await act(async () => {
        await fireEvent.change(getByPlaceholderText("First Name"), {target: { value: "Alejandro" }});
        await fireEvent.change(getByPlaceholderText("Email Address"), {target: { value: "alelaru@gmail.com" }});
        await fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password' } });
        // fireEvent.click(getByTestId("sign-up"))

        expect(getByPlaceholderText("Email Address").value).toBe("alelaru@gmail.com")
        expect(getByPlaceholderText("Password").value).toBe("password")
        expect(getByPlaceholderText("First Name").value).toBe("Alejandro")

        expect(queryByTestId("error")).toBeFalsy();

        // debug();

    })
    // expect(getByText('Unlimited films, tv, programs and more')).toBeTruthy();
    // expect(getByText('Watch anywhere and cancel anytime')).toBeTruthy();
    // expect(getAllByPlaceholderText('Email address')).toBeTruthy();
    // expect(getAllByText('Try it now')).toBeTruthy();

    })

})


