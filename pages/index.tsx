import React from 'react';
import { Panel, Text, Button, H1, H2, Link as StyledLink} from '@bigcommerce/big-design';
import styles from "./style.module.css";
import { ReactElement } from 'react';
import Dashboard from './dashboard'; 
// import { StarIcon } from '@bigcommerce/big-design-icons';


class Index extends React.Component {
    render() {
        return (
            <Dashboard />
        );
    }
}
export default Index;

