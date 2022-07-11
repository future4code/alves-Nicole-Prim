import React from 'react'
import axios from 'react'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../Credentials/Credentials'

export function UseGetData(path) {
    const [dados, setDados] = useState()
    const [loading, setLoading] = useState(false)
    const [erro, setErro] = useState()

    useEffect(() => {
        setLoading(true)
        axios
            .get(`${BASE_URL}${path}`)
            .then((res) => {
                setLoading(false);
                setDados(res.data);
            })
            .catch((err) => {
                // console.log(err.response.data);
                setLoading(false);
                setErro(err.response.data);
            })
    }, [path])

    return { dados, loading, erro }

}

export default UseGetData