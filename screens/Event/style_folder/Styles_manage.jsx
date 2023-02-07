import { Platform, StyleSheet, Dimensions } from 'react-native';

import size from '../../../controller/ModifySize';

export default StyleSheet.create({
  avatar: {
    margin: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: '#fafafa',
  },
  headerContainer: {
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.04,
    marginTop: Platform.OS === 'ios' ? Dimensions.get('window').height * 0.02 : 53,
    marginBottom: 10,
  },
  headerArrowBox: {
    flex: 1.9,
    marginLeft: Dimensions.get('window').width * 0.05,
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 1,
    marginHorizontal: Dimensions.get('window').width * 0.03,
  },
  DeletebtnInManage: {
    backgroundColor: '#eb6f6f',
    width: 70,
    height: 35,
    borderRadius: 30,
    marginHorizontal: 5,
    marginVertical: 25,
    justifyContent: 'center',
  },
  DeletebtnInManageText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
  },
  messageBox: {
    width: '100%',
    paddingHorizontal: 5,
    height: 100,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#bfbebe',
  },
  manageSendMessagebtn: {
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    backgroundColor: '#1784B2',
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#28527A',
    marginTop: 10,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
  },
  manageSendMessagebtnText: {
    color: '#FBEEAC',
    fontSize: 16,
    fontWeight: 'bold',

  },
  MessagebtnInManage: {
    backgroundColor: '#abd873',
    width: 70,
    height: 35,
    borderRadius: 30,
    marginHorizontal: 5,
    marginVertical: 25,
    justifyContent: 'center',
  },
  MessagebtnInManageText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
  },
  name: {
    fontSize: 24,
    color: '#28527A',
  },
  nameheader: {
    flex: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerDeleteView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  headerEditView: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginHorizontal: Dimensions.get('window').width * 0.03,
  },
  cardForAttendees: {
    width: Dimensions.get('window').width * 0.9,
    height: 85,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: 'bebebe',
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowRadius: 10,
    elevation: 4,
    marginTop: 10,
    marginLeft: Dimensions.get('window').width * 0.025,
    marginBottom: 5,
    justifyContent: 'space-between',
  },
  reachLimitNum: {
    fontSize: 18,
    color: 'red',
    marginTop: 10,
    marginLeft: 50,
  },
  signupIndex: {
    color: '#000',
    fontSize: 15,
  },
  underLimitNum: {
    fontSize: 18,
    color: '#abd873',
    marginTop: 10,
    marginLeft: 50,
  },
  NoLimitNum: {
    fontSize: 18,
    color: '#abd873',
    marginTop: 10,
    marginLeft: 15,
  },
  manageBtn: {
    alignContent: 'flex-end',
    marginLeft: 1,
  },
  removeBox: {
    width: 350,
    height: 140,
  },
  removeBox2: {
    width: 350,
    height: 90,
  },
});
