# I am completing Frontend Test by Bitroot Org.
<br>
<h1>I am using vit+React Tools. React is free open source javascript library. and Vite is a modern tool to create React project. Vite Produces Quick and Small Bundle Size.. </h1>
<br>
<h1>Vite:- Use npm run dev to launch dev server..</h1>
<br>
<h1>Use npm start for create-react-app</h1>
<br>
<h1>npm means node package manager.</h1>
<br>
<h1>I am using cmd npm create vite@latest</h1>
<br>
<h2>Then create Project name then project inside i am  npm install and cd get project path then npm run dev command.</h2>
<br>
<h1>I am making component folder inside store reused code.</h1>
<br>
<h1>React inside two types components.</h1>
<br>
<h1>1]Class Component.</h1>
<br>
<h1>2] Function component</h1>
<br>
<p><h1>Class Components-</h1> 
  1] Stateful:- Can Manage State.
   2] Lifecycle:- Access to lifecycle methods.
   3] verbose:- More boilerplate code.
   4] Not Preferred anyMore.
</p>
<br>
<p><h1>Functional Components-</h1> 
  1] Initally Stateless.
   2] Can use Hooks for state and effects.
   3] Simpler and More concise.
   4] Not Popular.
  <b>I am using my project inside Functional Componets.</b>
</p>
<h1>Exporting Componets</h1>
<p>
  1] Named exports and default export.
  * Enables the use of a components in other parts.
  * Default Export:- Allows exporting a single components as the default from a module.
  * Named Export :- Allows exporting multiple items from a module.
  * Importing :- To use an exported component , you need to import it in the destination file using import syntax.
</p>

<br>
<h1>Other Important Points</h1>
<p>
 1] Naming :- Must be capitalized lowerCase for default Html.
2] Html :- Unlike vanilla Js where you can not directly write Html , in React , you can embed Html - like syntax using JSX.
3] CSS :- In React , css can be directly imported into component files , allowing for modular and component - specific styling.
4] Bootstrap :- Mobile-first design for all device sizes. and pre-styled elements like buttons and navbar Modify default styles as needed. Consistent look a cross browser open-source free
  with community support
5] install:- npm install bootstrap@latest or npm i bootstrap@latest
6] import:- import "bootstrap/dist/css/bootstrap.min.css"
7] Bootstrap is external library..
</p>
<br>
<h1>I am using Map Method my project inside .</h1>
<p>
  1] Purpose :- Render lists from array data.
  2] JSX Elements :- Transfor array items into JSX.
  3] Inline Rendering :- Directly inside JSX.
  {items.map(item=><li key={item.id}>{item.name}</li}>
  4] key pop :- Assign unique key for optimized re-render.
</p>
<br>
<h1>I am using Props means Passing Data via Property.(props)</h1>
<p>
  1] Props in React :-
  * short for properties.
  *  Mechanism for passing data.
  * Read-only by default.
  2] Usage :-
  * Pass data from parent to child components.
  * Makes components reusable.
  * Defined as attributes in JSX .
  3] Key Points :-
  * Data flows one-way (downwards)
  * Props are immutable.
  * Used for communication between components.
  
</p>
<br>
<h1>I am using Usestate hooks my project inside</h1>
<p>const
  [selectedvalue,setSelectedValue] = useState(intialValue);
  1] selectedValue:- React assign the current value to the first element.
  2] setSelectesValue:- updater Function= React assign the updater function to the second element.
  3]  initial Value :- Pass the initial value to the useState Hook.

  * State represents data that changes overtime .
  *  State is Locale and Private to the components.
  *  State changes cause the components to re-render.
  *  For Functional components , use the useStat hook.\
  *  React Functions that start with word use  are called hooks.
  *  Hooks Should only be used inside components .
  *  Parent componets can pass state down to children via props.
  *  Lifting State Up :- Share state between components vy moving it to their closest common ancestor. 
</p>
<br>
<h1>I am using useEffect() Hooks</h1>
<p>
  1] [] :- Run at initial Render.
  2] ...Nothing.. :- Run at initial render + Run after.
  3] [data] :- Run at initial render.

  * In Function-based components , useEffect handles side effects like data fetching or event listeners.
  * useEffect runs automatically after every render by default.
  * By providing a dependency array , useEffect will only run when specified variables change . An empty array means the effect runs once.
  *  Multiple useeffect hooks can be used in a single components for organizing different side effect separately.
</p>
<br>
<h1>I am using fetch() api .</h1>
<p>
  1] fetch :- Modern JavaScript  API for network request.
  2] Promise-based :- Returns a Promise with a response object.
  3] usage :- Default is Get. For Post use method Post
  4] Response :- Use .then() and response.json() for json data.
  5] Error :- Does not reject on HTTP error check response.ok
  6] Header :- Managed using the Headers API.
  7] promise is fullfilled and reject two types
  </p>
  <br>
  <h1>I am using backend Express node because take items data backend and fetch() inside url pass</h1>
