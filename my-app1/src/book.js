import React, {Component} from 'react';


class book extends React.Component {
    constructor(props) {
        super(props);
        this.genreList = localStorage.genre ? JSON.parse(localStorage.genre) : [];
        this.bookList = localStorage.book ? JSON.parse(localStorage.book) : [];

        this.handleAdd = this.handleAdd.bind(this);
        this.editBook = this.editBook.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeNewBookGenre = this.handleChangeNewBookGenre.bind(this);
        this.handleChangeEditBookGenre = this.handleChangeEditBookGenre.bind(this);

        this.state = {
            editing: {
                id: false,
                name: '',
                genres: []
            },
            newBook: {
                name: '',
                genres: []
            }
        };
    }

    handleAdd(event) {
        event.preventDefault();
        this.bookList.push(this.state.newBook);
        localStorage.book = JSON.stringify(this.bookList);
        this.setState({newBook: {
                name: '',
                genres: []
            }})
    }

    editBook( id) {
        if (this.bookList[id]) {
            this.setState({editing: {
                    id: id,
                    name: this.bookList[id].name,
                    genres: this.bookList[id].genres,
                }
            });
        }
    }

    updateBook(e) {
        this.bookList[this.state.editing.id] = {
            name: this.state.editing.name,
            genres: this.state.editing.genres,
        };
        this.setState({editing: {
                name: '',
                genres: []
            }
        });
        localStorage.book = JSON.stringify(this.bookList);
    }

    handleChange(event) {
        this.setState({newBook: Object.assign(this.state.newBook,  { name: event.target.value})})
    }

    handleChangeNewBookGenre(event) {
        let checkedList = Object.values(
            document.querySelectorAll('input[name="newBook"]:checked')
        ).map(item => {
            return {
                id: item.dataset.id,
                name: this.genreList[item.dataset.id]
            }
        });

        this.setState({newBook: Object.assign(this.state.newBook,  { genres: checkedList})})
    }

    handleChangeEdit(event) {
        this.setState({editing: Object.assign(this.state.editing,  { name: event.target.value})});
    }

    handleChangeEditBookGenre(id) {
        let checkedList = Object.values(
            document.querySelectorAll(`input[name="editBook_${id}"]:checked`)
        ).map(item => {
            return {
                id: item.dataset.id,
                name: this.genreList[item.dataset.id]
            }
        });

        this.setState({editing: Object.assign(this.state.editing,  { genres: checkedList})})
    }


    render() {
        return (
            <div>
                <div>
                    <h5>Добавить книгу</h5>
                    <div>
                        <p>Название</p>
                        <input type='text' value={this.state.newBook.name} onChange={this.handleChange}/>
                        <p>Жанры</p>
                        <div>
                            {
                                this.genreList.map((item, id) => {
                                    return (
                                        <label key={id}>
                                            <input type='checkbox' name='newBook'
                                                   data-id={id}
                                                   onChange={this.handleChangeNewBookGenre}
                                            />
                                            {item}
                                        </label>
                                    )

                                })
                            }
                        </div>
                        <button onClick={(e) => this.handleAdd(e)}>Добавить</button>
                    </div>
                    <hr/>
                    <table>
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>Название</th>
                            <th>Жанры</th>
                            <th>Действие</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.bookList.map((item, id) => {
                                return (
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td width={'40%'}>
                                            {this.state.editing.id === id ?
                                                (
                                                    <input value={this.state.editing.name}
                                                           type='text'
                                                           onChange={(e) => this.handleChangeEdit(e)}
                                                    />
                                                ) :
                                                (
                                                    item.name
                                                )
                                            }
                                        </td>
                                        <td width={'40%'}>
                                            {this.state.editing.id === id ?
                                                (
                                                    this.genreList.map((gl, _id) => {
                                                        return (
                                                            <label key={_id}>
                                                                <input type='checkbox' name={`editBook_${id}`}
                                                                       data-id={_id}
                                                                       defaultChecked={!!item.genres.find(g => g.id == _id)}
                                                                       onChange={() => this.handleChangeEditBookGenre(id)}
                                                                />
                                                                {gl}
                                                            </label>
                                                        )

                                                    })
                                                ) :
                                                (
                                                    item.genres.map(item => item.name).join(', ')
                                                )
                                            }
                                        </td>
                                        <td>
                                            {this.state.editing.id === id ? (
                                                <button onClick={(e) => this.updateBook(e)}>save</button>
                                            ) : (
                                                <button onClick={() => this.editBook(id)}>edit</button>
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

export default book;
