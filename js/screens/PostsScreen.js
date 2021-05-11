class PostsScreen {
  constructor(parent, props) {
    this.parent = parent;
    this.props = props;
    this.state = {
      // cia bus visi postai
      posts: [],
    };
    // Atvaizdavimo reikalai
    this.element = document.createElement("div");
    this.render();
    this.componentDidMount();
  }
  componentDidMount() {
    this.element.className = "container py-4";
    this.parent.appendChild(this.element);
  }

  render() {
    this.element.innerHTML = null;
    this.element.innerHTML = '<h1 class="mb-4">Posts</h1>';
    // patikrinam ar turim postu
    // debugger;
    if (this.state.posts.length === 0) {
      // neturim postu
      const headerNoPosts = document.createElement("h2");
      headerNoPosts.className = "text-danger text-center";
      headerNoPosts.textContent = "There are no posts at the moment";
      this.element.appendChild(headerNoPosts);
    }
  }
}
