import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
      const myTableRows =     Object.entries(this.props.emotions).map(function(mapentry) {
        return (
            <tr>
            <td>{mapentry[0]}</td>
            <td>{mapentry[1]}</td>
            </tr>
        )
        });
      //Returns the emotions as an HTML table
      return (  
        <div>
          <table className="table table-bordered">
            <tbody>
            {myTableRows}
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;