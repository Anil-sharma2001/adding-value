import React, { Component } from 'react';
import './nevbar.css' ;


class Nevbar extends Component {
   
    render() { 
        return (
            <div>
                <div className="topnav">
  <a className="active" >Nevbar</a>
  <button type="button" class="btn btn-primary">
  Notifications <span class="badge">{this.props.totalCounters}</span>
</button>
  
</div>


            </div>
        );
    }
}
 
export default Nevbar;