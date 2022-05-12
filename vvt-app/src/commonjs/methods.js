export function getApi (url) {
    return fetch( url, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json'
        })
    })
    .then( function( response ){
        if ( response.status != 200 ){
            throw response.status;
        } else {
            return response.json();
        }
    })
}