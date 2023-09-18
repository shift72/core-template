import { AppComponent, bindAllComponents, render, h, attrs, getComponentElement } from 's72.ui';

export class CollectionSortControls extends AppComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      direction: 'asc',
      search: '',
    };

    this.collectionItems = [];
    /** @type {Element} */
    this.collectionContentsEl = undefined;
  }

  componentDidMount() {
    this.adoptChildren();
  }

  render() {
    const currentDirection = this.state.direction;

    return (
      <div>
        <button
          onClick={() => {
            const newDirection = currentDirection === 'asc' ? 'desc' : 'asc';
            this.setState({ direction: newDirection });
            this.sort(newDirection);
          }}
        >
          Sort {this.state.direction === 'asc' ? 'Z-A' : 'A-Z'}
        </button>
        <input onInput={e => this.doSearch(e.currentTarget.value)} value={this.state.search} placeholder="Filter" />
      </div>
    );
  }

  sort(direction) {
    const sorted = [...this.collectionItems].sort((a, b) => {
      return direction === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
    });

    this.updateVisible(sorted);
  }

  doSearch(search) {
    this.setState({search});

    if (!search) {
      this.updateVisible(this.collectionItems);
    } else {
      this.updateVisible(this.collectionItems.filter(item => item.title.toLowerCase().includes(search.toLowerCase())));
    }
  }

  updateVisible(items) {
    this.collectionItems.forEach(item => item.element.remove());
    items.forEach(item => this.collectionContentsEl.appendChild(item.element));

    // HACK: forces the images to reconsider whether they're in view. Transition
    // cancel seemed like the most benign event to fake
    window.dispatchEvent(new TransitionEvent('transitioncancel'));
  }

  adoptChildren() {
    /** @type {Element} */
    const el = getComponentElement(this);
    this.collectionContentsEl = el.parentElement.querySelector('.page-collection-items');
    this.collectionItems = [];
    this.collectionContentsEl.querySelectorAll('.page-collection-item').forEach(element => {
      const title = element.querySelector('.caption .title');
      console.log(title.textContent);
      this.collectionItems.push({
        element,
        title: title.textContent,
      });
    });
  }
}

bindAllComponents('collection-sort-controls', elements => {
  return elements.map(e => render(h(CollectionSortControls, attrs(e)), e));
});
