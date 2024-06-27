import { StyleSheet } from 'react-native';

const todoScreenStyles = StyleSheet.create({
  header: {
    marginTop: 50,
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 40
  },
  input: {
    borderWidth: 2,
    borderColor: "#1e90ff",
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginVertical: 6
  },
  picker: {
    height: 50,
    width: '100%',
    marginVertical: 6
  },
  button: {
    backgroundColor: "#000",
    borderRadius: 6,
    paddingVertical: 12,
    marginVertical: 34,
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20
  },
  todoContainer: {
    backgroundColor: "#1e90ff",
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 8,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center"
  },
  todoTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "800",
    flex: 1
  },
  todoDescription: {
    color: "#fff",
    fontSize: 16,
    flex: 1
  },
  todoDueDate: {
    color: "#fff",
    fontSize: 14,
    flex: 1
  },
  todoStatus: {
    color: "#fff",
    fontSize: 14,
    flex: 1
  },
  statusPicker: {
    height: 50,
    width: 150,
  }
});

export default todoScreenStyles;
