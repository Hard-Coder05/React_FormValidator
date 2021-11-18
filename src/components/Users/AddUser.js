import React, {useState} from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModel from '../UI/ErrorModel';
import styles from './AddUser.module.css';

function AddUser(props){
	const [enteredUserName, setEnteredUserName] = useState('');
	const [enteredAge, setEnteredAge] = useState('');
	const [error, setError] = useState();

	const userNameChangeHandler = (event) => {
		setEnteredUserName(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	const addUserHandler = (event) => {
		event.preventDefault();
		if(enteredUserName.trim().length===0||enteredAge.trim().length===0){
		setError({title:'Invalid Input',message: 'Please enter a valid name and age (non empty values).'});
			return;
		}
		if(+enteredAge<0){
			setError({title:'Invalid Age',message: 'Please enter a valid age (>0)'});
		return;
		}
		props.onAddUser(enteredUserName.trim(),enteredAge.trim());
		setEnteredAge('');
		setEnteredUserName('');
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<div>
			{error && <ErrorModel errorTitle={error.title} errorMessage={error.message} onClick={errorHandler}/>}
		<Card className={styles.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor='username'>Username</label>
				<input id='username' type='text' value={enteredUserName} onChange={userNameChangeHandler}/>
				<label htmlFor='age'>Age in Years</label>
				<input id='age' type='number' value={enteredAge} onChange={ageChangeHandler}/>
				<Button type='submit'>Add User</Button>
			</form>
		</Card>
		</div>
	);
}

export default AddUser;