import './App.css';

import Header from './Component/Header';
import DataFetchingComponent from './Component/DataFetchingComponent';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <DataFetchingComponent />
      <Header/>
     
      <Outlet/>  
     

    </div>
  );
}

export default App;
