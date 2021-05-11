class API {
  static URL = "https://jsonplaceholder.typicode.com/";

  static fetchPosts(successCallback, failCallback) {
    fetch(API.URL + "posts")
      .then((resp) => resp.json())
      .then((data) => successCallback(data))
      .catch((err) => failCallback(err));
  }
}
