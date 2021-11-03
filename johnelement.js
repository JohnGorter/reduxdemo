const template = String`
    <div>hello world</div>
`

class JohnElement extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = template
    }
}
customElements.define("john-element", JohnElement); 