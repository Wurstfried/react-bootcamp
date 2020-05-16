class Slot extends React.Component {
	render() {
        const { s1, s2, s3 } = this.props;
		let won = (s1 === s2) && (s2 === s3) ? "You WON": "You lost ;(";


		return (
			<div>
				<p>{s1} {s2} {s3}</p>
                <p>{won}</p>
			</div>
		);
	}
}
