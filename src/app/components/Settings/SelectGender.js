import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import ErrorOutline from 'material-ui/svg-icons/alert/error-outline';
import {List, ListItem} from 'material-ui/List';
import NavigateBefore from 'material-ui/svg-icons/image/navigate-before';

import PanelTop from '../PanelTop';
import NavigationBottom from '../NavigationBottom';

const styles = {

    leftCol: {
        lineHeight: '64px',
        color: '#ffffff',
        fontSize: '16px',
        marginTop: 0,
        marginLeft: 0
    },
    rightCol: {
        lineHeight: '64px',
        color: '#ffffff',
        fontSize: '16px',
        marginTop: 0,
        marginRight: 0,
    },
    titleStyle: {
        textAlign: 'center',
        fontSize: '20px'
    }
};

const topPanelTitle = <span style={styles.titleStyle}>Пол</span>;
const PanelTopColLeft = <IconButton href="/#/settings"><NavigateBefore /></IconButton>;
const PanelTopColRight = <div style={{width: 40}}></div>;

export default class selectGender extends React.Component{

    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){

        return (
            <div>

                <PanelTop title={topPanelTitle} colLeft={PanelTopColLeft} colRight={PanelTopColRight} />

                <div className="wrap-content">
                    <List className="select-list">
                        <ListItem primaryText="Mужской" className="active"/>
                        <ListItem primaryText="Женский" />
                    </List>
                </div>

                <NavigationBottom active={2} />
            </div>
        )
    }
}