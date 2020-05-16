class App extends React.Component {
	render() {
		return (
			<div>
				<Slot
					s1="x"
					s2="x"
					s3="x"
				/>
				<Slot
					s1="x"
					s2="y"
					s3="z"
				/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
