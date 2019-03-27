import React from 'react';
import List from "./list";
import Form from "./form";

const App = () => {
   return( 
   <div>
        <div>
            <h2>Articles</h2>
            <List/>
        </div>
        <div>
            <h2>Add a new article</h2>
            <Form/>
        </div>
    </div>
   );
};

export default App