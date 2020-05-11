import React, {Component} from 'react';
/*class addbook extends React.Component {
  onBtnClickHandler = (e) => {
    e.preventDefault()

  }

  render() {
    return (
      <form className='add'>
      <p>
                    Выберите жанр книги
                </p>
        <input
          type='text'
          className='add__author'
          placeholder='Жанр'
        />
        <p>
                    Введите название книги
                </p>
        <p>   
        
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
*/
class LoggingButton extends React.Component {
  // Данный синтаксис гарантирует, что `this` привязан внутри handleClick.
  // Предупреждение: это *экспериментальный* синтаксис.
  handleClick = () => {
    console.log('this это:ввв', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Нажми на меня
      </button>
    );
    
  }
}
export default LoggingButton;

