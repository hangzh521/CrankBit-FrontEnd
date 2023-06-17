import { AxiosResponse } from 'axios'
import api from '@/utils/axios'
import { RegisterPayload, LoginPayload } from '@/interfaces/auth'

export const registerApi = (registerPayload: RegisterPayload): Promise<AxiosResponse> =>
  api.post('/auth/register', registerPayload)

export const loginApi = (loginPayload: LoginPayload): Promise<AxiosResponse> => api.post('/auth/login', loginPayload)
