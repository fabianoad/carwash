import React from 'react'


class SearchBox extends React.Component {
    

render() {
    return <div className="searchBoxDiv">

                <input type="searchbox" id="searchId" placeholder="client search" onChange={this.props.onChangeSearch} />
                {

                    this.props.clients.map((client, i) => {

                        return <div key={i}><hr />
                                            Client: {client.client}<br />
                                            Model: {client.model}<br />
                                            Make: {client.make}<br />
                                            Km: {client.km}<br />
                                            E-mail: {client.email}<br /><br />
                                           </div>
                                           


                    })
                    

                }
                <hr />
    </div> 
}


}
export default SearchBox