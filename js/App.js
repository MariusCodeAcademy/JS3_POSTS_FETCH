class App {
  constructor(selector, props) {
    this.props = props;

    // Atvaizdavimo reikalai
    this.element = document.querySelector(selector);
    this.render();
    this.componentDidMount();
  }
  // cia talipinsim veiksmus reikalingu atlikti
  //iskarto sugeneravus elemeta
  componentDidMount() {}

  render() {
    this.element.innerHTML = null;
    // sugeneruoti postu vaizda
    new PostsScreen(this.element);
  }
}
