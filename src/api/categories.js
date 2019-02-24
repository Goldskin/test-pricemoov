import ApiBase from './base'
export default (agencyId, id = null) => ApiBase({
    path: `../agencies/${agencyId}/categories/${id === null ? '' : id}`,
})
