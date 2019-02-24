import ApiBase from './base'
export default async (agencyId, id = null) => ApiBase({
    path: `../agencies/${agencyId}/categories/${id === null ? '' : id}`,
})
