// Criação  e exportação da classe Cliente.
module.exports = class Cliente {
	constructor(_id=0, _nome="", _telefone="") {
		this.id = _id
		this.nome = _nome
		this.telefone = _telefone
	}

	// Retorna o nome do cliente em letras maiúsculas.
	nomeUpercase() {
		return this.nome.toUpperCase()
	}

	// Retorna um cliente.
	static primeiro() {
		return new Cliente()
	}

	// Retorna 10 clientes.
	static todos() {
		return [
			new Cliente(1, "Luan", "12354879"),
			new Cliente(2, "Luan 1", "12354879"),
			new Cliente(3, "Luan 2", "12354879"),
			new Cliente(4, "Luan 3", "12354879"),
			new Cliente(5, "Luan 4", "12354879"),
			new Cliente(6, "Luan 5", "12354879"),
			new Cliente(7, "Luan 6", "12354879"),
			new Cliente(8, "Luan 7", "12354879"),
			new Cliente(9, "Luan 8", "12354879"),
			new Cliente(10, "Luan 9", "12354879")
		]
	}
}