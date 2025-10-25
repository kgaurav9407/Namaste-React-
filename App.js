{
  /* <div id="parent">
    <div id="child">
        <h1>I am an h1 tag</h1>
    </div>
</div> */
}

// Convert it into React snippet

// const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, React.createElement("h1", {}, "I am an h1 tag")));

// const heading = React.createElement("h1", {
//     "id": "heading", "xyz": "red", // whatever we mention here it will be added as attribute to h1 tag element
// }, "Hello World from React!");

// console.log(parent);
// console.log(heading);   // THis will print react object not any DOM Node or element like h1, and this object will have props having children and attributes

{
  /* <div id="parent">
    <div id="child1">
        <h1>I am an h1 tag in child1</h1>
        <h2>I am an h2 tag in child1</h2>
    </div>
    <div id="child2">
        <h1>I am an h1 tag in child2</h1>
        <h2>I am an h2 tag in child2</h2>
    </div>
</div> */
}

//convert it in to React script

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am an h1 tag in child1"),
    React.createElement("h2", {}, "I am an h2 tag in child1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 tag in child2"),
    React.createElement("h2", {}, "I am an h2 tag in child2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// const heading = document.createElement('h1');
// heading.innerHTML = 'Hello world from Javascript!';
// const root = document.getElementById('root');
// root.appendChild(heading);
