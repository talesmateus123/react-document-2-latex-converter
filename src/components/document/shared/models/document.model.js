function Document(id, titulo, subTitulo, title, nomeAutor, nomeCidade, ano, dataAprovacao, tipoTrabalho, tituloAcademico, areaConcentracao, linhaPesquisa, nomeInstituicao, siglaInstituicao, campusInstituicao, departamentoInstituicao, nomeCurso, nivelEscolarCurso, nomeOrientador, nomeCoorientador, textoAbstractX, palavrasChaveAbstractX, agradecimentos, dedicatoria, epigrafe, fichaCatalograficaPalavrasChave, preAmbulo, textoResumo, palavrasChaveResumo, listaSiglas, listaSimbolos, enabledAgradecimentos, enabledDedicatoria, enabledEpigrafe, enabledFichaCatalografica, enabledListaSiglas, enabledListaSimbolos, enabledListaTabelas, enabledListaAlgoritmos, enabledListaFiguras, enabledListaQuadros, capitulos, apendices, anexos) {
    
    this.id = id
	this.titulo = titulo
	this.subTitulo = subTitulo
	this.title = title
	this.nomeAutor = nomeAutor
	this.nomeCidade = nomeCidade
	this.ano = ano
    this.dataAprovacao = dataAprovacao
	this.tipoTrabalho = tipoTrabalho
	this.tituloAcademico = tituloAcademico
	this.areaConcentracao = areaConcentracao
	this.linhaPesquisa = linhaPesquisa
    this.nomeInstituicao = nomeInstituicao
	this.siglaInstituicao = siglaInstituicao
	this.campusInstituicao = campusInstituicao
	this.departamentoInstituicao = departamentoInstituicao
	this.nomeCurso = nomeCurso
	this.nivelEscolarCurso = nivelEscolarCurso
	this.nomeOrientador = nomeOrientador
	this.nomeCoorientador = nomeCoorientador
	this.textoAbstractX = textoAbstractX
	this.palavrasChaveAbstractX = palavrasChaveAbstractX
	this.agradecimentos = agradecimentos
	this.dedicatoria = dedicatoria
	this.epigrafe = epigrafe
	this.fichaCatalograficaPalavrasChave = fichaCatalograficaPalavrasChave
	this.preAmbulo = preAmbulo
	this.textoResumo = textoResumo
	this.palavrasChaveResumo = palavrasChaveResumo
	this.listaSiglas = listaSiglas
	this.listaSimbolos = listaSimbolos
	this.enabledAgradecimentos = enabledAgradecimentos
	this.enabledDedicatoria = enabledDedicatoria
	this.enabledEpigrafe = enabledEpigrafe
	this.enabledFichaCatalografica = enabledFichaCatalografica
	this.enabledListaSiglas = enabledListaSiglas
	this.enabledListaSimbolos = enabledListaSimbolos
	this.enabledListaTabelas = enabledListaTabelas
	this.enabledListaAlgoritmos = enabledListaAlgoritmos
	this.enabledListaFiguras = enabledListaFiguras
	this.enabledListaQuadros = enabledListaQuadros
	this.capitulos = capitulos
	this.apendices = apendices
    this.anexos = anexos
    
    return {
        id: id,
        titulo: titulo,
        subTitulo: subTitulo,
        title: title,
        nomeAutor: nomeAutor,
        nomeCidade: nomeCidade ? nomeCidade : 'Corumbá',
        ano: ano ? ano : new Date().getFullYear(),
        dataAprovacao: dataAprovacao,
        tipoTrabalho: tipoTrabalho ? tipoTrabalho : 'TCC',
        tituloAcademico: tituloAcademico ? tituloAcademico : 'BACHAREL',
        areaConcentracao: areaConcentracao,
        linhaPesquisa: linhaPesquisa,
        nomeInstituicao: nomeInstituicao ? nomeInstituicao : 'Instituto Federal do Mato Grosso do Sul',
        siglaInstituicao: siglaInstituicao ? siglaInstituicao : 'IFMS',
        campusInstituicao: campusInstituicao ? campusInstituicao : 'Corumbá',
        departamentoInstituicao: departamentoInstituicao,
        nomeCurso: nomeCurso,
        nivelEscolarCurso: nivelEscolarCurso ? nivelEscolarCurso : 'SUPERIOR',
        nomeOrientador: nomeOrientador,
        nomeCoorientador: nomeCoorientador,
        textoAbstractX:textoAbstractX,
        palavrasChaveAbstractX: palavrasChaveAbstractX ? palavrasChaveAbstractX : [],
        agradecimentos: agradecimentos,
        dedicatoria: dedicatoria,
        epigrafe: epigrafe,
        fichaCatalograficaPalavrasChave: fichaCatalograficaPalavrasChave ? fichaCatalograficaPalavrasChave : [],
        preAmbulo: preAmbulo,
        textoResumo: textoResumo,
        palavrasChaveResumo: palavrasChaveResumo ? palavrasChaveResumo : [],
        listaSiglas: listaSiglas ? listaSiglas : [],
        listaSimbolos: listaSimbolos ? listaSimbolos : [],
        enabledAgradecimentos: enabledAgradecimentos ? enabledAgradecimentos : false,
        enabledDedicatoria: enabledDedicatoria ? enabledDedicatoria : false,
        enabledEpigrafe: enabledEpigrafe ? enabledEpigrafe : false,
        enabledFichaCatalografica: enabledFichaCatalografica ? enabledFichaCatalografica : false,
        enabledListaSiglas: enabledListaSiglas ? enabledListaSiglas : false,
        enabledListaSimbolos: enabledListaSimbolos ? enabledListaSimbolos : false,
        enabledListaTabelas: enabledListaTabelas ? enabledListaTabelas : false,
        enabledListaAlgoritmos: enabledListaAlgoritmos ? enabledListaAlgoritmos : false,
        enabledListaFiguras: enabledListaFiguras ? enabledListaFiguras : false,
        enabledListaQuadros: enabledListaQuadros ? enabledListaQuadros : false,
        capitulos: capitulos ? capitulos : [],
        apendices: apendices ? apendices : [],
        anexos: anexos ? anexos : []
    }
}

export default Document
