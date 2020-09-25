import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import { Button, Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import FoodCards from '../../../containers/products/FoodCards';
import products from '../../../data/products';

const Mains = ({ intl, match }) => {
  const mains = products.filter(
    (pro) => pro.category === 'mains' && pro.active === false
  );
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.mains" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <FoodCards products={mains} />
    </>
  );
};
export default injectIntl(Mains);
