import React, {Component} from "react";
import { Button, Modal } from "antd";
import "antd/dist/antd.css";
import Legend from "./legend.json";
import './ListLegend.css';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1visible: false,
      modal2visible: false,
    };
  }

  handleModal1 = (results) => {
    this.setState({
      modal1visible: true,
      name: results.name,
      title: results.title,
      desc: results.description,
      age: results.age,
      ability: results.ability,
      image: results.image,
    })
  }
  handleModal2 = () => {
    this.setState({
      modal2visible: true,
    })
  }

  render() {
    return (
      <div className="container">
        <div className="boxWhite">
          <center>
            <h1 className="m-0">LEGEND ON APEX</h1>
            <Button
            className="button ml-5 mr-5 rounded mb-2"
            onClick={() => {this.handleModal2()}}
            >
            About Me
            </Button>
          </center>
          {/* Modal 1 yang nampilin list data */}
          <Modal
            title="LIST DETAIL COMIC"
            centered
            visible={this.state.modal1visible}
            onOk={() => this.setState({ modal1visible: false })}
            onCancel={() => this.setState({ modal1visible: false })}
            width={500}
          >
            <div className="text-center">
              <img src={this.state.image} alt="cover comic"></img>
              <h3>{this.state.name}</h3>
              <p>Author: {this.state.title}</p>
            </div>
            <p>{this.state.desc}</p>
            <p>Age : {this.state.age}</p>
            <p>Ability : {this.state.ability}</p>
          </Modal>
          {/* Modal 2 yang nampilin about */}
          <Modal
            title="ABOUT ME"
            centered
            visible={this.state.modal2visible}
            onOk={() => this.setState({ modal2visible: false })}
            onCancel={() => this.setState({ modal2visible: false })}
            width={500}
          >
            <div className="text-center">
              <h3>Indra Kurniawan Santoso</h3>
            </div>
            <p>Umur&nbsp;: 21 Tahun</p>
            <p>TTL&nbsp;: Semarang, 20 April 1999</p>
            <p>Hobby&nbsp;: Renang</p>
            <p>Tujuan hidup&nbsp;: bahagiain ortu, iso golek duet dewe.</p>
            <p>instagram&nbsp;: @indrakurniawans</p>
            <p>twitter&nbsp;: @pappppoyy</p>
            <p>Store&nbsp;: @ndrksXstore</p>
          </Modal>
          <div className="container">
            <center>
            {Legend.map((results) => {
              return(
                <div className="card mb-3 text-center d-flex shadow" key={results.id}>
                  <div className="card-body text-center">
                    <img src={results.image} alt="Legend"></img>
                    <h3 className="card-title">{results.name}</h3> 
                  </div>
                  <button
                    className="button ml-5 mr-5 rounded mb-2"
                    onClick={() => this.handleModal1(results)}
                  >                  
                  show more detail
                  </button>
                </div>
              );
            })}
            </center>
          </div>
        </div>
      </div>
    );
  }
}