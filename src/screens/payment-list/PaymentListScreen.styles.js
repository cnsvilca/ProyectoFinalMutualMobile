import { Dimensions, StyleSheet, StatusBar } from 'react-native'
import { COLORS } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.primary,
    alignItems: 'center'
  },
  container2: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.secondaty,
    alignItems: 'center'
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 600,
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
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  cardBody: {
    flexDirection: 'column',
    marginBottom: 20
  },
  cardIcon: {
    fontSize: 70,
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.inactive
  },
  cardImporteCuota: {
    marginTop: 10,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.primary
  },
  cardItem: {
    fontSize: 22,
    marginHorizontal: 20,
    fontWeight: 'bold',
    color: COLORS.primary
  },
  messageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  iconTitle: {
    marginTop: '50%',
    fontSize: 100,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.text
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.text
  },
  txtMessage: {
    fontSize: 12,
    color: COLORS.text,
    fontStyle: 'italic'
  },
  titleCuotas: {
    color: COLORS.white,
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  titleCuotasContainer: {
    width: '100%',
    backgroundColor: COLORS.primary,
  },
  pagado: {
    color: 'green',
    fontStyle: 'italic'
  },
  debe: {
    color: 'red',
    fontStyle: 'italic'
  }
})
