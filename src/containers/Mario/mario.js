import React from 'react';
import {connect} from 'react-redux';


const f = 'https://res.cloudinary.com/payjo-in/image/upload/c_scale,w_24/v1502452864/mushroom-512_f9ma5t.png';
const m = 'http://res.cloudinary.com/payjo-in/image/upload/c_scale,w_24/v1502452976/1200x630bb_vokqee.jpg';
const boxSize = 60;


class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {foodCoordinates: [], marioCoordinate: {}, count : 0};
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
    let row = 10, column = 10;
    let foodCount = row*column < 10 ? 2 : getRandom(4, 8);

    let foodCoordinates = getFoodCoordinate(foodCount, row, column);
    let marioCoordinate = getFoodCoordinate(1, row, column);
    this.setState({foodCoordinates : foodCoordinates, marioCoordinate : marioCoordinate[0]});

  }

  handleKeyDown(e) {

    const {marioCoordinate , foodCoordinates, count} = this.state;
    const {x, y} = marioCoordinate;
    let row = 10, column = 10;

    switch (e.keyCode) {

      case 37 : {

        if(y === 0){
          this.setState({marioCoordinate : {x : x , y :  column - 1 }});

        }else{
          this.setState({marioCoordinate : {x : x , y :  y - 1}});
        }


      }
        break;
      case 38 : {
        if( x === 0){
          this.setState({marioCoordinate : {x : row -1,  y :  y}});
        }else {
          this.setState({marioCoordinate: {x: x - 1, y: y}});
        }
      }
        break;
      case 39 : {
        if(y === column -1){

          this.setState({marioCoordinate : {x : x , y :  0}});
        }else{

          this.setState({marioCoordinate : {x : x , y :  y+1}});
      }

      }
      break;

      case 40 : {
        if( x === row -1) {
          this.setState({marioCoordinate: {x: 0, y: y}});
        }else{
          this.setState({marioCoordinate: {x: x + 1, y: y}});
        }

      }
      break;
    }

    let newFoods = marioEatFood(foodCoordinates, marioCoordinate);
    this.setState({foodCoordinates: newFoods, count : count+1});

    setTimeout(() =>{
      this.handleKeyDown(e);
    }, 300);


  }


  render() {

    let row = 10, column = 10;
    let {foodCoordinates, marioCoordinate} = this.state;


    let box = <div className="block"/>;
    let rows = [...Array(row).keys()].map(() => {
      return box;
    });

    let marioBox = [...Array(column).keys()].map(() => {

      return <div className=""> {rows} </div>;
    });



    let mario = <div style={getCoordinate(marioCoordinate.x, marioCoordinate.y)} className="mario"><img src={m} alt=""/></div>;

    let foodArray = [];

    if(foodCoordinates.length > 0){

      foodArray =   foodCoordinates.map((item, i) => {

        let style = getCoordinate(item.x, item.y);

        return (
           <div style={style} className="food" key={i}><img src={f} alt=""/></div>
        );

      });

    }

    let playGroundStyle = getSize(row, column);

    return (
      <div className="container">


        <div className="playground" style={playGroundStyle}>
          {marioBox}
          {mario}
          {foodArray}
        </div>

      </div>
    );
  }

}


function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Main);


function getSize(row, column) {
  return {
    height: boxSize * row + "px",
    width: boxSize * column + "px"

  };

}

function getCoordinate(row, column) {
  return {
    transform: "translate("+boxSize * column + "px , "+ boxSize * row + "px )"
  };

}


// (int , int)  --> int
function getRandom(min, max) {
  return Math.floor((Math.random() * max) + min);

}


// (int , int, int)  --> array
function getFoodCoordinate(count, row, col) {

  let foodArray = [];

  while (foodArray.length < count) {
    let co = {x: getRandom(0, col), y: getRandom(0, row)};
    foodArray.push(co);

  }
  return foodArray;

}


function marioEatFood(foods, mario){

  let newFoods = [];


  if(foods.length > 0) {
    foods.forEach(item => {
      if (item.x !== mario.x || item.y !== mario.y) {
        newFoods.push(item);
      }
    });
  }

  return newFoods;

}
