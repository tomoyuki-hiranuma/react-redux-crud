import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { readEvents } from '../actions';
import { green } from '@material-ui/core/colors';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class EventsIndex extends React.Component {
  componentDidMount() {
    this.props.readEvents();
  }
  renderEvents() {
    return _.map(this.props.events, event => (
      <TableRow key={event.id}>
        <TableCell align="center">
          {event.id}
        </TableCell>
        <TableCell align="center">
          <Link to={`events/${event.id}`}>
            {event.title}
          </Link>
        </TableCell>
        <TableCell align="center">
          {event.body}
        </TableCell>
      </TableRow>
    ))
  }

  render() {
    return (
      <React.Fragment>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">title</TableCell>
                <TableCell align="center">body</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.renderEvents()}
            </TableBody>
          </Table>
        </TableContainer>
        <Link to='/events/new'>
          <AddCircleIcon style={{ color: green[500], fontSize: 40 }} />
        </Link>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ events: state.eventsReducer })
const mapDispatchToProps = ({readEvents})

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
