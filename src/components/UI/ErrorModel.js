import React from 'react';
import Card from './Card';
import Button from './Button';
import styles from './ErrorModel.module.css';

function ErrorModel(props){
	return (
		<div>
			<div className={styles.backdrop} onClick={props.onClick}/>
	<Card className={styles.modal}>
		<header className={styles.header}>
			<h2 >{props.errorTitle}</h2>
		</header>
		<div className={styles.content}>
			<p>{props.errorMessage}</p>
		</div>
		<footer className={styles.actions}>
			<Button onClick={props.onClick}>Okay</Button>
		</footer>
	</Card>
	</div>
	)}
export default ErrorModel;