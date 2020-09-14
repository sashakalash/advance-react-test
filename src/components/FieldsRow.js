import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';

const mainStyle = {
  wrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '20px'

  },
  control: {
    width: '40%',
    padding: '10px'
  },
  btnsWrapper: {
    width: '20%',
    padding: '10px',
  },
  btn: {
    width: '30%'
  }

};

class FieldsRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      value: '',
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      if (this.props.onChangeState) {
        this.props.onChangeState(this.props.id, this.state);
      }
    });
  }

  onAddRow = () => {
    this.props.onAddRow();
  }

  onRemoveRow = () => {
    this.props.onRemovewRow(this.props.id);
  }

  render() {
    return (
      <div style={mainStyle.wrapper}>
        <FormControl style={mainStyle.control}>
          <Select
            name="type"
            onChange={this.onChange}
            value={this.state.type}
          >
            <MenuItem value={'email'}>Email</MenuItem>
            <MenuItem value={'phone'}>Phone</MenuItem>
            <MenuItem value={'link'}>Link</MenuItem>
          </Select>
        </FormControl>
        <FormControl style={mainStyle.control}>
          <Input
            type="text"
            name="value"
            value={this.state.value}
            onChange={this.onChange}
          />
        </FormControl>
        <ButtonGroup color="primary" style={mainStyle.btnsWrapper}>
          {this.state.type === 'email' &&
            <Button onClick={this.onAddRow} style={mainStyle.btn}>+</Button>
          }
          <Button onClick={this.onRemoveRow} style={mainStyle.btn}>-</Button>
        </ButtonGroup>
      </div>
    );
  }
}
export default FieldsRow;
