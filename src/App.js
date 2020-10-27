import React from "react";
import Form from "./Form";
import Header from "./Header";
import "./App.css";

const data = [
  {
    label: "Please enter your name",
    type: "text",
    placeholder: "Please enter your name",
    name: "userName",
  },
  {
    label: "What would you like to report?",
    type: "textarea",
    placeholder: "Please explain the incident",
    name: "case",
  },
  {
    label: "What is the name of the officer in question?",
    type: "text",
    placeholder: "Enter the Officers name",
    name: "officer",
  },
  {
    label: "When was the date of the incident?",
    type: "date",
    name: "date",
  },
  {
    type: "checkbox",
    label: "Did you pay a bribe? (optional)",
    name: "bribed",
  },
  {
    label: "How much is the bribe that was paid? (optional)",
    type: "number",
    placeholder: "Enter the amount that was paid as bribe",
    name: "bribe",
  },
];

const datas = [
  {
    label: "Please enter your name",
    type: "text",
    placeholder: "Please enter your name",
    name: "clientName",
  },
  {
    label: "What would you like to report?",
    type: "textarea",
    placeholder: "Please explain the incident",
    name: "clientCase",
  },
  {
    label: "What contract dispute would you like to report?",
    type: "text",
    placeholder: "Enter dispute",
    name: "clientIssue",
  },
  {
    label: "When was the date of the incident?",
    type: "date",
    name: "clientDate",
  },
  {
    label: "Have you had any legal counsel prior to this (optional)",
    type: "text",
    placeholder: "Enter Yes or No",
    name: "legal-counsel",
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Police Brutality Form",
      clientInfo: data,
    };
    this.handleDisputesForm = this.handleDisputesForm.bind(this);
    this.handleBrutalityForm = this.handleBrutalityForm.bind(this);
  }
  handleDisputesForm() {
    this.setState({
      title: "Contract Dispute Form",
      clientInfo: datas,
    });
  }
  handleBrutalityForm() {
    this.setState({
      title: "Police Brutality Form",
      clientInfo: data,
    });
  }
  render() {
    return (
      <div className="App">
        <Header
          handleBrutalityForm={this.handleBrutalityForm}
          handleDisputesForm={this.handleDisputesForm}
        />
        <Form title={this.state.title} info={this.state.clientInfo} />
      </div>
    );
  }
}

export default App;
