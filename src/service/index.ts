/*
 * @Authon: kermit
 * @Date: 2023-05-30 23:09:27
 * @Description:
 */

type ConfigType = {
  methods: 'get' | 'post' | 'put' | 'delete'
  params?: any
  data?: any
}

export const useFatch = (url: string, config: ConfigType) => {
  const baseUrl = 'https://4diz7qftgv.hk.aircode.run'
  const requestUrl = `${baseUrl}${url}`
  return fetch(requestUrl, {
    method:config.methods,
    body:JSON.stringify(config.data),
    headers: {
      ContentType: 'application/json'
    }
  })
}
