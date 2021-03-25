import React, { Component } from "react";
import FAQService from "../Services/FAQService";
import Header from "./HeaderComponent";
import { Button, Card, Accordion } from "react-bootstrap";

export default class FAQComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queries: [],
    };
  }

  componentDidMount() {
    FAQService.getAllQueris().then((response) => {
      this.setState({ queries: response.data });
    });
  }

  render() {
    return (
      <div className="container">
        <Header title={"Frequently Asked Questions"} />
        {this.state.queries.map((query) => (
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="text" eventKey="0">
                  {query.question}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>{query.answer}</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        ))}
      </div>
    );
  }
}
