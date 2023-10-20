import React, { Component } from "react";

export default class NewShop extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: "",
            description: "",
            logo: null, // Store the selected logo file
        };
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value,
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value,
        });
    }

    onFileChange(e) {
        const logo = e.target.files[0];
        this.setState({ logo });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log("Name: " + this.state.name);
        console.log("Description: " + this.state.description);
        console.log("Logo:", this.state.logo);


        this.setState({
            name: "",
            description: "",
            logo: null,
        });
    }

    render() {
        return (
            <div className="container">
                <div className="col-lg-6">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="logo">Upload Logo:</label>
                            <input
                                type="file"
                                className="form-control-file"
                                id="logo"
                                accept=".jpg, .jpeg, .png" 
                                onChange={this.onFileChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                value={this.state.name}
                                onChange={this.onChangeName}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                            />
                        </div>

                        <br />
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() =>
                                this.setState({
                                    name: "",
                                    description: "",
                                    logo: null,
                                })
                            }
                        >
                            Cancel
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}
