import React , {Component} from 'react';
import './ContactForm.css'
import axios from 'axios';


class ContactForm extends Component {

  state = {
      email: '',
      message: '',
      responese: '',
      loading: false
  }

  postDataHandler = (event) => {
      event.preventDefault();
      this.setState({loading: true});
      const post = {
          email: this.state.email,
          message: this.state.messagee
      }
    axios.post('https://jsonplaceholder.typicode.com/posts', post)
        .then((res) => {
          console.log(res);
          this.setState({loading: false});
        });

      // axios.delete('https://jsonplaceholder.typicode.com/posts', post)
      //     .then((res) => {
      //         console.log(res);
      //     });
  }

  render() {
   return (
      <div action="/action_page.php" className="formContact">
         <form onSubmit={this.postDataHandler}>
          <div className="form-group">
              <label htmlFor="email"> ایمیل </label>
              <input value={this.state.email} onChange={(event) => this.setState({email: event.target.value})} type="email" className="form-control" id="email" name="email"/>
          </div>
          <div className="form-group">
              <label htmlFor="message"> پیام </label>
              <textarea value={this.state.message} onChange={(event) => this.setState({message: event.target.value})} type="text" className="form-control" id="message" name="message"/>
          </div>
          <button hidden={!this.state.loading} onClick={this.postDataHandler} type="submit" className="btn btn-primary">ارسال</button>
          <button hidden={this.state.loading}  type="button" className="btn btn-primary"><i className="fa fa-spinner" aria-hidden="true"></i></button>
          <p>{this.state.responese}</p>
         </form>
      </div>

   )
  }
};

export default ContactForm;