import React, {useState} from 'react';
import Menu from './Containers/Menu';
import Categories from './Containers/Categories';
import items from './Data/data';


const AllCategories = ['All', ... new Set(items.map((item) => item.category))]


function App() {
    const [categories, setCategories] = useState(AllCategories)
    const [menuItems, setMenuItems] = useState(items)

    const filterItems = (category) => {
        if (category === "All") {
            setMenuItems(items)

        } else {
            const newItems = items.filter((item) => item.category === category)
            setMenuItems((newItems))
        }
    }


    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>Our Menu</h2>
                    <div className="underline"/>
                </div>
                <Categories filterItems={filterItems} categories={categories}/>
                <Menu items={menuItems}/>
            </section>


        </main>

    );
}

export default App;
