import React, { useEffect, useState } from 'react'
import Navebar from '../navebar';
import './home.css';
import { getDocs, BiscuitsRef, deleteDoc, doc, db, onSnapshot, collection } from './firebase';

const Home = () => {

  const [loading, setLoading] = useState(false);
  const [allItems, setallItems] = useState([false]);


  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)

    }, 2000)

    onSnapshot(
      collection(db, "Items"),
      (snapshot) => {
        getFoods();
      },

      (error) => {
        alert(error);
      }
    );


  }, [])


  const getFoods = async () => {
    setLoading(true)
    const querySnapshot = await getDocs(BiscuitsRef);
    let item = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " all items wali hey => ", doc.data());
      item.push({ id: doc.id, ...doc.data() });
    });
    setallItems(item);
    setTimeout(() => {
      setLoading(false)

    }, 2000)
  };
  console.log("all items foods =======>", allItems);



  const deleteDocument = async (id) => {
    const deleted = await deleteDoc(doc(db, "Items", id));
    console.log("Deleted=>", deleted);
    console.log(id);
  };


  return (
    <Navebar>
      {
        loading ?
          <div className='loader-container'>
            < div className="spinner-border">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div >

          :
          <div className='card-container'>

            {allItems.map((data, index) => {
              return (
                <div className="card" key={index}>
                  <img src={data.image} className="card-img-top image-Card" />
                  <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text"> {data.description} </p>
                    <span className="btn-sm btn btn-danger btn-delete" onClick={() => deleteDocument(data.id)}>Delete</span>
                  </div>
                </div>
              );
            })}
          </div>
      }
     
    </Navebar >
  )
}

export default Home
