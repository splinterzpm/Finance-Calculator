import React, { Component } from 'react';

import '../../scss/Category.scss';

interface Props {
    categories: Array<string>
};

interface State {
    id: number;
    categoryName:string;
};

class AddCategory extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            id: 0,
            categoryName: ''
        };
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ [e.target.name]: e.target.value }  as React.ComponentState);
    }

    handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const {id, categoryName} = this.state;
        if (categoryName !='') {
            this.props.categories.push(categoryName);
            this.setState({id: id+1, categoryName: ''});
        }
        else alert ('Add the appropriate name of category');
    }

    render() {
        return (
            <div className="add-category">
                <form>
                    <div className="add-category__span">
                        <span> Add Category </span>
                    </div>
    
                    <div>
                        <div className="input-field col s4">
                            <input placeholder="Category Name" type="text" 
                                className="validate add-category__name"  
                                name="categoryName" 
                                value={this.state.categoryName} 
                                onChange={this.handleChange} />
                        </div>

                        <button className="waves-effect waves-light btn blue-grey darken-2"  
                            onClick={this.handleSubmit}> Add </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddCategory;