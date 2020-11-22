function DocumentStorageService() {
    function getDocuments() {
        return localStorage.documents ? JSON.parse(localStorage.documents) : []
    }

    function setDocuments(documents) {
        localStorage.documents = JSON.stringify(documents)
    }

    return [
        getDocuments,
        setDocuments
    ]
}

export default DocumentStorageService