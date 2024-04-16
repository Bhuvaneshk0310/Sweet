import React, { useState } from 'react';
import "./Search.css";

const Search = () => {
  // Declare state variables
  const [searchQuery, setSearchQuery] = useState('');
  
  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toUpperCase());
  };
  const items = [
    { name: 'Adele', imageUrl: 'adele.jpg' },
    { name: 'Agnes', imageUrl: 'agnes.jpg' },
    { name: 'Bdele', imageUrl: 'adele.jpg' },
    { name: 'Bgnes', imageUrl: 'agnes.jpg' },
    { name: 'Cdele', imageUrl: 'adele.jpg' },
    { name: 'Cgnes', imageUrl: 'agnes.jpg' },
    // Add more items as needed
  ];
  
 
  
  return (
    <div>
      <form className="d-flex" role="search">
        <input  className="se1"
          type="text"
          onChange={handleSearchChange}
          placeholder="    Search for sweets"></input><button type = "submit" className = "search-btn btn" id = "search-btn">
          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xNS44NTMgMTYuNTZjLTEuNjgzIDEuNTE3LTMuOTExIDIuNDQtNi4zNTMgMi40NC01LjI0MyAwLTkuNS00LjI1Ny05LjUtOS41czQuMjU3LTkuNSA5LjUtOS41IDkuNSA0LjI1NyA5LjUgOS41YzAgMi40NDItLjkyMyA0LjY3LTIuNDQgNi4zNTNsNy40NCA3LjQ0LS43MDcuNzA3LTcuNDQtNy40NHptLTYuMzUzLTE1LjU2YzQuNjkxIDAgOC41IDMuODA5IDguNSA4LjVzLTMuODA5IDguNS04LjUgOC41LTguNS0zLjgwOS04LjUtOC41IDMuODA5LTguNSA4LjUtOC41eiIvPjwvc3ZnPg=="/>
        </button>
          
       
         
        
      </form>
      <ul className='List' >
        <p className='items'>Your Search Results:</p>
    {items.map((item, index) => (
      <li key={index} style={{ display: item.name.toUpperCase().includes(searchQuery) ? '' : 'none' }}>
        <img src={item.imageUrl} alt={item.name} />
        {item.name}
      </li>
    ))}
  </ul>
    </div>
  );
};

export default Search;





/*
import React, { useState } from 'react';

const Search = () => {
  // Declare state variables
  const [searchQuery, setSearchQuery] = useState('');
  
  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toUpperCase());
  };
  
  return (
    <div>
      <form className="d-flex" role="search">
        <input
          type="text"
          className="se1" 
          onChange={handleSearchChange}
          placeholder="Search Something Sweets"
        />
      </form>
      <ul className="Sg">
        {names.filter(name => name.toUpperCase().includes(searchQuery)).map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

// Array of names
const names = [
  "Adele", "Agnes", "Billy", "Bob", "Calvin", "Camille", "Christina", "Cindy",
  "David", "Davis", "Ethan", "Eric", "Elsa", "Frank", "Fiona", "George", "Gerald",
  "Galvin", "Harry", "Helen", "Horacio", "Isabelle", "Irina", "Iker", "John", "Joe",
  "Jane", "James", "Katherine", "Karen", "Lucas", "Laura", "Michael", "Marry", "Natalia",
  "Norman", "Ortiz", "Omar", "Pascal", "Penny"
];

export default Search;


*/




















/*
import React, { useState } from 'react';
import './Search.css'
function Search() {
  // Sample list of items
  const [items] = useState([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
    { id: 4, name: 'Mango' },
  ]);

  // State variables for search query and filtered items
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  // Function to handle changes in the search input field
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    filterItems(e.target.value);
  };

  // Function to filter items based on search query
  const filterItems = (query) => {
    const filtered = items.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    
       <div>
      <p>This is search page</p>
      <form class="d-flex" role="search">
        <input class="se1" type="search" placeholder="Search Somethink Sweets"  value={searchQuery}
        onChange={handleSearchChange} aria-label="Search"/>
        <span className='Sg'></span>

      </form>

      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;


*/