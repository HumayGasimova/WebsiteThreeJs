import React from 'react';
import List from "./list";
import Form from "./form";
import Post from "./posts";

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
        <div>
            <h2>API post</h2>
            <Post/>
        </div>
    </div>
   );
};

export default App