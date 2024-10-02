import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './styles.css'

const LandingPage = () => {
    const API = 'https://xcountries-backend.azurewebsites.net/all';
    const [countries, setCountries] = useState([])
    const fetchData = async () => {
        try {
            const fetchedData = await axios.get(API);
            setCountries(fetchedData.data)
            // console.log(fetchedData.data[0])
        } catch (err) {
            console.log("Error fetching data: ",err)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className='landing-page'>
            {countries.map(country => {
                return <div key={country.flag} className='container'>
                    <div className='card'>
                        <img width='80px' height='100px' src={country.flag} alt="country.name" />
                        <p>{country.name}</p>
                    </div>
                </div>

            })}
        </div>
    )
}

export default LandingPage
