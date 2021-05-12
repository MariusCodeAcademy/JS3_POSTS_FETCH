class Post {
  // parent tevinis el kuriame talpinsim sugeneruota posta
  // props yra posto savybes
  static defaultImgUrl = "img/loader.gif";
  constructor(parent, props) {
    this.parent = parent;
    this.props = props;
    this.state = {
      imgUrl: null,
    };

    // Atvaizdavimo reikalai
    this.element = document.createElement("article");
    // automatiskai vygdomi metodai po new Post()
    this.render();
    this.componentDidMount();
  }
  componentDidMount() {
    // atliekami galutinaii elemto veiksmai
    this.element.className = "card w-100 h-100 mb-4";
    // talpinam el DOM
    this.parent.appendChild(this.element);

    // siunciames paveikslelius
    API.fetchPostImg(
      (url) => {
        this.state.imgUrl = url;
        this.render();
      },
      (err) => console.warn(err),
      this.props.id
    );
  }

  render() {
    this.element.innerHTML = null;
    const { title, body } = this.props;
    // const url = this.state.imgUrl !== null ? this.state.imgUrl : Post.defaultImgUrl;
    // jei yra  reiksme this.state.imgUrl tai naudsim ja, jei nera
    // naudosim Post.defaultImgUrl;
    const url = this.state.imgUrl ?? Post.defaultImgUrl;

    this.element.innerHTML = `
        <img 
          src="${url}" 
          class="card-img-top" 
          alt="${title}"
        >
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${body}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        `;
  }
}
