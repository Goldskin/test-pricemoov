import ApiBase from './base'
export default async (
    payload = {agencyId: null, categoryId: null}
) => ApiBase({
    path: `../agencies/${payload.agencyId}/categories/${payload.categoryId}/prices`,
})

