//This is the most basic way to create an element with react apis.

/**
 *
 * <div id="parent">
 *      <div id="child">
 *         <h1>I'm h1 tag</h1>
 *         <h2>I'm h1 tag</h2>
 *      </div>
 * <div id="child2">
 *         <h1>I'm h1 tag</h1>
 *         <h2>I'm h1 tag</h2>
 *      </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 */

/* 

React element will have 
1 - a tag
2 - object which contain attributes
3 - string to render
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", {}, "h1 tag"),
  React.createElement("h2", {}, "h2 tag"),
]);

// createroot is an API which was given by ReactDOM.
const root = ReactDOM.createRoot(document.getElementById("root"));

//this is how we render an element
root.render(parent);
