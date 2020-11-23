import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const ReservationDefault = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-default" */ './ReservationDefault')
);
// const ReservationDetails = React.lazy(() =>
//   import(/* webpackChunkName: "dashboard-content" */ './ReservationDetailsPage')
// );
const ReservationDataList = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-analytics" */ './ReservationDataList')
);
const ReservationReSchedulePage = React.lazy(() =>
  import('./ReservationReSchedule')
);
// const ReservationDetailsAlt = React.lazy(() =>
//   import(
//     /* webpackChunkName: "dashboard-ecommerce" */ './Reservation-details-alt'
//   )
// );

const Reservations = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/confirmed`} />
      <Route
        path={`${match.url}/confirmed`}
        render={(props) => <ReservationDefault {...props} />}
      />
      {/* <Route */}
      {/*  path={`${match.url}/details`} */}
      {/*  render={(props) => <ReservationDetails {...props} />} */}
      {/* /> */}
      {/* <Route */}
      {/*  path={`${match.url}/details-alt`} */}
      {/*  render={(props) => <ReservationDetailsAlt {...props} />} */}
      {/* /> */}
      <Route
        path={`${match.url}/data-list`}
        render={(props) => <ReservationDataList {...props} />}
      />
      <Route
        path={`${match.url}/re-schedule`}
        render={(props) => <ReservationReSchedulePage {...props} />}
      />

      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Reservations;
