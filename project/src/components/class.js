import React from "react";



class WelcomeMessage extends React.Component{
    render(props){
        
        return(
           
            <table  >
               <tbody>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                </tr>
                <tr>
                    <td>{this.props.name1}</td>
                    <td>{this.props.age1}</td>
                    <td>{this.props.city1}</td>
                </tr>
                <tr>
                    <td>{this.props.name2}</td>
                    <td>{this.props.age2}</td>
                    <td>{this.props.city2}</td>
                </tr>
                </tbody>
            </table>
        )
    }

}

export default WelcomeMessage;
