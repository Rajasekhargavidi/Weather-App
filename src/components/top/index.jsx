import React, { Component } from 'react';
import Weather from './Weather'
import '../top/style.scss'
import { Manager, Reference, Popper } from 'react-popper'


class TopSection extends Component {
    constructor(props){
        super(props);
        this.state = {
          isSelectLocationOpen : false,
        };
    }

onToggleSelectLocation(){
  this.setState(prevState =>({
    isSelectLocationOpen: !prevState.isSelectLocationOpen
  }));
}

onLocalNameChange(e){
this.setState({
  locationName: e.target.value
});
}

onSelectCity(){
  const{ locationName } = this.state;
  const { eventEmitter } = this.props;
  eventEmitter.emit("updateweather",locationName);
  this.setState({ isSelectLocationOpen:false });
}

  render() {
    const { isSelectLocationOpen } = this.state;
    const { eventEmitter } = this.props;

    return (
      <div className = "top-container">
      <div className = "title">Weather Up</div>
      <Weather  {...this.props}/>
     
      <Manager>
      <Reference>
        {({ ref }) => (
          <button 
          className = "btn btn-select-location" 
          ref = {ref} 
          onClick = {this.OnToggleSelectLocation.bind(this)}>
          Select Location
          </button>
        )}
      </Reference>
      <Popper placement="top">
        {({ ref, style, placement, arrowProps }) => (
          isSelectLocationOpen && (
          <div className = "popup-container" 
          ref={ref} 
          style={{style}} 
          data-placement={placement}>
          <div className="form-container">          
           <label htmlFor = "location-name">Location Name</label>
           <input 
           id="location-name" 
           type="text" 
           placeholder= "City Name" 
           onChange={this.onLocalNameChange.bind(this)}
           />
           <button 
           className="btn btn-select-location" 
           onClick = {this.onSelectCity.bind(this)}>
           Select
           </button>
           </div>
            <div ref={arrowProps.ref} style={ arrowProps.style } />
          </div>
          )
        )}
      </Popper>
    </Manager>
      </div>
    );
  }
}

export default TopSection