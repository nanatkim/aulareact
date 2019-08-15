import React from "react";

const Form = ({ nome, comentario, onChange, onSubmit }) => (
	<div>
		<form onSubmit={onSubmit}>
			<div className="form-group">
				<label>Nome</label>
				<input
					type="text"
					className="form-control"
					name="nome"
					value={nome}
					onChange={onChange}
				/>
			</div>
			<div className="form-group">
				<label>Comentário</label>
				<input
					type="text"
					className="form-control"
					name="comentario"
					value={comentario}
					onChange={onChange}
				/>
			</div>
			<button className="btn btn-success">Salvar</button>
		</form>
	</div>
);

export default Form;
