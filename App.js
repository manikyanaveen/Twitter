import React ,{ Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ListItems from './Components/Items';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
library.add(faTrash)

class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      heading: "Twitter",
      items:[],
      dates: [],
      currentItem:{
        text:'',
        key:''
      },
      currentdate:{
        date: ''
      }
    }
    this.addTweet = this.addTweet.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleDate=this.handleDate.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  addTweet(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    const newdate = this.state.currentdate;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
      const dates = [...this.state.dates, newdate];

    this.setState({
      items: items,
      dates: dates,
      currentItem:{
        text:'',
        key:''
      },
      currentdate: {

        date:''
      }
    })
    }
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  handleDate(e){
    this.setState({
      currentItem:{
        date: e.target.value,
      }
    })
  }
  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })

  }
  setUpdate(text,key){
    console.log("items:"+this.state.items);
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        console.log(item.key +"    "+key)
        item.text= text;
      }
    })
    this.setState({
      items: items
    })
    
   
  }
 render(){
  return (
    <div className="App">
      <Navbar heading ={this.state.heading}></Navbar> 
        <form id="Tweet-Form" onSubmit={this.addTweet}>
          <input className = "TweetBox" type="text" placeholder="Tweet Here" size="200" value= {this.state.currentItem.text} onChange={this.handleInput}></input>
          <input type="datetime-local" id="tweetdate" name="date" min = "2020-09-10" value = {this.state.currentItem.date} onChange={this.handleDate}></input>

          <button type="submit">Tweet</button>
        </form>
        <p>{this.state.items.text}</p>
        
          <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
          <Footer></Footer>
    </div>
  );
 }
}


export default App;
