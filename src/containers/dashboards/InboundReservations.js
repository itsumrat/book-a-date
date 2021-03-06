/* eslint-disable react/no-array-index-key */
import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Card, CardBody, CardTitle } from 'reactstrap';

import IntlMessages from '../../helpers/IntlMessages';
import data from '../../data/products';

const InboundReservations = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>
            <IntlMessages id="dashboards.products-sold" />
          </CardTitle>
          <div className="dashboard-logs">
            <PerfectScrollbar
              options={{ suppressScrollX: true, wheelPropagation: false }}
            >
              <table className="table table-sm table-borderless">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>

                  {data.map((product, index) => {
                    return (
                      <tr key={index}>
                        {/* <td> */}
                        {/*  <span */}
                        {/*    className="log-indicator align-middle" */}
                        {/*    style={{ color: product.statusColor }} */}
                        {/*  /> */}
                        {/* </td> */}
                        <td>
                          <span className="font-weight-medium">
                            Product {product.productLine}
                          </span>
                        </td>
                        <td className="">
                          <span className="text-muted">
                            {Math.floor(Math.random() * (250 - 90) + 90)}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </PerfectScrollbar>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
export default InboundReservations;
