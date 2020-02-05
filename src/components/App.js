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
      agree: true
    };
  }

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  onChange = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onChangeAgree = e => {
    this.setState({
      [e.target.name]: e.target.checked
    });
  };

  getOptionItems = items => {
    return items.map(item => (
      <option value={item.id} key={item.id}>
        {item.name}
      </option>
    ));
  };

  render() {
    return (
      <div className="form-container card">
        <form className="form card-body">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" className="form-control" placeholder="Enter username" value={this.state.username} onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="text" name="password" id="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="repeatPassword">Repeat password</label>
            <input type="text" name="repeatPassword" id="repeatPassword" className="form-control" placeholder="Enter repeat password" value={this.state.repeatPassword} onChange={this.onChange} />
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
          <fieldset className="form-check">
            <input className="form-check-input" type="checkbox" id="agree" name="agree" checked={this.state.agree} value={this.state.agree} onChange={this.onChangeAgree} />
            <label className="form-check-label" htmlFor="agree">
              Agree
            </label>
          </fieldset>
          <button type="submit" className="btn btn-primary w-100" onClick={this.onSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
