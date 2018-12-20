import { colorSettings } from './Colors.styles';
import { generalFontBold } from './generalStyling.styles';

const { signUpBackground, darkText } = colorSettings;

<<<<<<< HEAD
const { signUpBackground, darkText } = colorSettings;
const generalFontBold = 'Thasadith-Bold';
=======
>>>>>>> 5eb6eed2b92a083f32cddc573e1eda9d85b33cdf

const signUpStyles = {
  container: {
    flex: 1,
    backgroundColor: signUpBackground,
    // padding: 30,
  },
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: signUpBackground,
  },
  interests: {
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: generalFontBold,
<<<<<<< HEAD
    fontSize: 35,
    color: darkText,
    padding: 30,
    fontWidth: 'bold',
=======
    fontSize: 40,
    color: darkText,
    fontWeight: 'bold',
    padding: 30,
>>>>>>> 5eb6eed2b92a083f32cddc573e1eda9d85b33cdf
  },
};

export default signUpStyles;
