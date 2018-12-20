import { colorSettings } from './Colors.styles';

const { signUpBackground, darkText } = colorSettings;
const generalFontBold = 'Thasadith-Bold';

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
    fontSize: 35,
    color: darkText,
    padding: 30,
    fontWidth: 'bold',
  },
};

export default signUpStyles;
