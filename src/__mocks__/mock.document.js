import Document from '../components/document/shared/models/document.model'
import Capitulo from '../components/document/shared/models/capitulo.model'
import { v4 as generateUniqueId } from 'uuid'

function MockDocument(id) {
    const palavrasChaveAbstractX = ['keyword 1', 'keyword 2', 'keyword 3']
    const fichaCatalograficaPalavrasChave = ['palavra-chave 1', 'palavra-chave 2', 'palavra-chave 3']
    const palavrasChaveResumo = ['palavra-chave 1', 'palavra-chave 2', 'palavra-chave 3']
    const listaSiglas = ['sigla 1', 'sigla 2', 'sigla 3']
    const listaSimbolos = ['simbolo 1', 'simbolo 2', 'simbolo 3']

    const capitulos = [
        new Capitulo(generateUniqueId(), 'titulo', 'body'),
        new Capitulo(generateUniqueId(), 'titulo', 'body'),
        new Capitulo(generateUniqueId(), 'titulo', 'body')
    ]

    const apendices = [
        new Capitulo(generateUniqueId(), 'titulo', 'body'),
        new Capitulo(generateUniqueId(), 'titulo', 'body'),
        new Capitulo(generateUniqueId(), 'titulo', 'body')
    ]

    const anexos = [
        new Capitulo(generateUniqueId(), 'titulo', 'body'),
        new Capitulo(generateUniqueId(), 'titulo', 'body'),
        new Capitulo(generateUniqueId(), 'titulo', 'body')
    ]

    const documentModel = new Document(
        id ? id : generateUniqueId(), 'titulo', 'subTitulo', 'title', 'nomeAutor', 'nomeCidade', 2020, null,  'tipoTrabalho','tituloAcademico', 'areaConcentracao', 'linhaPesquisa', 'nomeInstituicao', 'siglaInstituicao', 'campusInstituicao', 'departamentoInstituicao','nomeCurso', 'nivelEscolarCurso', 'nomeOrientador', 'nomeCoorientador', 'textoAbstractX', palavrasChaveAbstractX, 'agradecimentos', 'dedicatoria', 'epigrafe', fichaCatalograficaPalavrasChave, 'preAmbulo', 'textoResumo', palavrasChaveResumo, listaSiglas, listaSimbolos, 'enabledAgradecimentos', 'enabledDedicatoria', 'enabledEpigrafe', 'enabledFichaCatalografica', 'enabledListaSiglas', 'enabledListaSimbolos', 'enabledListaTabelas', 'enabledListaAlgoritmos', 'enabledListaFiguras', 'enabledListaQuadros', capitulos, apendices, anexos)
    
    return documentModel
}

export default MockDocument