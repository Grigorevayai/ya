import React, {Component} from 'react';


class genre extends React.Component {
    constructor(props) {
        super(props);
        this.genreList = localStorage.genre ? JSON.parse(localStorage.genre) : [];

        this.handleAdd = this.handleAdd.bind(this);
        this.editGenre = this.editGenre.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            editing: {
                id: false,
                value: ''
            },
            newGenre: ''
        };
    }

    handleAdd(event) {
        event.preventDefault();
        this.genreList.push(this.state.newGenre);
        localStorage.genre = JSON.stringify(this.genreList);
        this.setState({newGenre: ''})
    }

    editGenre( id) {
        if (this.genreList[id]) {
            this.setState({editing: {
                    id: id,
                    value: this.genreList[id]
                }
            });
        }
    }

    updateGenre(e) {
        this.genreList[this.state.editing.id] = this.state.editing.value;
        this.setState({editing: {
                id: false,
                value: ''
            }
        });
        localStorage.genre = JSON.stringify(this.genreList);
    }

    handleChange(event) {
        this.setState({newGenre: event.target.value})
    }

    handleChangeEdit(event) {
        this.setState({editing: Object.assign(this.state.editing,  { value: event.target.value})});
    }


    render() {
        return (
            <div>
                <div>
                    <h5>Добавить жанр</h5>
                    <div>
                        <input type='text' value={this.state.newGenre} onChange={this.handleChange}/>
                        <button onClick={(e) => this.handleAdd(e)}>Добавить</button>
                    </div>
                    <hr/>
                    <table>
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>Название</th>
                            <th>Действие</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.genreList.map((item, id) => {
                                return (
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td width={'60%'}>
                                            {this.state.editing.id === id ?
                                                (
                                                    <input value={this.state.editing.value}
                                                           type='text'
                                                           onChange={(e) => this.handleChangeEdit(e)}
                                                    />
                                                ) :
                                                (
                                                    item
                                                )
                                            }
                                        </td>
                                        <td>
                                            {this.state.editing.id === id ? (
                                                <button onClick={(e) => this.updateGenre(e)}>save</button>
                                            ) : (
                                                <button onClick={() => this.editGenre(id)}>edit</button>
                                            )}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>

                </div>
            </div>

        )
    }
}

export default genre;
