import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./reducers";

// import { Container } from './styles';

const store = createStore(reducers);

export default store;
