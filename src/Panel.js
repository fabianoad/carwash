import React from 'react'
import axios from 'axios'

class Panel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result: [],
            msg: '',
        }
        this.handleOnclick = this.handleOnclick.bind(this)
    }

    handleOnclick(event) {
        event.preventDefault();
        document.getElementsByClassName('panelDiv')[0].value = ''
        axios.get('/cars')
        .then(results=> {
            document.getElementsByClassName('resultsDiv')[0].style.display = 'block'
            console.log(results)
               
                const ans = results.data
                if(ans.length === 0)
                    this.setState({msg: 'Cars not found'})
                else this.setState({result: ans})            
            
            
        })
        .catch(err=>console.log(err))

    }

    componentDidMount() {
        document.getElementsByClassName('resultsDiv')[0].style.display = 'none'
    }


    render() {

        return <div className="panelDiv">

                <button id="panelBtn" onClick={this.handleOnclick}>All Cars</button>
                <span>Total of cars: {this.props.total}</span>
                <div className="resultsDiv">
                    {this.state.msg}
                    {   
                        this.state.result.map((element,i) => {
                            return <div key={i}>
                                        Client: {element.client} <hr />
                                        Model: {element.model}<br />
                                        Make: {element.make}<br />
                                        Color: {element.color}<br />
                                        Km: {element.km}<br />
                                        E-mail: {element.email}<br />
                                        Phones:
                                       { 
                                           element.phone.map( (element, i) => {
                                            return <div key={i+1000}>#{i+1}&nbsp;{element}</div> 
                                            })
                                       }
                                        <hr /><br />
                                    </div>
                        })

                    }
                </div>
                <hr />
        </div>
    }
}

export default Panel