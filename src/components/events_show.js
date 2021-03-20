import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import { getEvent, deleteEvent, putEvent } from '../actions';

class EventShow extends Component {
  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field;
    return (
      <div>
        <input {...input} placeholder={label} type="text" />
        {touched && error && <span>{error}</span>}
      </div>
    );
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) this.props.getEvent(id);
  }

  async onDeleteClick() {
    const { id } = this.props.match.params;
    await this.props.deleteEvent(id);
  }

  async onSubmit(value) {
    await this.props.putEvent(value)
    this.props.history.push('/')
  };

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div>
          <Field label="Title" name="title" type='text' component={this.renderField} />
        </div>
        <div>
          <Field label="Body" name="body" type='text' component={this.renderField} />
        </div>
        <div>
          <input type="submit" value="Update" disabled={pristine || submitting || invalid} />
          <Link to='/'>Cancel</Link>
          <Link to='/' onClick={this.onDeleteClick.bind(this)}>Delete</Link>
        </div>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}

  if(!values.title) errors.title = "Enter a title, please";
  if(!values.body) errors.body = "Enter a body. please";
  return errors
}
const mapDispatchToProps = ({ deleteEvent, getEvent, putEvent });
const mapStateToProps = (state, ownProps) => {
  const event = state.eventsReducer[ownProps.match.params.id]
  return { initialValues: event, event }
};

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventShowForm', enableReinitilize: true })(EventShow)
)