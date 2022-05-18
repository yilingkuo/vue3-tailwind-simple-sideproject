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

export function setSessionStorage (storageKey, data, expireMinute) {
  try {
    sessionStorage.setItem(storageKey, JSON.stringify({
      data,
      expireTime: new Date().getTime() + (expireMinute * 60000)
    }))
  } catch (err) {
    this.$q.notify({ color: 'negative', position: 'bottom-right', icon: 'warning', message: '儲存 sessionStorage 失敗 \n' + String(err) })
  }
}

export function getSessionStorage (storageKey) {
  let response
  const data = sessionStorage.getItem(storageKey)

  if (typeof data === 'string') {
    const jsonData = JSON.parse(data)
    if (jsonData.expireTime > new Date().getTime()) {
      response = jsonData.data
    } else {
      sessionStorage.removeItem(storageKey)
    }
  }
  return response
}