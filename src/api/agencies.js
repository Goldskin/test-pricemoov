import ApiBase from './base'
export default async (id = null) => ApiBase({
    path: `../agencies/${id === null ? '' : id}`,
})
