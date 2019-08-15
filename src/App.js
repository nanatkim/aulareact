import React from "react";
import "./App.css";
import Form from "./componentes/form";
import List from "./componentes/list";
import firebase from "./firebase";

class App extends React.Component {
	state = {
		form: {
			nome: "",
			comentario: ""
		},
		comentarios: []
	};

	onChange = event => {
		this.setState({
			form: {
				...this.state.form,
				[event.target.name]: event.target.value
			}
		});
	};

	onSubmit = async event => {
		event.preventDefault();

		const comentario = {
			...this.state.form,
			createdAt: new Date().getTime()
		};

		await firebase
			.database()
			.ref("comentarios")
			.push(comentario);

		this.setState({
			form: {
				nome: "",
				comentario: ""
			}
		});
	};

	onRemove = uid => {
		const comentario = firebase
			.database()
			.ref("comentarios")
			.child(uid);
		comentario.remove();
	};

	componentDidMount() {
		firebase
			.database()
			.ref("comentarios")
			.on("value", snapshot => {
				const response = snapshot.val();
				const comentarios = !!response
					? Object.keys(response).map(uid => ({
							...response[uid],
							uid
					  }))
					: [];
				this.setState({ comentarios });
			});
	}

	render() {
		const { comentarios } = this.state;
		const { nome, comentario } = this.state.form;
		return (
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-6">
						<Form
							nome={nome}
							comentario={comentario}
							onChange={this.onChange}
							onSubmit={this.onSubmit}
						/>
						<List
							comentarios={comentarios}
							onRemove={this.onRemove}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
