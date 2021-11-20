import React from 'react';
import Card from '../UI/Card';
import styles from './UsersList.module.css';

function UsersList(props){
if(props.users.length>0)
return(
	<Card className={styles.users}>
	<ul>
		{props.users.map((user) => (
		<li key={Math.random().toString()}>{user.name} ({user.age} years old)</li>
		))}
	</ul>
	</Card>
);
else
return null;
}

export default UsersList;