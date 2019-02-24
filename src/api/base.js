
/**
 * to be quick, i won't set up an .env file for the test
 */

export default async (param = {}) => {
    const url = new URL(param.path, 'http://5ae97684531a58001414278c.mockapi.io/')
    return fetch(url.href)
        .then(response => response.json())
}
