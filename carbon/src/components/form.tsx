import {
  Button,
  DatePicker,
  DatePickerInput,
  Form,
  Select,
  SelectItem,
  TextArea,
  TextInput
} from 'carbon-components-react';
import React from 'react';

export const CustomForm = () => {
  return (

    <Form style={{width: '560px'}} onSubmit={(e) => {
      e.preventDefault();
      console.log("or", e)
    }}>
      <div style={{marginBottom: '2rem'}}>
        <TextInput
          helperText="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"
          id="test2"
          invalidText="Invalid error message."
          labelText="Text input label"
          placeholder="Placeholder text"
        />
      </div>
      <div style={{marginBottom: '2rem'}}>
        <TextArea
          cols={50}
          helperText="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"
          id="test5"
          invalidText="Invalid error message."
          labelText="Text area label"
          placeholder="Placeholder text"
          rows={4}
        />
      </div>
      <div style={{marginBottom: '2rem'}}>
        <Select
          defaultValue="placeholder-item"
          id="select-1"
          invalidText="This is an invalid error message."
          labelText="Select"
        >
          <SelectItem
            text="Option 1"
            value="option-1"
          />
          <SelectItem
            text="Option 2"
            value="option-2"
          />
          <SelectItem
            text="Option 3"
            value="option-3"
          />
        </Select>
      </div>
      <div style={{marginBottom: '2rem'}}>
        <DatePicker dateFormat="d/m/Y" datePickerType="single" className="datepicker">
          <DatePickerInput
            id="date-picker-calendar-id"
            placeholder="dd/mm/yyyy"
            labelText="Date picker label"
            type="text"
          />
        </DatePicker>
      </div>
      <Button
        kind="primary"
        tabIndex={0}
        type="submit"
      >
        Submit
      </Button>
    </Form>

  )
}