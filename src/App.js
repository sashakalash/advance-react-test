import React from 'react';
import FieldsRow from './components/FieldsRow';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.addRow = this.addRow.bind(this);
    this.removewRow = this.removewRow.bind(this);
    this.getFormValues = this.getFormValues.bind(this);
    this.convertArrayToObject = this.convertArrayToObject.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.formValues = new Map();
    this.state = {
      components: [
        <FieldsRow
          key={new Date().getTime()}
          id={new Date().getTime()}
          onAddRow={this.addRow}
          onRemovewRow={this.removewRow}
          onChangeState={this.handleFieldChange} />
      ]
    }
  }

  handleFieldChange(id, state) {
    this.formValues.set(id, state);
  }

  addRow() {
    this.setState({
      components: this.state.components.concat([
        <FieldsRow
          key={new Date().getTime()}
          id={new Date().getTime()}
          onAddRow={this.addRow}
          onRemovewRow={this.removewRow}
          onChangeState={this.handleFieldChange}
        />
      ])
    })
  }

  removewRow(id) {
    const idx = this.state.components.findIndex(el => el.id === id);
    if (idx !== -1) {
      this.state.components.splice(idx, 1);
    }
    this.setState({
      components: this.state.components
    })
  }

  getFormValues() {
    const result = {
      type: [],
      value: []
    };
    this.formValues.forEach(element => {
      result.type.push(element.type);
      result.value.push(element.value);
    });
    return result;
  }

  convertArrayToObject(source) {
    return source.type.map((t, idx) => ({ type: t, value: source.value[idx] }));
  }

  render() {
    return (
      <div>
        {this.state.components}
      </div>
    );
  }
}

