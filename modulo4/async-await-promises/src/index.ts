import axios from 'axios'
import { StringifyOptions } from 'querystring';
import { BASE_URL } from './url';

// Ex 1
// a) get
// b) com o Promise<any[]>

type Subscriber = {
    id: string,
    name: string,
    email: string
}

const getSubscribers = async (): Promise<Subscriber[]> => {
    const response = await axios.get(`${BASE_URL}subscribers`)
    return response.data.map((res: any) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email,
        };
    });
}

// Ex 2 
// a) na arrow, o async vem depois e na function o async vem primeiro
// b) - como já tinha feito em arrow function, agora fiz em function normal
/* async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${BASE_URL}subscribers`);
    return response.data;
}; */

// Ex 3
// a) não temos nenhum erro de tipagem

// Ex 4
// a) void, porque não tem retorno

const createNew = async (title: string, content: string, date: number): Promise<void> => {
    await axios.put(`${BASE_URL}news`, { title: title, content: content, date: date })
    .then (res => console.log("feito"))

}

const sendNotification = async (
    subscribers: Subscriber[],
    message: string): Promise<void> => {
    try {
        const results = subscribers.map(subscriber => {
            return axios.post(`${BASE_URL}notifications`, {
                subscriberId: subscriber.id,
                message
            })
        })
        await Promise.all(results)
        console.log("Notificações enviadas")
    } catch {
        console.log("Erro");
    }
};

// Ex 6
// a) ela é resolvida quando todas as promises são resolvidas ou quando qualquer uma delas é rejeitada
// b) criar uma promise que finaliza sua execução assim que todas as promises recebidas forem finalizadas

const main = async (): Promise<void> => {
    try {
        createNew("Título", "Contente", 25/12/22)
        const subscribers = await getSubscribers()
        console.log(subscribers)
        await sendNotification(subscribers, "Uma notificação para o usuário")
    } catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }
}

main()

