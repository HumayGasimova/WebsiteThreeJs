import React from 'react';
import {
    connect
} from 'react-redux';

const mapStateToProps = state => {
    return {
        articles: state.articles
    };
};

const ConnectedList = ({articles}) => (
    <div>
       
    </div>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;