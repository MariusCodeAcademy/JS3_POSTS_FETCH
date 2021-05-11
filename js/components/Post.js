class Post {
  // parent tevinis el kuriame talpinsim sugeneruota posta
  // props yra posto savybes
  constructor(parent, props) {
    this.parent = parent;
    this.props = props;

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
  }

  render() {
    this.element.innerHTML = null;
    const { title, body } = this.props;
    this.element.innerHTML = `
        <img src="https://placeimg.com/640/480/any" class="card-img-top" alt="dalykas">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${body}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        `;
  }
}
