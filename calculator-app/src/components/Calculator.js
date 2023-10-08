import React, { useState } from 'react'
import Display from './Display';
import Button from './Button';
import '../components/app.css'; 

const Calculator = () => {
    const [expression,setExpression] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
                setResult(eval(expression) || '');

            }catch (error) {
                setResult('Error');
            }
            setExpression('');
        }else if (value === 'C') {
            setExpression('');
            setResult('');

        } else{
            setExpression((prevExpression) => prevExpression + value);
        }
    };


    const buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'];

    return(
        <div className='calculator'>
           <Display expression={expression} result={result} />
          <div className="buttons">
             {buttons.map((button, index) => (
                <Button key={index} handleClick={() => handleButtonClick(button)}>
                 {button}
                </Button>
                ))}
            </div>
        </div>
    );

};




export default Calculator;