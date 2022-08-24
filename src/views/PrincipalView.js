import React, { useEffect, useState } from 'react'
import { starWars } from '../api/starWars'

export const PrincipalView = () => {

    const [people, setPeople]  = useState([]);


    useEffect(() => {
        getPeople();     
    }, [])


    const getPeople = async()=> {
        const resp = await starWars.get('https://swapi.dev/api/people');
        setPeople(resp.data.results);    
    }
    



return (
    <div className=' container mt-5'>

    {
        people.map(p => (
            <div class="card m-3" >
            <div class="card-header ">
                {p.name}
                <div class='d-grid gap-1 d-sm-flex justify-content-sm-end'>
                <button class="btn btn-sm btn-primary me-sm-1" type="button">Fav</button>  
                </div>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Height = {p.height}</li>
                <li class="list-group-item"> Mass = {p.mass}</li>
                <li class="list-group-item"> Birthday= {p.birth_year}</li>
            </ul>
        </div>
            ))
    }

   

            
</div>
)
}
