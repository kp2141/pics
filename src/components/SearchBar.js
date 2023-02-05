import {useState} from 'react';
import './SearchBar.css';
function SearchBar({onSubmit}) {
    // const handleClick = () =>{
    //     onSubmit('cars');
    // };
    const [term,setTerm] = useState("");
    const handleChange = (event) =>{
        setTerm(event.target.value);
        
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(term);
        
    }

    return (
        <div className='search-bar'>
            <form onSubmit = {handleFormSubmit} action="">
                <label>Enter Search Term</label>
                <input value = {term} onChange ={handleChange} type="text" />
            </form>
        </div>
    );
  }
  
  export default SearchBar;