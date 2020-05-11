import React, {Component} from 'react';


class main extends React.Component {
    constructor(props) {
        super(props);
        this.genreList = localStorage.genre ? JSON.parse(localStorage.genre) : [];
        this.booksList = localStorage.book ? JSON.parse(localStorage.book) : [];

        let list = this.genreList.map(name => {
            return {
                show: false,
                name: name,
                list: this.booksList.filter(book => book.genres.some(genre => genre.name === name))
            }
        });
        this.state = {
            list: list
        };

        this.toggleShow = this.toggleShow.bind(this);
    }

    toggleShow(index) {
        this.state.list[index].show = !this.state.list[index].show;
        this.setState({list: this.state.list})
    }


    render() {
        return (
            <div>
                <ul>
                {
                    this.state.list.map((item, index) => {
                        return (
                            <li key={index}>
                                <div style={{cursor: 'pointer'}}  onClick={() => this.toggleShow(index)}>
                                    <span>{item.name || 'Без названия'}</span>
                                    { item.list.length > 0? <span> (есть книги)</span>: ''}
                                </div>
                                { !item.show || item.list.map((item,indexBook) => <ol key={indexBook}>{item.name}</ol>) }
                            </li>
                        )
                    })
                }
                </ul>
            </div>

        )
    }
}

export default main;

