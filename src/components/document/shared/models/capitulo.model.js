function Capitulo(id, titulo, body) {
    
    this.id = id
    this.titulo = titulo
    this.body = body

    return {
        id: id ? id : new Date().getTime(),
        titulo: titulo,
        body: body ? body : ''
    }
}

export default Capitulo
