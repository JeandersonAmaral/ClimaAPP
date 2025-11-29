// style.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#1d1d1dff',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 16,
    justifyContent: 'space-between',
  },
  searchArea: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  inputContainer: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 8,
  },
  input: {
    color: 'white',
    padding: 10,
    borderRadius: 6,
  },
  searchBox: {
    flex: 1,
    borderRadius: 10,
    marginRight: 10,
    justifyContent: 'center',
  },
  searchButtonInner: {
    borderWidth: 2,
    borderColor: 'white',
    paddingVertical: 9,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#ffffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  mainCard: {
    borderRadius: 10,
    padding: 20,
    marginBottom: 16,
    overflow: 'hidden',
  },
  mainTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  cityText: {
    color: '#f6f6f6',
    fontSize: 35,
    fontWeight: 'bold',
  },
  timeText: {
    color: '#f6f6f6',
    fontSize: 16,
  },
  dateText: {
    color: '#f6f6f6',
    fontSize: 14,
    textAlign: 'left',
    position: 'absolute', 
    bottom: -30,
    left: 0,
    right: 0,
},
  mainBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tempText: {
    color: '#f6f6f6',
    fontSize: 48,
    fontWeight: 'bold',
  },
  minMaxText: {
    color: '#f6f6f6',
    fontSize: 16,
    marginTop: 4,
  },
  descText: {
    color: '#f6f6f6',
    fontSize: 16,
    marginTop: 8,
  },
  iconPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingBottom: 2,
  },
  detailLabel: {
    color: '#f6f6f6',
    fontSize: 16,
  },
  detailLabelTop: {
    paddingTop: 30,
    color: '#f6f6f6',
    fontSize: 16,
  },
  detailValueTop: {
    paddingTop: 30,
    color: '#f6f6f6',
    fontSize: 16,
    fontWeight: '600',
  },
  detailValue: {
    color: '#f6f6f6',
    fontSize: 16,
    fontWeight: '600',
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  weekItem: {
    alignItems: 'center',
    textTransform: 'uppercase',
  },
  weekDay: {
    color: '#f6f6f6',
    fontSize: 12,
    marginBottom: 4,
  },
  weekTemp: {
    color: '#f6f6f6',
    fontSize: 15,
    marginTop: 4,
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  footerText: {
    color: '#f6f6f6',
    fontSize: 12,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 12,
  },
});
