import React, { useState } from 'react';
import data from './Data/data';
import List from './Containers/List';
function App() {
  const [people, setPeople] = useState(data)
  return <main>
    <section className="container">
      <h3>
        {people.length} Birthdays today
        <List people ={people} />
        <button onClick={() => setPeople([])}>
          Clear All
        </button>
      </h3>
    </section>

  </main>;
}

export default App;
