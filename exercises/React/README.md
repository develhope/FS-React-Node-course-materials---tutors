# ReactJS Course - Exercises


## Components

-   2.1 Create a new React application with `vite` and remove all the files within the `src` folder. 
    Inside src folder create a `Hello` function component that renders the `"Hello, World!"` message within an `h2` tag. 
    Write a function component called `App` that renders the `Hello` component within a `div` tag.
    Create a new `index.jsx` file within the `src` folder and render the `App` component using the `createRoot` function and the `render` method on the created root's object.
    Start the application with the `npm run dev` command and open the application in your browser (the default location is `http://localhost:5173`). 
    Create a new `Message` component that renders a `p` tag with the message `"What a beautiful day!"`. 
    Render the new component within the `Hello` component.    
    Can you use the `Hello` component more than once in the `App` component? What happens if you do?
    Can you render the `Message` component directly within the `App` component? What happens if you do?
    Write your answers in a comment
    Change Vite's default port to `3000` by modifying the `vite.config.js` file.

---

## Props

-   3.1 In a React application, create a `Welcome` function component that receives a `name` prop and renders the `Welcome, {name}!` message within a `p` tag. 
    Render this component to you `App` component, passing it a `name` prop of your choosing.
    Set a default value for the `name` prop.
    Add a second prop called `age` and renders it below the 'welcome' message, 
    within a `p` tag after the message `"Your age is "`. Modify the value passed to the `name` prop so that it's contained within a `strong` tag.
    Extract the `"Your age is "` message into a new component called `Age` and render it within the `Welcome` component. 
    Pass to the `Age` component the `age` prop that `Welcome` is receiving from the `App` component.

---

## Conditional Rendering

-   4.1 In a React application, create a `Welcome` function component that receives a `name` prop and an `age` prop. 
    Create an `Age` component that receives a an `age` prop.
    The `Welcome` component will renders a `Welcome, {name}!` message within a `p` tag and 5 `Age` components.
    For every time use conditional rendering with one of the following conditions:
    - The `Age` component is rendered only if the `age` prop is greater than `18`.
    - The `Age` component is rendered only if the `age` prop is present.
    - The `Age` component is rendered only if the `age` prop is greater than `18` and less than `65`.
    - The `Age` component is rendered only if the `age` prop is greater than `18` and the `name` prop is equal to "John". 
    Create a new `Message` component that receive an `age` prop and render the same message if the prop is greater than `18`, otherwise render the `"You are very young!"` message. 
    Render the `Message` component inside the `Welcome` component. 

---

### Events

-   5.1 Create an `AlertClock` function component that renders a button. When the button is clicked, an alert should be shown with the current time. Render the `AlertClock` component within the `App` component. Make it so that the event handler is received as a prop by the `AlertClock` component, instead of being implemented within the component itself. Tip: use the `Date` object to get the current time.

---

## State

-   6.1 Create a `Counter` function component and create a new state variable called `counter` initialized to `0`. 
    The `counter` value should be incremented every time the user clicks on a button. Tip: use the `useState` hook. Make it so that the initial value of the `counter` and the `increment` amount are passed as props to the component.
    Add a decrement button and a reset button to the `Counter` component. 
    The decrement button should decrement the counter by the amount passed as a prop, and the reset button should reset the counter to the initial value passed as a prop.
    Create a new component called `CounterDisplay` passing it the `counter` state variable as a `count` prop, that should be rendered within an `h2` tag.
    The `CounterDisplay` component should be rendered within the `Counter` component,
    When calling "setter" function to increment the counter, should the parameter be a function or an immediate value? Why?
    Write your answers in a comment.
---

## useEffect

-   7.1 Create a `Counter` function component and create a new state variable called `counter` initialized to `0`. 
    The `Counter` component should render the `counter` value within an `h2` tag, and the `counter` value should be incremented every time the user clicks on a button. 
    Make it so that the initial value of the `counter` and the increment amount are passed as props to the component. 
    Add a side effect to the `Counter` component from first State exercise that prints the current value of the counter inside the console.
-   7.2 Build a `Clock` component that renders the current time within an `h2` tag. Use the `useEffect` hook to update the time every second.

---

## Handling Events

-   8.1 Create a `MouseClicker` component that contains a button with a `name` attribute set to the "one" string. 
    Attach an event handler to the button that prints the `name` attribute to the console when clicked by reading the `event.target.name` property. 
    Add another button with the `name` attribute set to "two" and an image inside the button and add another event handler to it that prints the `src` of the image to the console when clicked. 
    How can you prevent the `name` attribute of the button from being printed to the console when the image is clicked?

---

## Controlled Forms

-   9.1 Create an `InteractiveWelcome` component that renders an `input` tag and a `Welcome` component that receives a `name` prop and renders the `Welcome, {name}!` message within a `p` tag.
    Pass the current content of the `input` tag to the `name` prop of the `Welcome` component. 
    The `input` tag should be a controlled component.
