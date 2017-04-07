import React from 'react';
import Sidebar from './sidebar';
import MainTable from './maintable';

export default class MainBody extends React.Component {

  render() {
    return (
	<div className="container-fluid">
		<div className="row">
			<Sidebar user={this.props.user} />
			<MainTable />
		</div>
	</div>
    )
  }
}
