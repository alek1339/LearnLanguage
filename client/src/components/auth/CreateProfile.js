import React, { useState } from 'react';
import { addProfile } from '../../actions/profileActions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const CreateProfile = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user.id)
  console.log(userId)
  let [firstName, setFirstName] = useState('');
  const handleFirstNameChange = event => {
    setFirstName(event.target.value);
  };
  let [lastName, setLastName] = useState('');
  const handleLastNameChange = event => {
    setLastName(event.target.value);
  };
  let [img, setImg] = useState('');

  const onSubmit = (e) => {
    e.preventDefault()
    const userData = {
      firstName: firstName,
      lastName: lastName,
      img: img,
      user_id: userId
    }
    dispatch(addProfile(userData))
  }
  return (
    <div>
      <h1>Create Profile</h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <input className='form-control mt-1'
            type='text'
            name='firstName'
            placeholder='First Name'
            value={firstName}
            onChange={handleFirstNameChange}
          />

          <input className='form-control mt-1'
            type='text'
            name='lastName'
            placeholder='Last Name'
            value={lastName}
            onChange={handleLastNameChange}
          />

          <input className='form-control mt-1'
            type='text'
            name='img'
            placeholder='Image URL'
            value={img}
            onChange={e => setImg(e.target.value)}
          />

          <input className='btn btn-primary mt-1' type='submit' value='Submit' />
        </div>
      </form>
    </div>
  )
}

export default CreateProfile;