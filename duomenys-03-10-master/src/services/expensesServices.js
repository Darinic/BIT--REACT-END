import firebase from "../firebase";

export const addExpense = (data) => {
  firebase
  .firestore()
  .collection("Expenses")
  .add(data);
};

export const getAllExpenses = (onExpenses, user) => {
  firebase
    .firestore()
    .collection("Expenses")
    .where("uid", "==", user?.uid)
    .get()
    .then((snapshot) => {
      const newData = snapshot.docs.length
        ? snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        : null;
      onExpenses(newData);
    });
};

export const getExpenseById = (item, id) => {
  firebase
    .firestore()
    .collection("Expenses")
    .doc(id)
    .get()
    .then((docRef) => {
      item(docRef.data());
    });
};

export const updateExpense = (id, data) => {
  firebase.firestore().collection("Expenses").doc(id).set(data);
};

export const deleteExpense = (id) => {
  firebase.firestore().collection("Expenses").doc(id).delete();
};
