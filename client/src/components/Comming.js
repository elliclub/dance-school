import React, { Component } from "react";
 
class CommingClass extends Component {
  render() {
    return (
      <div>
        <h2>Kommande klasser</h2>
		<table id="coming-Sclasses" className="table">
			<thead>
				<tr>
					<th scope="col">Klass</th>
					<th scope="col">Datum</th>
					<th scope="col">Tid</th>
					<th scope="col" >Lärare</th>
				</tr>
			</thead>
			<tbody>
			</tbody>
		</table>
      </div>
    );
  }
}
 
export default CommingClass;