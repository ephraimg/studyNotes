import React from 'react'; // Need this in each file
import ReactDOM from 'react-dom'; // Need this in index.jsx

// To create a React component you just write a function 
// (with a capitalized name by convention) that returns JSX. 
// The JSX should represent the intended HTML of the rendered component.

// To render a React component you use ReactDOM.render(componentInstance, DOMElement). 
// JSX returns a component instance when you wrap a component in an HTML tag. 
// Thus, to render the component App created above:

ReactDOM.render(<App />, document.getElementById(/* "app", e.g., an id in dist/index.html */));

// Basic React component:
var App = () => (
  <div>Some cliche salutation</div>
);


// Nested components:
var App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList />
  </div>
);


// When creating a component, you can expect an argument to be passed in, 
// typically called props. When creating an instance of this component, 
// you can pass in these props using a syntax similar to passing properties into HTML elements.
// Props are immutable.

// Here we create a `TodoList` component.
var TodoList = (props) => (
  <ul>
    <li>{props.todos[0]}</li>
    <li>{props.todos[1]}</li>
    <li>{props.todos[2]}</li>
  </ul>
);

var App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> 
          {/* Here we are creating an instance of the `TodoList` component */}
  </div>
);


// Handling events in stateless functional components 
// which are great when all you need to do is receive props and render JSX.
var TodoList = (props) => {
    // This function will be called when the first `<li>` below is clicked on
    // Notice that event handling functions receive an `event` object
    // We want to define it where it has access to `props`
  var onListItemClick = (event) => {
    console.log('I got clicked');
  };
    // Because we used curly braces with TodoList's arrow function
    // we have to write an explicit `return` statement
  return (
    <ul>
      <li onClick={onListItemClick}>{props.todos[0]}</li>
      <li>{props.todos[1]}</li>
      <li>{props.todos[2]}</li>
    </ul>
  );
}

var App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> 
          {/* Here we are creating an instance of the `TodoList` component */}
  </div>
);


// To make applications interactive, components need to store data that 
// cannot be explicitly passed in as props and re-render as data changes. 
// React makes this possible with class components.

// A class component can be defined as an ES6 class
// that extends the base Component class included in the React library
class TodoListItem extends React.Component {
    // A `constructor` method is expected on all ES6 classes
    // When React instantiates the component,
    // it will pass `props` to the constructor
  constructor(props) {
    // Equivalent to ES5's React.Component.call(this, props)
    super(props);
  }
    // Every class component must have a `render` method
    // Stateless functional components are pretty much just this method.
  render() {
      // `props` is no longer passed as an argument,
      // but instead accessed with `this.props`
    return (
      <li>{this.props.todo}</li>
    );
  }
}


// Update our `TodoList` to use the new `TodoListItem` component
// This can still be a stateless function component!
var TodoList = (props) => (
  <ul>
    {props.todos.map(todo =>
      <TodoListItem todo={todo} />
    )}
  </ul>
);


// Working with state.
// State is only available on class components. 
// We can initialize a class component's state in its constructor. 
// To update the state, invoke this.setState. 
// Whenever this.setState is called, the component re-renders.
class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
      // `state` is just an object literal
    this.state = {
      done: false
    };
  }
    // When a list item is clicked, we will toggle the `done`
    // boolean, and our component's `render` method will run again
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }
  render() {
      // Making the style conditional on our `state` lets us 
      // update it based on user interactions.
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };
      // You can pass inline styles using React's `style` attribute to any component
      // snake-cased css properties become camelCased this this object
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
    );
  }
}


// If events in one component need to change another component,
// change the state in the smallest parent to both components.
// Do that via a function passed down from the parent.

class ParentComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: false };
    this.changeStatus = this.changeStatus.bind(this);
      // needed to keep this-binding when passed to child
  }
  changeStatus() {
    this.setState({ status: !this.state.status });
  }
  render() {
    return (
      <div>
        <ChildCompOne status={this.state.status} />
        <ChildCompTwo changeStatus={this.changeStatus} />
      </div>
    )
  }
}

const ChildCompOne = props => (
  <p> The current status is: {props.status.toString()} </p>
)

const ChildCompTwo = props => (
  <p onClick={props.changeStatus}> To change status, click me! </p>
)



// At end of component's file, you can export:
export default TodoList; // or function or constant, etc.
// Then import with any name you want:
import newName from 'my-module';
// There can be only one default export per file.
// Otherwise use named exports. 
// If cube and foo are declared variables in file:
export { cube, foo };
// Then
import { cube, foo } from 'my-module'

// To import entire module's contents:
import * as myModule from '/modules/my-module.js';
//Here, accessing the exports means using the module name 
// ("myModule" in this case) as a namespace. 
// For example, if the module imported above includes an 
// exportdoAllTheAmazingThings(), you would call it like this:
myModule.doAllTheAmazingThings();

