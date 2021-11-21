import React, {useState} from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './AddUser.module.css';

function AddUser(props){
	const [enteredUserName, setEnteredUserName] = useState('');
	const [enteredAge, setEnteredAge] = useState('');

	const userNameChangeHandler = (event) => {
		setEnteredUserName(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	const addUserHandler = (event) => {
		event.preventDefault();
		if(enteredUserName.trim().length===0||enteredAge.trim().length===0){
			return;
		}
		if(+enteredAge<0){
		return;
		}
		setEnteredAge('');
		setEnteredUserName('');
	};

	return (
		<Card className={styles.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor='username'>Username</label>
				<input id='username' type='text' value={enteredUserName} onChange={userNameChangeHandler}/>
				<label htmlFor='age'>Age in Years</label>
				<input id='age' type='number' value={enteredAge} onChange={ageChangeHandler}/>
				<Button type='submit'>Add User</Button>
			</form>
		</Card>
	);
}

export default AddUser;