import api from 'create-api'
import request from 'superagent'
const prefix = `${api.host}/api`

const store = {}

export default store

store.fetch = (model, query) => {
  const target = `${prefix}/${model}`
  if (__SERVER__) {
    return request.get(target).query(query).then((response) => {
      const result = response.body
      return result
    })
  } else {
    return api.axios.get(target, { params: query }).then((response) => {
      const result = response.data
      return result
    })
  }
}

