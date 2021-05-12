class API {
  static URL = "https://jsonplaceholder.typicode.com/";
  static imgUrl = "https://picsum.photos/";

  static fetchPosts(successCallback, failCallback) {
    fetch(API.URL + "posts")
      .then((resp) => resp.json())
      .then((data) => successCallback(data))
      .catch((err) => failCallback(err));
  }
  // https://picsum.photos/seed/{id}/300/250
  // https://picsum.photos/seed/5/300/250 // jei id 5
  static fetchPostImg(successCallback, failCallback, imgId) {
    let str = `${API.imgUrl}seed/${imgId}/300/250`;
    console.log(str);

    fetch(str)
      // gaunam paveiksleli failo formatu
      .then((resp) => resp.blob())
      .then((blob) => {
        // kadangi gavom pati faila, tai mums reikia
        // issitraukti nuoroda i ta faila
        const imgUrlInBrowserMemory = URL.createObjectURL(blob);
        console.log(imgUrlInBrowserMemory);
      })
      .catch((errMsg) => console.warn(errMsg));
  }
}
