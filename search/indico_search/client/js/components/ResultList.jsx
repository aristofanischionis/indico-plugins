import React from 'react';
import PropTypes from 'prop-types';
import {ResultItem} from './ResultItem'
import { List } from 'semantic-ui-react'
// take the state from the store

export default ResultList = () => {
    const list = state.results.map((item) =>
        <List.Item>
            <List.Content>
                <List.Header as='a'>{item.title}</List.Header>
                <List.Description as='a'>{item.description}</List.Description>
            </List.Content>
        </List.Item>
    );
    return (
        <List divided relaxed>
            {list}
        </List>
    )
}
