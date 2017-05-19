import {LOGIN_URL, SIGNUP_URL} from '../constants/LoginConstants';
import LoginActions from '../actions/LoginActions';

class AuthService {

  logout() {
    LoginActions.logoutUser();
  }


}

export default new AuthService()
