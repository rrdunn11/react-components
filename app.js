class GroceryListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {found: false
        };
    }

    onListItemHover() {
        this.setState({
            found: !this.state.found
        });
    }

    render() {
        var style = {
            fontWeight: this.state.found ? 'bold' : 'normal'
        };

        return (
            <li style={style} 
            onMouseEnter={this.onListItemHover.bind(this)}
            onMouseLeave={this.onListItemHover.bind(this)}
            >{this.props.specificItem}</li>
        );
    }
}

var GroceryList = (props) => (
    <ul>
        {props.groceryItems.map(groceryItem =>
            <GroceryListItem specificItem={groceryItem}/>
        )}
    </ul>
);

var list = {groceryItems:['strawberry', 'apple']}
ReactDOM.render(<GroceryList groceryItems = {list.groceryItems}/> ,document.getElementById('app'));
