import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SelectProfileContainer from '../../containers/profiles';


describe('<Profiles />', () => {
  it('renders the <Profiles />', () => {
    const user = { displayName: 'Karl', photoURL: 'profile.png' };
    const setProfile = jest.fn();
    const { getByTestId, debug } = render(
      <Router>
          <SelectProfileContainer user={user} setProfile={setProfile} />
      </Router>
    );

    fireEvent.click(getByTestId('user-profile'));
    expect(setProfile).toHaveBeenCalled();
  });
});
