import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './RooxTest.scss';
import LeftSidebar from './components/organisms/LeftSidebar';
import UsersListPage from 'components/pages/UsersListPage';
import UserFormPage from 'components/pages/UserFormPage';

function RooxTest() {
  

  return (
    <Router>
      <div className="roox-test">
        <LeftSidebar />
        <Switch>
          <Route path='/user/:id' component={UserFormPage} />
          <Route path='/user' component={UsersListPage} />
          <Route exact path='*' component={() => <Redirect to='/user'/>} />
        </Switch> 
      </div>
    </Router>
  );
}

export default RooxTest;
