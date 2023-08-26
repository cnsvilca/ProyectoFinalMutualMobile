import { Dimensions, StyleSheet, StatusBar } from 'react-native'
import { COLORS } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.text,
    alignItems: 'center'
  },
  itemContainer: {
    flex: 1,
    width: Dimensions.get('screen').width - 60,
    borderRadius: 10, // Fixed value --- magic number
    overflow: 'hidden',
    margin: 20,
    backgroundColor: COLORS.white,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2
  },
  cardHeader:{
    flexDirection:'row',
    justifyContent:'space-around'
  },
  cardBody:{
    flexDirection:'column',
    marginBottom: 20
  },
  cardIcon:{
    fontSize: 70,
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.primary
  },
  cardImporteCuota: {
    marginTop: 10,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.primary
  },
  cardItem:{
    fontSize:22,
    marginHorizontal: 20,
    fontWeight: 'bold',
    color: COLORS.primary
  },
  messageContainer:{
    flex: 1,
    alignItems: 'center',
  },
  iconTitle:{
    marginTop:'50%',
    fontSize: 100,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.primary
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.primary
  },
  txtMessage:{
    fontSize:12,
    color: COLORS.primary,
    fontStyle: 'italic'
  }
})
