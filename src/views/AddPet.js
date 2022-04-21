import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AddPet = (props) => {
    const [petname, setPetname] = useState('');
    const [pettype, setPettype] = useState('');
    const [description, setDescription] = useState('');
    const [skill1, setSkill1] = useState('');
    const [skill2, setSkill2] = useState('');
    const [skill3, setSkill3] = useState('');
    const [error, setError]= useState({})
   const history = useHistory();
   

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("Submitted");
        
        
        axios.post("http://localhost:8000/api/pet/create",{
            petname,pettype,description,skill1,skill2,skill3})
            .then(res =>{
                console.log(res);
                history.push("/")
            })
            .catch(err=>{console.log(err.response.data.err.errors);
                        setError (err.response.data.err.errors);
            })
            
    }

    return (
        
        <form onSubmit={onSubmitHandler}>
            <h3>Sign pet up for adoption Here</h3>
            <div>
                <a href='/' className='button'>Home Page</a>
            </div>
            <div>
                <label htmlFor='petname'>Name:</label>
                <input type="text" name="petname" value={petname} onChange={(e) => setPetname(e.target.value)} />
                {error.petname && error.petname.message}
            </div>
            <div>
                <label htmlFor='pettype'>Type:</label>
                <input type="text" name="pettype" value={pettype} onChange={(e) => setPettype(e.target.value)} />
                {error.pettype && error.pettype.message}
            </div>
            <div>
                <label htmlFor='description'>Description:</label>
                <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                {error.description && error.description.message}
            </div>
            <div>
                <h3>Skills (optional)</h3>
                <label htmlFor='skill1'>Skill 1</label>
                <input type="text" name="skill1" value={skill1} onChange={(e) => setSkill1(e.target.value)} />
                <label htmlFor='skill2'>Skill 2</label>
                <input type="text" name="skill2" value={skill2} onChange={(e) => setSkill2(e.target.value)} />
                <label htmlFor='skill3'>Skill 3</label>
                <input type="text" name="skill3" value={skill3} onChange={(e) => setSkill3(e.target.value)} />
            </div>
            <div>
                <input type="submit" value="Add Pet" />
                
            </div>
        </form>
    )
}

export default AddPet;