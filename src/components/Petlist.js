import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

const Petlist = (props) => {
    const [pets, setPets] = useState([]); 
    const history = useHistory();
    


    useEffect(() => {
        axios.get("http://localhost:8000/api/pet/findAll")
            .then(res => {
                console.log(res.data); 
                setPets(res.data);
                history.push("/")
            })
            //pets.sort(function(a, b){return a - b});
            //pets.sort((firstItem, secondItem) => firstItem.pettype - secondItem.pettype);
            .catch(err => {console.log(err);
                setPets("");
            })
    }, [])


    

    return(
        <div className="w-75 mx-auto">
            <Link to={`/api/pet/create`}><button>Add a Pet to the shelter</button></Link>
           <h3>These pets are looking for a good home!</h3>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        
                        pets.map((pet,i)=>{
                            return <tr key={i}>
                                <td> {pet.petname}</td>
                                <td>{pet.pettype}</td>
                                <td><Link to={`/api/pet/edit/${pet._id}`}>Edit|</Link> <Link to={`/api/pet/one/${pet._id}`}>Details</Link> </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
           
        </div>
    )
}


export default Petlist;