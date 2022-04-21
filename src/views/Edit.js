import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';




const Edit = (props) => {
    const { _id } = useParams();
    const history = useHistory();
    const [pets, setPets] = useState({});
    const [error, setError]= useState({})
    
    

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/one/${_id}`)
            .then(res => {
                console.log(res.data);
                setPets(res.data);
            })
            .catch(err => {
                console.log(err);
                setPets("");
            })
    }, [_id])


    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("Submitted");
        
        

        axios.patch("http://localhost:8000/api/pet/edit/" + _id,
            pets)
            .then(res => {
                console.log(res);
                history.push("/")
                
            })
            .catch(err=>{console.log(err.response.data.err.errors);
                setError (err.response.data.err.errors);
            });

    }

    const onChangeHandler = (event) => {
        event.preventDefault();
        setPets({
            ...pets,
            [event.target.name]: event.target.value
        })
    }



    return (
        <form onSubmit={onSubmitHandler}>
            <h3>Edit {pets.petname} </h3>
             <div>
                <a href='/' className='button'>Home Page</a>
            </div>
            <div>
                <label htmlFor='petname'>Name:</label>
                <input type="text" name="petname" value={pets.petname} onChange={onChangeHandler} />
                {error.petname && error.petname.message}
            </div>
            <div>
                <label htmlFor='pettype'>Type:</label>
                <input type="text" name="pettype" value={pets.pettype} onChange={onChangeHandler} />
                {error.pettype && error.pettype.message}
            </div>
            <div>
                <label htmlFor='description'>Description:</label>
                <input type="text" name="description" value={pets.description} onChange={onChangeHandler} />
                {error.description && error.description.message}
            </div>
            <div>
                <h3>Skills (optional)</h3>
                <label htmlFor='skill1'>Skill 1</label>
                <input type="text" name="skill1" value={pets.skill1} onChange={onChangeHandler} />
                <label htmlFor='skill2'>Skill 2</label>
                <input type="text" name="skill2" value={pets.skill2} onChange={onChangeHandler} />
                <label htmlFor='skill3'>Skill 3</label>
                <input type="text" name="skill3" value={pets.skill3} onChange={onChangeHandler} />
            </div>
            
           
            <div>
                <input type="submit" value="Edit Pet" />
            </div>
        </form>
    )
}




export default Edit;