import React, { PropTypes } from 'react';
import moment from 'moment';

export default function EndDate({ race }) {
  return (
    <td>
      <div>
        {
          moment(race.startTime).local()
            .add(race.weekLength)
            .subtract(1, 'days')
            .format('YYYY-MM-DD')
        }
      </div>
    </td>
  );
}

EndDate.propTypes = {
  race: PropTypes.object.isRequired
};
