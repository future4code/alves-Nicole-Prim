import axios from 'axios'
import { baseURL } from './url'

const getAddressInfo = async (cep: string, bairroPessoa: string, logradouroPessoa: string): Promise<any> => {
    try {
        const res = await axios.get(`${baseURL}/${cep}/json`);

        const { logradouro, bairro, localidade, uf } = res.data

        const address = {
            logradouro: logradouro ? logradouro : logradouroPessoa as string,
            bairro: bairro ? bairro : bairroPessoa as string,
            localidade: localidade as string,
            uf: uf as string
        }

        return address
    } catch (error) {
        throw new Error();
    }
}

export default getAddressInfo;