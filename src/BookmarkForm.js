import React from 'react';

class BookmarkForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      url : "",
      title : "",
      tag : ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event, type){
    this.setState({[type]: event.target.value})
  }
  handleSubmit(event){
    event.preventDefault()
    this.props.handleReceiveData({url: this.state.url, title: this.state.title, tag: this.state.tag})
    this.setState({url: "", title: "", tag: ""})
  }
  render(){

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  };

    return(
      <form style={formStyle} action="">
        <label htmlFor="URL">URL</label>
          <input id="URL" type="text" value={this.state.url} onChange={(event) => this.handleChange(event, 'url')}/>
        <label htmlFor="title">Title</label>
          <input id="title" type="text" value={this.state.title} onChange={(event) => this.handleChange(event, 'title')} />
        <label htmlFor="tag">Tag</label>
          <input id="tag" type="text" value={this.state.tag} onChange={(event) => this.handleChange(event, 'tag')}/>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}

export default BookmarkForm;


// render(){
//  This or inline (below)
// const formStyle = {
//   display: 'flex',
//   flexDirection: 'column'
// };
//
//   return(
//     <form style={{display: 'flex', flexDirection: 'column'}} action="">
//     <label htmlFor="URL">URL</label>
//     <input id="URL" type="text"/>
//     <label htmlFor="title">Title</label>
//     <input id="title" type="text"/>
//     <label htmlFor="tag">Tag</label>
//     <input id="tag" type="text"/>
//     <button>Submit</button>
//     </form>
//   )
// }
// }
//
// export default UserForm;


//style={{display: 'flex', flexDirection: 'column'}}

//onChange={(e) => this.handleChange(e, 'tag')}/>
