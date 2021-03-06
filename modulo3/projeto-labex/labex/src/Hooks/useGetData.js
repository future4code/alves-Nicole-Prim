import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../Credentials/Credentials'

export function useGetData(path, refresh) {
    const [dados, setDados] = useState();
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState();
    useEffect(() => {
        setLoading(true);
        axios
            .get(`${BASE_URL}${path}`)
            .then((res) => {
                setLoading(false);
                setDados(res.data);
            })
            .catch((err) => {
                console.log(err.response.data);
                setLoading(false);
                setErro(err.response.data);
            })
    }, [path, refresh])
    return { dados, loading, erro }
}
