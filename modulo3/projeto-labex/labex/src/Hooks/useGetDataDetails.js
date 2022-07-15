import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { BASE_URL, HEADERS } from '../Credentials/Credentials'

export function useGetDataDetails(path) {
    const [dados, setDados] = useState();
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState();
    const [candidates, setCandidates] = useState([])
    useEffect(() => {
        setLoading(true);
        const token = localStorage.getItem("token")
        axios
            .get(`${BASE_URL}${path}`, 
            {
                headers: {
                    auth: token
                }
            })
            .then((res) => {
                setLoading(false);
                setDados(res.data.trip);
                setCandidates(res.data.trip.candidates)
            })
            .catch((err) => {
                console.log(err.response.data);
                setLoading(false);
                setErro(err.response.message);
            })
    }, [path])
    return { dados, loading, erro, candidates }
}
