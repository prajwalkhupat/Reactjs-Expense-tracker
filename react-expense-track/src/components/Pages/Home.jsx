import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <>
        <h1>Welcome to Expense Tracker</h1>;
        <div>
          Your Profile is Incomplete
          <Link to='/completeProfile'>Complete now</Link>
        </div>
      </>
    );
}

export default Home