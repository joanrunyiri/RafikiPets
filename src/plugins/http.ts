import type { App, Plugin } from 'vue'
import type { HttpPlugin } from '@/types/http'

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

const httpPlugin: Plugin = {
  install(app: App, options: { baseUrl: string }) {
    const baseUrl = options.baseUrl

    async function getRequest(url: string) {
      return fetch(baseUrl + url, {
        headers,
      })
    }
    async function patchRequest(url: string, payload: any) {
      return fetch(baseUrl + url, {
        method: 'PATCH',
        body: JSON.stringify(payload),
        headers,
      })
    }

    async function postRequest(url: string, payload: any) {
      const isFormRequest = payload instanceof FormData
      const body = isFormRequest ? payload : JSON.stringify(payload)
      let headers: any = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
      if (isFormRequest) {
        headers = {
          Accept: 'application/json',
        }
      }

      return fetch(baseUrl + url, {
        method: 'POST',
        body,
        headers,
      })
    }

    async function deleteRequest(url: string) {
      return fetch(baseUrl + url, {
        method: 'DELETE',
        headers: {},
      })
    }

    const client: HttpPlugin = {
      get: getRequest,
      patch: patchRequest,
      post: postRequest,
      delete: deleteRequest,
    }

    app.provide('http', client)
    app.config.globalProperties.$http = client
  },
}

export default httpPlugin
