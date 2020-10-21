import React, { Component } from 'react'

export default class Seminar extends Component {
	render() {
		return (
			<div>
				<div>Name: {this.props.data.name}</div>
        <div>Date: {this.props.data.date.toLocaleString()}</div>
				<div>Category: {this.props.data.category}</div>
				<div>Desc: {this.props.data.desc}</div>
				<div><a href="#" onClick={e => {e.preventDefault(); this.props.handleBack()} }>Back</a></div>
			</div>
		)
	}
}
