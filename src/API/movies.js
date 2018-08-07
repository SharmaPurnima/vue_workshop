const HOST      = "http://localhost:3000",
      formatter = res => res.json()

export default {
	getAll: () => fetch(`${HOST}/movies`).then(formatter)
}