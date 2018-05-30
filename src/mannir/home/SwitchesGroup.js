import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class SwitchesGroup extends React.Component {
  state = {
    room1: true,
    room2: false,
    room3: false,
    room4: false,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
    console.log(name + '::' + event.target.checked);
  };

  render() {
    return (
      <div>
      <Paper style={{margin: 10, padding: 10}} elevation={4} >
        <FormControl component="fieldset">
          <FormLabel component="legend">Mannir Realtime Home Automation</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.room1}
                  onChange={this.handleChange('room1')}
                  value="room1"
                />
              }
              label="Mannir Light"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.room2}
                  onChange={this.handleChange('room2')}
                  value="room2"
                />
              }
              label="Mannir Fan"
            />

            <FormControlLabel
              control={
                <Switch
                  checked={this.state.room3}
                  onChange={this.handleChange('room3')}
                  value="room3"
                />
              }
              label="Bedroom Fan"
            />


            <FormControlLabel
              control={
                <Switch
                  checked={this.state.room4}
                  onChange={this.handleChange('room4')}
                  value="room4"
                />
              }
              label="Najaatu Falor Fan"
            />


          </FormGroup>
        </FormControl>
      </Paper>
      </div>
    );
  }
}

export default SwitchesGroup;
