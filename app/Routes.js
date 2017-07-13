import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import Root from './components/Root';


/* -----------------    COMPONENT     ------------------ */

class Routes extends Component {

  componentDidMount () {
    this.props.fetchInitialData();
  }

  render () {
    return (
      <Router>
        <Root>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/students" component={StudentList} />
            <Route path="/students/:id" component={StudentDetail} />
            <Route path="/students/add" component={StudentAddForm} />
            <Route exact path="/campuses" component={CampusList} />
            <Route path="/campuses/:id" component={CampusDetail} />
            <Route path="/campuses/add" component={CampusAddForm} />
            <Route component={Home} />
          </Switch>
        </Root>
      </Router>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = null;

const mapDispatch = dispatch => ({
  fetchInitialData: () => {
    dispatch(fetchStudents());
    dispatch(fetchCampuses());
  }
});

export default connect(mapProps, mapDispatch)(Routes);