import axios from 'axios'
export const cashbackApi = axios.create({
  baseURL: 'https://mdaqk8ek5j.execute-api.us-east-1.amazonaws.com/v1/cashback',
  headers: { token: 'ZXPURQOARHiMc6Y0flhRC1LVlZQVFRnm' }
})

export const fetchCashback = (cpf: string) => {
  return cashbackApi
    .get('/', {
      params: { cpf: cpf }
    })
    .then((response) => response.data)
}
