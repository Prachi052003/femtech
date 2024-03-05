import * as React from 'react';
import Button from '@mui/material/Button';
import './interest.css'; // Make sure to import the CSS file you created

export default function Component() {
  return (
    <div className="containerInt">
      <h2 className="headingInt">Are you not interested in any particular industries?</h2>
      <div className="grid">
        {/* Note: For Material-UI Buttons, the correct prop for an outlined button is variant="outlined" */}
        <Button variant="outlined" className="button">Agriculture</Button>
        <Button variant="outlined" className="button">Automotive</Button>
        <Button variant="outlined" className="button">Banking</Button>
        <Button variant="outlined" className="button">Biotechnology</Button>
        <Button variant="outlined" className="button">Construction</Button>
        <Button variant="outlined" className="button">Consumer Goods</Button>
        <Button variant="outlined" className="button">Education</Button>
        <Button variant="outlined" className="button">Energy</Button>
        <Button variant="outlined" className="button">Entertainment</Button>
        <Button variant="outlined" className="button">Fashion</Button>
        <Button variant="outlined" className="button">Financial Services</Button>
        <Button variant="outlined" className="button">Food & Beverage</Button>
        <Button variant="outlined" className="button">Healthcare</Button>
        <Button variant="outlined" className="button">Hospitality</Button>
        <Button variant="outlined" className="button">Information Technology</Button>
        <Button variant="outlined" className="button">Insurance</Button>
        <Button variant="outlined" className="button">Manufacturing</Button>
        <Button variant="outlined" className="button">Media</Button>
        <Button variant="outlined" className="button">Mining</Button>
        <Button variant="outlined" className="button">Pharmaceuticals</Button>
        <Button variant="outlined" className="button">Real Estate</Button>
        <Button variant="outlined" className="button">Retail</Button>
        <Button variant="outlined" className="button">Telecommunications</Button>
        <Button variant="outlined" className="button">Transportation</Button>
        <Button variant="outlined" className="button">Travel</Button>
        <Button variant="outlined" className="button">Utilities</Button>
      </div>
      <div className="flex-center">
        <Button variant="contained" className="button">Next</Button> {/* For a filled button use variant="contained" */}
      </div>
    </div>
  );
}
