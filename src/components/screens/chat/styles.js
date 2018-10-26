import {
  StyleSheet,
} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  messagesList: {
    flexGrow: 1,
    height: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  inputTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 5,
  },
  icon: {
    flex: 1,
  },
  messageContainer: {
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  myMessageContainer: {
    alignSelf: 'flex-end',
  },
  message: {
    backgroundColor: '#fafafa',
    borderRadius: 20,
    padding: 10,
    borderBottomLeftRadius: 0,
    marginBottom: 10,
  },
  myMessage: {
    backgroundColor: '#007aff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 0,
  },
  me: {
    textAlign: 'right',
  },
  // messageLeft: {
  //   alignItems: 'flex-start',
  //   backgroundColor: 'blue',
  // },
  // messageRight: {
  //   alignItems: 'flex-end',
  //   backgroundColor: 'green',
  // },
})
