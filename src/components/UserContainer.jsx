import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {fetchUsers, fetchUsers2} from "../redux/actions";

function UserContainer() {
    const userData = useSelector(state => state.users);
    console.log(userData);
    const {loading, users, error} = userData;
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchUsers2());
    }, []);
  return (
    <div>
        {loading && <div>Loading...</div>}
        {users && users.length>0 && <ul>{users.map(user => {
            return <li>{user.name}</li>
        })}</ul>}
        {error && <div>{error}</div>}
    </div>
  )
}

export default UserContainer