import firebase from "../config/Firebase";

const db = firebase.ref();

class DataService {
  getAll() {
    return db;
  }

  create(produk) {
    return db.push(produk);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new DataService();
