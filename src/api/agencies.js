import ApiBase from './base'
export default async (payload = { agencyId: null }) => ApiBase({
    path: `../agencies/${payload.agencyId === null ? '' : payload.agencyId}`,
})
