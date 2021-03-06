class API {
  static URL = "https://jsonplaceholder.typicode.com/";
  static imgUrl = "https://picsum.photos/";

  static fetchPosts(successCallback, failCallback) {
    fetch(API.URL + "posts")
      .then((resp) => resp.json())
      .then((data) => successCallback(data))
      .catch((err) => failCallback(err));
  }
  // https://jsonplaceholder.typicode.com/posts/1/comments
  static fetchCommentsOfPost(successCallback, failCallback, postId) {
    fetch(`${API.URL}posts/${postId}/comments`)
      .then((resp) => resp.json())
      .then((data) => successCallback(data))
      .catch((err) => failCallback(err));
  }

  // https://picsum.photos/seed/{id}/300/250
  static fetchPostImg(successCallback, failCallback, imgId) {
    fetch(`${API.imgUrl}seed/${imgId}/300/250`)
      // gaunam paveiksleli failo formatu
      .then((resp) => resp.blob())
      .then((blob) => {
        // kadangi gavom pati faila, tai mums reikia
        // issitraukti nuoroda i ta faila
        const imgUrlInBrowserMemory = URL.createObjectURL(blob);
        // console.log(imgUrlInBrowserMemory);
        successCallback(imgUrlInBrowserMemory);
      })
      .catch((errMsg) => failCallback(errMsg));
  }
}