-   9.2 Create a `Login` component containing three inputs: a `username` input, a `password` input and a `remember` checkbox. All three inputs should be controlled components.
    Add a "login" `button` to the `Login` component. This button should be disabled as long as the `username` and `password` inputs are empty. When clicked, the event handler attached to the button should call an `onLogin` function passed as a prop to the `Login` component, passing it the state, that will print the state value.
    Add a "reset" `button` to the `Login` component that clears the content of all three inputs when clicked.
    Use the `form` element to handle the form's submission, and attach the `handleLogin ` event handler to the `onSubmit` event of the `form` element. 
    How do you prevent the default behavior of the `form` element?

---

## Uncontrolled Forms

-   10.1 Create an uncontrolled component called `UncontrolledLogin`, containing three inputs: a `username` input, a `password` input and a `remember` checkbox.
    Add a "login" `button` to the `Login` component. 
    When clicked, the event handler attached to the button should call an `onLogin` function that will print the values of the inputs.
    Attempt to access the values of the form using the DOM API by reading the `event.target` of the `onSubmit` event handler.
    Add a second button that call a `loginWithFormData` function that prints the values of the inputs by using the `FormData` API. 
    What are the advantages? What are the disadvantages?

---

## Refs

-   11.1 Create a `FocusableInput` component that renders an `input` tag. As soon as the component renders, the `input` tag should be focused automatically.
-   11.2 Using `StrictMode`, create a component with an effect that prints a message only when the component is mounted the first time. Use a `ref` to keep track of whether the component is mounted or not.

---

## Lists

-   12.1 Create a component called `Color` that receives an object called `color` as a prop, which will have 2 properties, `id` and `name`, and returns an `li` tag that displays the `name` property. 
    Create a second component called `Colors`, which takes an array of objects as a prop, where the properties are always `name` and `id`, and displays an unordered list of `Color` components.

---

## Lists and State

-   13.1 Create a `TodoList` component that renders a `ul` tag with a `li` tag for each item contained in the `todos` _state variable_. 
    The `todos` state variable should be an array of strings. 
    The `TodoList` component should also contain an `input` tag and a `button`. 
    When the `button` is clicked, the event handler should add the value of the `input` tag to the `todos` array.
    Clear the `input` every time a Todo is added to the `todos` array.
    Add a "reset" `button` that clears the `todos` array when clicked.
    Add a "remove" `button` to each `li` tag. When clicked, the event handler should remove corresponding item from the `todos` array.

---

## Styling Components

-   14.1 Create an `index.css` file and import it within the `index.jsx` file. 
    Add a `.welcome` class to the `Welcome` component that sets its background color and adds a border. 
    Modify the `CounterDisplay` component adding an inline `style` attribute, editing font size and font color. 
    Modify the `Login` component so that the "login" `button` background color is "red" when the inputted password's length is shorter than 8 characters, green otherwise.
-   14.4 Install the `sass` package and use SCSS to style your `Clock` component.
-   14.5 Style the `TodoList` component using CSS Modules, either with CSS or SCSS.
-   14.6 Install the `tailwindcss` package and use it to style the `UncontrolledLogin` component.
-   14.7 Install the `react-bootstrap` package and use it to style the `FocusableInput` component.

---

## Component Composition

-   15.1 Create a `Container` component that renders its children within a `div` tag. 
    Have the `div` tag use a white background and a red border. 
    Add a `title prop` that will contain the title value to be displayed before the children.
    Make the container collapsible, so that when the title is clicked the children are either hidden of shown again.
    Use the `useState` hook to keep track of the collapsed state.

---

## Context

-   16.1 Create a `Hello` function component that renders the `"Hello, World!"` message within an `h2` tag.
    Create a `LanguageContext` and wrap the `Hello` component within its provider.
    Add a `select` tag to the component in which the `Hello` component is rendered that allows the user to select the language, and pass it as a value to the Provider.
    Consume the `LanguageContext` within the `Hello` component by using the `useContext` hook, and show the `"Hello, World!"` message in the correct language.
    

---

## Data Fetching with `fetch` and `useEffect`

-   17.1 Create a `GithubUser` component that receives a `username` prop and fetches the data of the corresponding Github user from the Github API. 
    The component should render the user's name, login and avatar.
    Create a new `GithubUsers` component that has a form with a text input and a submit button. 
    The input will be used for searching a user by providing their username.
    Each user will be displayed in a list, where each list item is a `GithubUser` component.
    These components will take username as a prop.

---

## Custom Hooks

