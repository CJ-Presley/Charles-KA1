import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
function ToDoList() {
  return (
    <>
      <h1>Shopping List</h1>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Milk" />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Cheese"
        />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Bread" />
      </FormGroup>
      <h1>Chore List</h1>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Vaccuum"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Wash Dishes"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Laundry"
        />
      </FormGroup>
    </>
  );
}
export default ToDoList;
