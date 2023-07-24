import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./redux/reducers";
import mySaga from "./redux/sagas";

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(mySaga);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
