import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { AppActions } from '../actions';

import Window from '../containers/Window';
import SnowBar from '../components/SnowBar';

function Calendar({ calendarClass, windows, dispatch }) {
  const windowComponents = windows.map(w => <Window key={ w.day } window={ w } />);

  return (
    <div>
      <SnowBar onClick={ () => dispatch(AppActions.toggleSnow()) }/>
      <div className={ calendarClass }>
        { windowComponents }
      </div>
    </div>
  );
}

Calendar.propTypes = {
  windows: PropTypes.array.isRequired,
  calendarClass: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(storeState) {
  let calendarClass = 'calendar';
  if (storeState.snowing.active) {
    calendarClass = calendarClass + ' calendar-snow';
  }
  return {
    calendarClass,
    windows: storeState.windows,
  };
}

export default connect(mapStateToProps)(Calendar);
