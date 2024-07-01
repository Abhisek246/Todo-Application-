import Todo from './Components/Todo'
import './App.css'
import { Provider } from 'react-redux';  //provider component to make the redux store available to nested components 
import {store} from './app/store';   

function App() {
  
  return (
    <>
      <Provider store={store}>  
        <Todo/>
      </Provider>
    </>   
  );
};

export default App;
