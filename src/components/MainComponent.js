import React, { Component } from 'react'
import TableComponent from './TableComponent'

class MainComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: undefined
        }
        this.inputData = React.createRef();
        this.processData = this.processData.bind(this)
    }

    processData(){
        let data = this.inputData.current.value;
        //data = JSON.stringify(data);
        try{
            data = JSON.parse(data);

        }
        catch(e){
            console.log("Invalid JSON format");
            this.setState({error: "Invalid JSON format"}); 
            return;           
        }
        this.setState({data, error:undefined});
    }
    render() {

        const { error, data } = this.state;
        return (
        <div>
            {'Copy JSON here and click submit'}
            <br/>
            <textarea cols="50" rows="15" ref = {this.inputData}></textarea><br/>
            {error?error: data?"Valid JSON":""}<br/>
            <input type="button" value="Submit" onClick={this.processData}></input>
            {!error && data ?<TableComponent data={data}></TableComponent>:""}
            
        </div>
        )
    }
}

export default MainComponent;
