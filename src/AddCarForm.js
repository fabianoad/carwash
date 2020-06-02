import React from 'react'
import axios from 'axios'

class AddCarForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            response: ''
        }
        
    }


    
/*
    componentDidUpdate(props, prevProps) {
        const inp = document.querySelector('input')
        inp.onmouseenter = () => {
            this.setState({response: ''})
        }
    }
*/
    render() {

        return (

                    <div className="addCarFormDiv">
                        
                        <form onSubmit={this.props.app} method="POST" encType="application/json">
                            
                            <label htmlFor="modelId">Model: </label>
                            <input type="text" id="modelId" name="model" />

                            <label htmlFor="makeId">Make: </label>
                            <input type="text" id="makeId" name="make" />

                            <label htmlFor="kmId">Km: </label>
                            <input type="text" id="kmId" name="km" />
                            
                            <label htmlFor="colorId">Color: </label>
                            <input type="text" id="colorId" name="color" />

                            <label htmlFor="phoneId1">Phone: </label>
                            <input type="text" id="phoneId1" name="phone1" placeholder="phone #1" />
                            <input type="text" id="phoneId2" name="phone2" placeholder="phone #2" />

                            <label htmlFor="emailId">Email: </label>
                            <input type="text" id="emailId" name="email" />

                            <label htmlFor="clientId">Client: </label>
                            <input type="text" id="clientId" name="client" />

                            <input type="submit" value="Add Car" />

                        </form>
                        {this.props.response}
                    </div>

        )

    }


}

export default AddCarForm