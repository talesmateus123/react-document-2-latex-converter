import Capitulo from '../components/document/shared/models/capitulo.model'
import { v4 as generateUniqueId } from 'uuid'

function MockDocument(id) {
    return new Capitulo(id ? id : generateUniqueId(), 'titulo', 'body')
}

export default MockDocument