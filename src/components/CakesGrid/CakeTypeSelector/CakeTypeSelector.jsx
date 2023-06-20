import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

export const CakeTypeSelector = ({types, changeType}) => {
  return (
    <ButtonToolbar aria-label="Toolbar with button groups">
      <ButtonGroup className="me-2" aria-label="First group">
        {types.map((type) => <Button
          className='Button'
          onClick={() => {changeType(type)}}
        >{type.name}</Button>)}
      </ButtonGroup>
    </ButtonToolbar>
  );
}
