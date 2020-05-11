import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// берем компонент поля (Field) и провайдер для формы (reduxForm)
import { Field, reduxForm, initialize } from 'redux-form';


class addgenre extends React.Component {
  onBtnClickHandler = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <form className='add'>
      <p>
                    Введите новый жанр, который необходимо добавить:
                </p>
        <input
          type='text'
          className='add__author'
          placeholder='Жанр'
        />
        <p>   
        <div><input type='text'/></div>
        </p>
        <button
          className='add__btn'
          onClick={this.onBtnClickHandler}>
          Добавить
        </button>
      </form>
    )
  }
}
export default addgenre;

ReactDOM.render(<div>
  <div><input type="text"/></div>
  <div><input type="text"/></div>
  <div/>
</div>, document.getElementById('root'));

