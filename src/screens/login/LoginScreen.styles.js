import { StatusBar, StyleSheet } from 'react-native'
import { COLORS } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.primary,
    marginTop: StatusBar.currentHeight
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 600,
  },
  titleContainer:{
    marginBottom:30
  },
  iconTitle:{
    marginTop:50,
    fontSize: 100,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'white'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  input: {
    backgroundColor: COLORS.text,
    color: COLORS.primary,
    fontSize: 20,
    fontWeight:'bold',
    paddingVertical:10,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 50,
    marginHorizontal:30
  },
  errorText: {
    color: 'red',
    marginBottom: 8
  },
  button: {
    backgroundColor: COLORS.secondaty,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal:30,
    alignItems: 'center'
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: 'bold'
  }
})
