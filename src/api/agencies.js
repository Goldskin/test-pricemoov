import ApiBase from './base'
export default (id = null) => ApiBase({
    path: `../agencies/${id === null ? '' : id}`,
})
