import { useState,useEffect } from 'react';
import {collection,getDocs,addDoc,updateDoc,doc,deleteDoc} from "@firebase/firestore";

import {db} from "./firebase-config";
const Home = () => {
    const[newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState(0);
    const [users, setUsers] = useState([]);
    const usersCollection = collection(db, "users");

    const createUser = async ()=>{
    
        await addDoc(usersCollection, {userName:newName, age: Number(newAge)});
    
      };
    
      const updateUser = async (id, age) =>{
        const userDoc= doc(db, "users", id);
        const newFields = {age: age+1};
        //console.log(userDoc, newFields);
       await updateDoc(userDoc, newFields)
      };
    
      const deleteUser = async (id) =>{
        const userDoc = doc(db, "users", id);
        await deleteDoc(userDoc);
      }

      useEffect(() =>{

        const getUsers = async () =>{
          const data = await getDocs(usersCollection);
          setUsers(data.docs.map((doc) =>({...doc.data(), id: doc.id})));
        }
    
        getUsers();
    
      }, [])
    

    return ( <div>
         <input 
          type="text" 
          placeholder='Name...' 
          onChange={(event) => {setNewName(event.target.value)}}
        ></input><br></br>
        <input 
          type="number" 
          placeholder='age...'
          onChange={(event) => {setNewAge(event.target.value)}}
        ></input><br></br>

        <button onClick={createUser}>Create user</button>

        

        {users.map((user) => {return( 
        <div>
          {" "}
            <h1>Name: {user.userName} </h1>
            <h1>Age: {user.age} </h1> 
            <button onClick={() => {updateUser(user.id, user.age)}}> {" "}Update Age</button>  
            <button onClick={()=> {deleteUser(user.id)}}>{" "} Delete User</button>  

        </div>);
        })}

    </div> );
}
 
export default Home;