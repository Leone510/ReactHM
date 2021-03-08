import React, {useState} from 'react';
import './normalize.css';
import './App.css';
import {userData} from './userData.js'; 

const HeaderApp = (props) => {
  return (
    <div className="header">
      {props.children}
    </div>
  );
}

const MainApp = (props) => {
  
  return (
    <div className="cardContainer">
      {
        props.data.map(data => <UserCard
          key={`key_${data._id}`}
          user={data}
          showModal={props.showModal}
          catchModalsUser={props.catchModalsUser}
        />)
      }
    </div>
  );
}

const ModalUser = (props) => {
  if(!props.isShowModal) return null;
  return (
    <div className="modalContainer" onClick={props.showModal}>
      <div className="modalBox">
        <div className="modalInfo">
          <DataContainer>
            <h4>Name:</h4>
            <p>{props.user.name}</p>
          </DataContainer>
          <DataContainer>
            <h4>Age:</h4>
            <p>{props.user.age}</p>
          </DataContainer>
          <DataContainer>
            <h4>Balance:</h4>
            <p>{props.user.balance}</p>
          </DataContainer>
          <DataContainer>
            <h4>Eye color:</h4>
            <p>{props.user.eyeColor}</p>
          </DataContainer>
          <DataContainer>
            <h4>Gender:</h4>
            <p>{props.user.gender}</p>
          </DataContainer>
          <DataContainer>
            <h4>Company:</h4>
            <p>{props.user.company}</p>
          </DataContainer>
          <DataContainer>
            <h4>Avatar:</h4>
            <img src={props.user.picture}/>
          </DataContainer>
        </div>
        <div className="modalAbout">
          <h4>About:</h4>
          <p>{props.user.about}</p>
        </div>
        <div className="modalAdres">
          <h4>Address:</h4>
          <p>796 Prospect Avenue, Thomasville, Kansas, 4553</p>
        </div>
        <div className="modalContact">
          <h4>Contacs:</h4>
          <div className="contacts">
            <p>+1 (999) 427-3302</p>
            <p>robinsonlloyd@trollery.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
const DataContainer = (props) => {
  return (
    <div className="dataContainer"> 
      {props.children}
    </div>
  )
}

const UserCard = (props) => {
  return (
    <div 
      className="userCard" 
      onClick={() => {
        props.catchModalsUser(props.user._id);
        props.showModal();
      }}
    >
      <img src={props.user.picture}/>
      <p>{`Name: ${props.user.name}`}</p>
      <p>{`Age: ${props.user.age}`}</p>
      <p>{`Gender: ${props.user.gender}`}</p>
      <p>{`Balance: ${props.user.balance}`}</p>
    </div>
  );
}

//----------------------------------------------------------

const App = () => {
  const [usersArrForRender, setUsersArrForRender] = useState(userData)
  const [isShowModal, setIsShowModal] = useState(false);
  const [userForModal, setUserForModal] = useState(null);
  const [sortingType, setSortingType] = useState('def')
  const [filteredByName, setFilteredByName] = useState('')

  const prepereForRender = (fValue, sValue) => {
    const filtered = userData.filter(user => {
      const nameTLC = user.name.toLowerCase();
      return nameTLC.includes(fValue.toLowerCase());
    })

    let sorted = [];
    if (sValue === 'asc') {
      sorted = filtered.sort((a, b) => a.age - b.age)
    } else if (sValue === 'des') {
      sorted = filtered.sort((a, b) => b.age - a.age)
    } else {
      sorted = [...filtered];
    }

    setUsersArrForRender([...sorted])
  }

  const handleFilterByName = (e) => {
    setFilteredByName(e.target.value);
    prepereForRender(e.target.value, sortingType);
  }

  const handleSortType = (e) => {
    setSortingType(e.target.value);
    prepereForRender(filteredByName, e.target.value);
  }

  const showModal = () => {
    setIsShowModal(!isShowModal);
  }

  const catchModalsUser = (id) => {
    const userForModal = userData.find(user => user._id === id);
    setUserForModal (userForModal);
  }



  return (
    <div className="wrapper">
      <ModalUser 
        isShowModal={isShowModal} 
        user={userForModal}
        showModal={showModal}
      />
      <HeaderApp>
        <label className="headerInput" htmlFor="filterByNeme">
          <p>Filter by name:</p>
          <input 
            name="filterByNeme"
            type="text"
            placeholder="Enter name..."
            onChange={handleFilterByName}
          />
        </label>
        <label className="headerSelect" htmlFor="sortByAge">
          <span>Sort: </span>
          <select 
            name="sortByAge" 
            id="#"
            onChange={handleSortType}
          >
            <option value="def">default</option>
            <option value="asc">Ascend</option>
            <option value="des">Descend</option>
          </select>
        </label>
      </HeaderApp>
      <MainApp 
        data={usersArrForRender} 
        showModal={showModal} 
        catchModalsUser={catchModalsUser}
      />
    </div>  
  );
}

export default App;