-   18.1 Create a custom hook `useCounter` that keeps track of the state of a counter, and returns the current value of the counter as well as three functions to increment, decrement and reset the counter.
-   18.2 Create a custom hook that keeps track of the state of a controlled form with the `username` and `password` inputs, and returns the current value of the inputs as well as an event handler to update either input.
-   18.3 Create a custom hook called `useGithubUser` that receive a username, fetches the data of the corresponding Github user from the Github API and returns user, error, loading and the function to fetch the data
-   18.4 Write the `useCurrentLocation` custom hook, that uses the browser's `navigator.geolocation` API to get the current location of the user through the `getCurrentPosition` builtin method. The hook should return the current location as well as a function to get the current location, and the error and loading states. The details on how to use this API can be found here: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API

---

## `useCallback` and `useMemo`

-   19.1 Create a custom hook `useCounter` that keeps track of the state of a counter, and returns the current value of the counter as well as three functions to increment, decrement and reset the counter. Use the `useCallback` to memoize the functions used to increment, decrement and reset the counter.
-   19.2 Create a `FilteredList` component that receives a list of objects each containing a `name`, an `id` and a `age` prop. The `FilteredList` component should render only the items of the list whose `age` is greater than 18, and the filtering should only happen when the list changes. Use `useMemo` to memoize the filtered list.

---

## React Router

-   20.1 Create a new branch starting from the first props exercise. 
    Modify `App` component that wraps a `Routes` component and add a single `Route` to the `/` path that renders the `Welcome` component, passing it a `name` prop. 
    Render the `App` component within a `BrowserRouter` component. 
    Add a new Route to the `/counter` path that renders the `Counter` component from the first state exercise.
-   20.2 Add a new Route to the `users/:username` path that renders a `ShowGithubUser` component that receives the `username` as a path parameter and renders a `GithubUser` component by passing it the received username.
-   20.3 Add three Links within the main `App` component and use them to navigate to all three routes.
    Add a Not Found route that renders when a user navigates to a path that does not exist.
-   20.4 Create a `GithubUserList` component that fetching this API url, `https://api.github.com/users`, show a list of links of github usernames. By clicking on a username, the ShowGithubUser component will be displayed. Add a Route to the `users` path that shows the `GithubUserList` component. If there is a `/users/:username` route, remove it from the `App` component, and add a new _nested_ route within the `/users` route. 
    Add an index route to the `GithubUsers` route that shows the "Add a user and select it" message.

---

## SWR

-   21.1 Modify the `useGithubUser` custom hook from the third Custom Hooks exercise to use the `useSWR` hook to fetch the data of a Github user.
-   21.2 Modify the `useGithubUser` hook so that, if the username is null, no request is made.
-   21.3 Modify the `useGithubUser` hook so that it returns a function to manually refetch the data when invoked.
-   21.4 Use `SWRConfig` to set a default value for the `fetcher` prop of the `useSWR` hook.

---

## Redux

-   22.1 Create a `CounterReducer`, along with its action types and action creators, to keep track of a counter that can be incremented, decremented and reset.
-   22.2 Create a store that uses `CounterReducer` as its root reducer, and dispatch an `INCREMENT` action on the store. Verify that the state updates as expected.
-   22.3 Create a `TodosReducer` that handles a list of todos (objects with an `id`, a `title` and a `completed` property), allowing for adding, removing and editing actions.
-   22.4 Modify the store so that it uses a root reducer that combines both the counter and todos reducers. Dispatch actions for both the counter and the todos.
-   22.5 Subscribe to the store and verify that each state update trigger the subscription callback.
-   22.6 Use Redux Toolkit to rewrite the Counter state and replace it within the store.
-   22.7 Use Redux Toolkit to rewrite the Todos state and replace it within the store.
-   22.8 Create a `LoggingMiddleware` that logs the actions dispatched to the store.
-   22.9 Create a `DelayMiddleware` that delays the actions dispatched to the store.
-   22.10 Create, using Redux Toolkit, a `UsersState` that handles a list of users (objects with an `id`, a `name` and a `login` property), allowing for adding and removing actions. Add its reducer to your store.
-   22.11 Create a `fetchUser` thunk that fetches a user from the GitHub API and adds it to the store by dispatching an action to the `UsersReducer` reducer.
-   22.12 Create a `ReduxCounter` component that uses the `useSelector` hook to get the current value of the counter, and the `useDispatch` hook to dispatch actions to the store.
-   22.13 Create a `ReduxGithubUsers` that allows to input the name of a user and fetch it from the GitHub API using the `fetchUser` thunk, showing all fetched users in a list.
-   22.14 Add a `loading` and a `errors` state to the store and use them to keep track of the loading status and errors within the `fetchUser` thunk.

---

esercizi facoltativi: 
- 14.4, 14.5, 14.6, 14.7, 
- 19.1, 19.2 facoltativi se non ci sono i video su useCallback e useMemo
- tutti gli esercizi sui test
