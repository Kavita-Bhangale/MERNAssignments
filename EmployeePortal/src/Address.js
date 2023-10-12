import './Address.css';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';


const Address = () => {
    const value = useContext(ThemeContext);
    console.log(value);

    return(
        <div className={value.theme}>
            <p>Address Line 1 : {value.employeeData.add1}</p>
            <p>Address Line 1 : {value.employeeData.add2}</p>
            <p>City : {value.employeeData.city}</p>
        </div>
    )
}

export default Address;