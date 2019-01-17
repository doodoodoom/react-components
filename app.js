// TODO
var GroceryList = (props) => (
  <div>
    GROCERIES
    <ul>
      {props.items.map(item =>
        <GroceryListItem item={item} />
      )}
    </ul>
  </div>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      'font-weight': this.state.done ? 'bold' : 'normal'
    };
    return (
      <li style={style} onMouseOver={this.onListItemClick.bind(this)}>{this.props.item}</li>
    );
  }
};

// {this.onListItemHover.bind(this)}


ReactDOM.render(
  <GroceryList items={['milk', 'eggs', 'bagels', 'cheese', 'ice cream']}/>,
  document.getElementById('app')
);