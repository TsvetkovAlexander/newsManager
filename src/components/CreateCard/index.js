import React from 'react';
import { Form, Field } from 'react-final-form';

import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import './style.css';

const CreateCard = ({ onSubmit, handleClose }) => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <DialogContent className="input-group-modal">
          <div>
            <label>title:</label>
            <Field required name="title" component="input" type="text" className="title" />
          </div>
          <div>
            <label>review:</label>
            <Field required name="review" component="input" type="text" className="review" />
          </div>
          <div>
            <label>text:</label>
            <Field required name="text" component="input" type="textarea" className="text" />
          </div>
        </DialogContent>
        <DialogActions className="AddClose">
          <Button type="submit" color="primary">
                add news
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
               close
          </Button>
        </DialogActions>
      </form>
    )}
  />
);

export default CreateCard;
