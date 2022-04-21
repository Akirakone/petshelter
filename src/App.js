import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Petlist from './components/Petlist';
import AddPet from './views/AddPet'
import Showone from './views/Showone';
import Edit from './views/Edit';

function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <BrowserRouter>
        <Route exact path="/">
          <Petlist/>
        </Route>
        <Route exact path="/api/pet/create">
          <AddPet/>
        </Route>
        <Route exact path="/api/pet/one/:_id">
          <Showone/>
        </Route>
        <Route exact path="/api/pet/edit/:_id">
          <Edit/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
