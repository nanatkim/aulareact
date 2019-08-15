import React from "react";

const List = ({ comentarios, onRemove }) => (
	<div style={{ marginTop: 20 }}>
		{comentarios.map(comentario => (
			<div key={comentario.uid}>
				<div>
					<strong>Nome: {comentario.nome} </strong>
					<p>Comentário: {comentario.comentario}</p>
					<em>Postado em: {comentario.createdAt}</em>
				</div>
				<button
					className="btn btn-danger"
					onClick={() => onRemove(comentario.uid)}
				>
					Excluir
				</button>
				<hr />
			</div>
		))}
		{comentarios.length === 0 && <p>Nenhum comentário encontrado</p>}
	</div>
);

export default List;
