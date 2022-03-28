import { Component } from 'react';
import './App.css';
import PhoneForm from './components/PhoneForm';

export default class App extends Component{
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: '홍길동',
        phone: '010-0000-0000'
      },
      {
        id: 0,
        name: '김경성',
        phone: '010-663-5407'
      },
    ]
  }

  handleCreate = (data) => {
    console.log(data);
    const {information} = this.state;
    this.setState({
      information: information.concat({id: this.id++, ...data})
    })
  }
  render(){
    const {information} = this.state;
    return(
      <div>
        <PhoneForm 
          onCreate={this.handleCreate}
        />
        {JSON.stringify(information)}
      </div>
    );
  }
}
