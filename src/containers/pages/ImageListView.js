import React from 'react';
import {
  Row,
  Card,
  CardBody,
  CardSubtitle,
  CardImg,
  CardText,
  CustomInput,
  Badge,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { ContextMenuTrigger } from 'react-contextmenu';
import { Colxx } from '../../components/common/CustomBootstrap';
import IntlMessages from '../../helpers/IntlMessages';

const ImageListView = ({ product, isSelect, collect, onCheckItem }) => {
  return (
    <Colxx sm="6" lg="4" xl="3" className="mb-3" key={product.id}>
      <ContextMenuTrigger id="menu_id" data={product.id} collect={collect}>
        <Card
          className={classnames({
            active: isSelect,
          })}
        >
          <div className="position-relative">
            <NavLink to={`/app/products/details/${product.id}`} className="w-40 w-sm-100">
              <CardImg
                style={{ height: 220 }}
                top
                alt={product.title}
                src={product.img}
              />
            </NavLink>
            <Badge
              color={product.statusColor}
              pill
              className="position-absolute badge-top-left"
            >
              {product.status}
            </Badge>
            <UncontrolledDropdown
              direction="left"
              style={{ top: 0, right: '-8px' }}
              className="position-absolute badge-top-right"
            >
              <DropdownToggle className="m-0" style={{padding: '5px 10px'}}>:</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Deactivate</DropdownItem>
                <DropdownItem>Edit</DropdownItem>
                <DropdownItem>Delete</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
          <CardBody>
            <Row>
              {/*<Colxx*/}
              {/*  xxs="2"*/}
              {/*  onClick={(event) => onCheckItem(event, product.id)}*/}
              {/*>*/}
              {/*  <CustomInput*/}
              {/*    className="item-check mb-0"*/}
              {/*    type="checkbox"*/}
              {/*    id={`check_${product.id}`}*/}
              {/*    checked={isSelect}*/}
              {/*    onChange={() => {}}*/}
              {/*    label=""*/}
              {/*  />*/}
              {/*</Colxx>*/}
              <Colxx xxs="10" className="mb-3">
                <CardSubtitle>{product.title}</CardSubtitle>
                <CardText className="text-muted text-small mb-0 font-weight-light">
                  {product.date}
                </CardText>
              </Colxx>
            </Row>
            <Row>
              <button type="button" className="btn btn-link">
                Request Submission
              </button>
            </Row>
          </CardBody>
        </Card>
      </ContextMenuTrigger>
    </Colxx>
  );
};

/* React.memo detail : https://reactjs.org/docs/react-api.html#reactpurecomponent  */
export default React.memo(ImageListView);
