import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import InputGroup from "../components/common/InputGroup";
import TextFieldGroup from "../components/common/TextFieldGroup";
import TextAreaFieldGroup from "../components/common/TextAreaFieldGroup";
import { createPost } from "../actions/postActions";

class Writing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            title: '',
            text: '',
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const postData = {
            name: this.state.name,
            title: this.state.title,
            text: this.state.text
        };
        this.props.createPost(postData, this.props.history);

    }
    render() {
        const { errors, displaySocialInputs } = this.state;

        return (
            <div className="writing">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">자유 게시판</h1>

                            <form onSubmit={this.onSubmit}>
                                <TextFieldGroup
                                    onChange={this.onChange}
                                    value={this.state.name}
                                    name="name"
                                    placeholder="Input your name"
                                    error={errors.name}
                                />
                                <TextFieldGroup
                                    onChange={this.onChange}
                                    value={this.state.title}
                                    name="title"
                                    placeholder="Input Title"
                                    error={errors.title}
                                />
                                <TextAreaFieldGroup
                                    onChange={this.onChange}
                                    value={this.state.text}
                                    name="text"
                                    placeholder="* Input Text"
                                    error={errors.text}
                                />
                                <input
                                    type="submit"
                                    value="Submit"
                                    className="btn btn-info btn-block mt-4"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Writing.propTypes = {
    posts: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    posts: state.posts,
    errors: state.errors
});

export default connect(mapStateToProps, { createPost })(withRouter(Writing));