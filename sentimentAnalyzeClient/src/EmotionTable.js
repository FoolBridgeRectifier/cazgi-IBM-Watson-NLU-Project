import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
	render() {
		
		return (  
			<div>
				{/*You can remove this line and the line below. */}
				{JSON.stringify(this.props.emotions)}
				<table className="table table-bordered">
					<tbody>
					{
						Object.keys(this.props.emotions).map(emotions =>
						{
							return(
							<tr>
							<td> {emotions} </td>
							<td> {this.props.emotions[emotions]} </td>
							</tr>)
						})
					}
					</tbody>
				</table>
			</div>
		);
	}

}
export default EmotionTable;
