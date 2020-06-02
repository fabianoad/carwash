import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddCarForm from './AddCarForm'
import Panel from './Panel'
import SearchBox from './SearchBox'
import axios from 'axios'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      search: '',
      foundClients: [],
      total: '',
      response: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleApp = this.handleApp.bind(this)
  }

  handleOnChange(e) {
    e.preventDefault()
    this.setState({search: e.target.value})
  }

  componentDidUpdate(props) {
    
    if(this.state.search.length === 2 &&
        this.state.foundClients.length === 0) {
      console.log('componentDidUpdate')
      axios.get('/search', {
        params: {
          client: this.state.search
        }
      })
      .then(result=> {
        this.setState({total: result.data.length})
        this.setState({foundClients: result.data})
        
      })
      .catch(err=> console.log(err))
    }

  }


  componentDidMount() {

    axios.get('/search')
    .then(result=> {
      console.log(result.data)
      this.setState({total: result.data.length})
      
    })
    .catch(err=> console.log(err))
  }
    

  handleApp(event) {
    event.preventDefault()
    this.setState({total: this.state.total + 1 })
     
    const model = event.target.model.value;
    const make = event.target.make.value;
    const km = event.target.km.value;
    const color = event.target.color.value;
    const phone1 = event.target.phone1.value;
    const phone2 = event.target.phone2.value;
    const email = event.target.email.value;
    const client = event.target.client.value;
    
    this.setState({
        response: 'Waiting for server response...'
    })
    axios.post('/addcar', {
        model: model,
        make: make,
        km: km,
        color: color,
        phone1: phone1,
        phone2: phone2,
        email: email,
        client: client
    })
    .then(result => {
    
        this.setState({
            response: 'Form has been sent successfully'
        })
    })
    .catch(err=>console.log(err))
      event.target.model.value = ''
    event.target.make.value = ''
    event.target.km.value = ''
    event.target.phone1.value  = ''
    event.target.phone2.value = ''
    event.target.email.value = ''
    event.target.client.value = ''
    event.target.color.value = ''

  }

  render() {
    console.log('rendering!')
    const filteredClients = this.state.foundClients.filter(car=> {
      return car.client.toLowerCase().includes(this.state.search.toLowerCase())
    })
    
    

    return <div className="AppMain">
            <div className="App">
    
              <img src={logo} className="App-logo" alt="logo" width="60px" height="60px" /> 
              <p>React Presents Joey's Car Wash</p>

        </div>
        <table>
          <tbody>
            <tr>
              <td><AddCarForm app={this.handleApp} response={this.state.response} /></td>
              <td><Panel total={this.state.total} /></td>
              <td><SearchBox onChangeSearch={this.handleOnChange} clients={filteredClients} /></td>
            </tr>
          </tbody>
        </table>
      
    </div>
  }  
}

export default App;
