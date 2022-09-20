const Cliente = require('../../models/cliente')

// Declara o teste.
describe('cliente', () => {
	beforeEach(() => {
		// Utilizado para configurações.
		// Ex: Limpar registros do banco de dados.
		// Será executado antes de todas as funções "it"
	})

	it("Retorna todos", () => {
		// Vai retornar um metodo estático que vai retornar 10 itens.
		let clientes = Cliente.todos()

		// Espera-se que a quantidade venha 10.
		expect(clientes.length).toEqual(10)
	})

	it("Valida propriedades de um cliente", () => {
		// Vai retornar um metodo estático com o primeiro cliente.
		let cliente = Cliente.primeiro()

		// A propriedade id tem que existir.
		expect(cliente.id).not.toBeUndefined()
		// A propriedade nome tem que existir.
		expect(cliente.nome).not.toBeUndefined()
		// A propriedade telefone tem que existir.
		expect(cliente.telefone).not.toBeUndefined()
	})

	it("Nome do cliente Upercase", () => {
		// Vai retornar um metodo estático com o primeiro cliente.
		let cliente = Cliente.primeiro()

		cliente.nome = "Lucas"

		expect(cliente.nomeUpercase()).toEqual("LUCAS")
	})
})