import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './styles.css'

const LandingPage = () => {
    const API = 'https://xcountries-backend.azurewebsites.net/all';
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const fetchData = async () => {
        try {
            setLoading(true)
            const fetchedData = await axios.get(API);
            setCountries(fetchedData.data)
            setLoading(false)
            // console.log(fetchedData.data[0])
        } catch (err) {
            console.log("Error fetching data: ", err)
            setError("Error fetching data: ", err)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])


    if (loading) {
        return <p>Loading countries...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }
    return (
        <div className='landing-page'>
            {countries && countries.map(country => {
                return country.name && <div key={country.flag} className='container'>
                    <div className='card'>
                        <img width='80px' height='100px' src={country.flag} alt={`${country.name} flag`} />
                        <p>{country.name}</p>
                    </div>
                </div>
            })}
        </div>
    )
}

export default LandingPage
