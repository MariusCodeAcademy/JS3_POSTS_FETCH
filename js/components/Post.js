class Post{
    // parent tevinis el kuriame talpinsim sugeneruota posta
    // props yra posto savybes 
    constructor(parent, props) {
        this.parent = parent;
        this.props = props;

        // Atvaizdavimo reikalai 
        this.element = document.createElement('article');
    }
    componentDidMount() {}

    render()
}