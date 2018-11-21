import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  counter: state
});

const mapDispatchToProps = dispatch => ({
  onAddOne: () => dispatch({ type: "ADD-ONE" }),
  onRemoveOne : () => dispatch({ type: "REMOVE-ONE"}),
  onAddTen : () => dispatch({ type: "ADD-TEN"}),
  onRemoveTen : () => dispatch({ type: "REMOVE-TEN"}),
  onReset : () => dispatch({ type: "RESET"}),
  onSurprise : () => dispatch({ type : "JACK"})
});

const CounterComponent = ({ counter, onAddOne, onRemoveOne, onAddTen, onRemoveTen, onReset, onSurprise }) => (
  <div>
    <p>{counter}</p>
    <button onClick={onAddOne}>Add one</button>
    <button onClick={onRemoveOne}>Remove one</button>
    <button onClick={onAddTen}>Add Ten</button>
    <button onClick={onRemoveTen}>Remove Ten</button>
    <button onClick={onReset}>Reset</button>
    <button onClick={onSurprise}>You know what ?</button>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);