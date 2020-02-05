import React from "react";
import countries from "../data/countries";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      repeatPassword: "",
      countries: countries,
      country: "1",
      gender: "male",
      agree: true,
      avatar: null,
      age: 16,
      errors: {}
    };
  }

  onChange = e => {
    // console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onChangeAgree = e => {
    this.setState({
      [e.target.name]: e.target.checked
    });
  };

  onChangeAvatar = e => {
    const reader = new FileReader();
    reader.onload = e => {
      this.setState({
        avatar: e.target.result
      });
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  getOptionItems = items => {
    return items.map(item => (
      <option value={item.id} key={item.id}>
        {item.name}
      </option>
    ));
  };

  incrementAge = () => {
    this.setState(
      (prevState, prevProps) => ({
        age: prevState.age + 1
      }),
      () => {
        this.setState({
          errors: {
            age: this.state.age < 18 ? "Must by 18+" : null
          }
        });
      }
    );
  };

  decrementAge = () => {
    this.setState(
      (prevState, prevProps) => ({
        age: prevState.age - 1
      }),
      () => {
        this.setState({
          errors: {
            age: this.state.age < 18 ? "Must by 18+" : null
          }
        });
      }
    );
  };

  onSubmit = e => {
    e.preventDefault();
    const errors = {};
    if (this.state.username.length < 5) {
      errors.username = "Must be 5+ characters";
    }
    if (this.state.password.length < 3) {
      errors.password = "Must be 3+ characters";
    }
    if (this.state.password !== this.state.repeatPassword) {
      errors.repeatPassword = "Must be same as password";
    }
    if (this.state.age < 18) {
      errors.age = "Must by 18+";
    }

    if (Object.keys(errors).length) {
      this.setState({
        errors: errors
      });
    } else {
      this.setState({
        errors: errors
      });
      console.log("Submit", this.state);
    }
  };

  render() {
    return (
      <div className="form-container card">
        <form className="form card-body">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" className="form-control" placeholder="Enter username" value={this.state.username} onChange={this.onChange} />
            {this.state.errors.username ? <div className="invalid-feedback">{this.state.errors.username}</div> : null}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="text" name="password" id="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.onChange} />
            {this.state.errors.password ? <div className="invalid-feedback">{this.state.errors.password}</div> : null}
          </div>
          <div className="form-group">
            <label htmlFor="repeatPassword">Repeat password</label>
            <input type="text" name="repeatPassword" id="repeatPassword" className="form-control" placeholder="Enter repeat password" value={this.state.repeatPassword} onChange={this.onChange} />
            {this.state.errors.repeatPassword ? <div className="invalid-feedback">{this.state.errors.repeatPassword}</div> : null}
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <select id="country" className="form-control" name="country" value={this.state.country} onChange={this.onChange}>
              {this.getOptionItems(this.state.countries)}
            </select>
          </div>
          <fieldset className="form-group">
            <div>Gender</div>
            <div className="form-check">
              <input className="form-check-input" type="radio" id="male" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.onChange} />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" id="female" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.onChange} />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
          </fieldset>
          <div className="form-group">
            <label htmlFor="avatar">Avatar</label>
            <input type="file" className="form-control-file" id="avatar" onChange={this.onChangeAvatar} />
          </div>
          <div className="form-group">
            <div>
              <label>Age</label>
            </div>
            <div className="btn-group">
              <button className="btn btn-secondary" type="button" onClick={this.decrementAge}>
                -
              </button>
              <input type="number" className="form-control" placeholder="Enter age" name="age" value={this.state.age} onChange={this.onChange} />
              <button className="btn btn-secondary" type="button" onClick={this.incrementAge}>
                +
              </button>
            </div>
            {this.state.errors.age ? <div className="invalid-feedback">{this.state.errors.age}</div> : null}
          </div>
          <div className="form-check mb-2">
            <input className="form-check-input" type="checkbox" id="agree" name="agree" checked={this.state.agree} value={this.state.agree} onChange={this.onChangeAgree} />
            <label className="form-check-label" htmlFor="agree">
              Agree
            </label>
          </div>
          <button type="submit" className="btn btn-primary w-100" onClick={this.onSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
