import Reactotron from 'reactotron-react-js';
import 'reactotron-redux';
import 'reactotron-redux-saga';

export {};

declare global {
  export interface Console {
    tron: typeof Reactotron;
  }
}
