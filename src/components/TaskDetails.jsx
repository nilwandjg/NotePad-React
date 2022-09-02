import React from 'react';
import { useHistory, useParams } from "react-router-dom";


import Button from './Button';

import "./TaskDetails.css";

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }

    return (
        <>
            <div className='back-button-container'>
                <Button oncliCK={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className='task-details-container'>
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, qui. Libero, provident quibusdam. Dicta laboriosam exercitationem voluptas? Repellendus et minima nemo accusamus, praesentium mollitia similique iure ipsum magnam quam molestiae.
                </p>
            </div>
        </>
    );
};

export default TaskDetails;