import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Showone = (props) => {
    const { _id } = useParams();
    const [showone, setshowOne] = useState([]);
    const history = useHistory();
//const likeClick = likeClick();
    //const increaseLike =increaseLike();

    //const getLike =document.quarySelector('.like');
    //const getLikeNum =document.quaryDelector('.likeNum');

    useEffect(() => {
        axios.get("http://localhost:8000/api/pet/one/"+_id)
            .then(res => {
                console.log(res.data);
                setshowOne(res.data);
            })
            .catch(err => {
                console.log(err);
                setshowOne("");
            })
    }, [_id])

    // const onClickHandler = ()=>{
    //     let like=0;
    //     increaseLike=()=>{
    //         like++
    //         getLikeNum.innerHTML =`${like}`
    //     }
    //     likeClick=()=>{
    //         increaseLike()
    //     }
    //     getLike.addEventListener(('click',likeClick))
    // }

    const onDeleteHandler = (_id, index) => {
        
        axios.delete(`http://localhost:8000/api/pet/delete/${_id}`)
            .then(res => {
                console.log(res);
                history.push("/")
            })
            .catch(err => console.log(err))
    }



    return (
        <div>
            <div>
                <a href='/' className='button'>Home Page</a>
            </div>
            <button onClick={() => onDeleteHandler(showone._id)}>Adopt Me!</button>
            <div>
            <p>Name: {showone.petname}</p>
            <p>Type: {showone.pettype}</p>
            <p>Skills: {showone.skill1}  ,{showone.skill2}  ,{showone.skill3}</p>
            <p>Description: {showone.description}</p>
            {/* <div>
                <button class="like">Like| <p class="likeNum">0</p></button>
            </div> */}
            <Link to={`/api/pet/edit/${showone._id}`}><button>Edit</button></Link>
        </div>
        </div>
        
    )
}

export default Showone;