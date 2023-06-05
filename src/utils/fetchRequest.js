import axios from 'axios'

const fetchRequest = async (method, url, data, query) => {
  const localData = localStorage.getItem('Pluto') || '{}'
  const headers = {
    'Content-Type': 'application/json',
    Authorization: JSON.parse(localData)?.token,
  }

  try {
    const res = await axios.request({
      baseURL: process.env.API_URL,
      method,
      url,
      headers,
      data,
      params: query,
    })

    if (res.headers?.authorization) {
      localStorage.setItem(
        'Pluto',
        JSON.stringify({
          token: res.headers.authorization,
        })
      )
    }

    console.log('========== Request Success ==========\n', res)

    return {
      status: res.status,
      data: res.data,
    }
  } catch (err) {
    console.error('========== Request Failure ==========\n', err.response)
    return {
      status: err.response.status,
      data: err.message,
    }
  }
}

export default fetchRequest
