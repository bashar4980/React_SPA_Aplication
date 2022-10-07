import React from "react";
import './Question.css'

const Question = () => {
  return (
    <div>
      <div className="question1 shadow-lg p-5 rounded mb-5 ">
        <h1>How React Work?</h1>
        <p>
          React is a JavaScript-based UI development library.When we write a
          code then an HTMl DOM element is created.But when we use React , React
          create a copy of the orginal dom.This is called virtual dom.If we
          change any code in our code the React js compatre the virtual dom or
          dom copy with orginal dom using Diff algorithm .It change only the
          different part of the DOM then View layer change the view
        </p>
      </div>
      <div className="question1 shadow-lg p-5 rounded mb-5">
        <h1>Difference Between Props And State</h1>
        <p>
          Main Difference of state and Props are given below.Props is use for
          pass data or property from one component to another.Props value can
          not change so it is <b>Immutable</b>.The state is a local data storage
          that is local to the component only and cannot be passed to other
          components.State data must be change or update.So State is{" "}
          <b>Mutable</b>
        </p>
      </div>
      <div className="question1 shadow-lg p-5 rounded">
        <h1>Exalain UseEffect importance.</h1>
        <p>
          The useEffect Hook allows to perform side effects in React components.
          Some examples of side effects are: fetching data, directly updating
          the DOM, and timers like setTimeout or setInterval.
        </p>
      </div>
    </div>
  );
};

export default Question;
