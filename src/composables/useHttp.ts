import { inject } from 'vue'
import type { HttpPlugin } from '@/types/http'

let instance: HttpPlugin

export default function useHttp() {
  if (instance) {
    return instance
  }

  instance = inject('http') as HttpPlugin
  return instance
}
