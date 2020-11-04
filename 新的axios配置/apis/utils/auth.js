import Storage from "store"

export default {

  clear() {
    Storage.remove("AUTH");
  },
  save(data) {
    Storage.set("AUTH", data);
  },
  getToken() {
    let accessToken = Storage.get("AUTH");

    if (accessToken) {
      return accessToken;
    } else {

      return null;
    }


  }


}
