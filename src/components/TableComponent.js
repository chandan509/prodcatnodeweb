import React, { Component } from 'react'
import validCategories from '../constants/constants'
//import * as _ from 'loadash'
class TableComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            rows : []
        }        
    }
  
    componentDidMount(){
        const { data } = this.props;
        let rows = [], countObjRows = [];
        let countObj ={};

        let duplicateObj = {};
        data.forEach(obj => {
            let key,row;            
            for(key in obj){
                let bValue = validCategories.includes(key);
                if(bValue){
                    let dupKey = key+obj[key];
                    if(duplicateObj[dupKey] === undefined){
                        row = <tr><td>{key}</td><td>{obj[key]}</td></tr>;
                        //countObj[key] = countObj[key] == undefined?0:
                        //countObj[key] = countObj[key] != 0 ? countObj[key]+1:0;
                        
                        if( countObj[key] === undefined){
                            countObj[key] = 1;
                        }
                        else{
                            countObj[key] = countObj[key]+1;
                        }
                    }
                    duplicateObj[dupKey] = dupKey;                    
                }
            }             
            rows.push(row);
        });
        let key;
        for(key in countObj){
            countObjRows.push(<tr><td>{key}</td><td>{countObj[key]}</td></tr>);
        }
        this.setState({rows, countObjRows});
    }
    render() {

        const  { rows, countObjRows } = this.state;
        return (
        <div>
            <table>
                <tr>
                    <th>Category</th>
                    <th>Sub Category</th>
                </tr>
                {rows}
            </table>
            <br/>
            {countObjRows?<table>
                <tr>
                    <th>Category</th>
                    <th>Count</th>
                </tr>
                {countObjRows}
            </table>:""}
            
        </div>
        )
    }
}

export default TableComponent;
