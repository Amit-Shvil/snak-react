import React, { useEffect, useState } from "react";
import { SoundManager } from "../../soundManager";
import { Util } from "../../util";
import { GameView } from "./GameView";
import {QuestionsModal} from "./../question/QuestionsModal";
export class Dir {
    static LEFT: string = 'left';
    static RIGHT: string= 'right';
    static DOWON: string= 'down';
    static UP: string= 'UP';
};
export type Food  = {
    colm: number,
    row: number,
    value: string
}
export type SnakePart  = {
    colm: number,
    row: number,
    value: string,
    dir: string
}

const numOfFood: number = 8;
const bordSize: number = 17;

export const Game = ({onGameEnd}: any) =>  {
    const soundMgr: SoundManager = new SoundManager();
    let [gameInterval, setGameInterval] = useState<any>();
    let [score, setScore] = useState<number>(0);
    let [snake, setSnake] = useState<Array<SnakePart>>([]);
    let [dir, setDir] = useState<string>(Dir.RIGHT);
    let [foods, setFoods] = useState<Array<Food>>([]);
    let [showQuestion, setShowQuestion] = useState<boolean>(false);
    useEffect(() => {
       init(); 
    },[]);

    const restart = () => {
        setScore(0);
        setSnake([]);
        setDir( Dir.RIGHT);
        setFoods([]);
        gameOver();
        init();
    }
      
    const init = () => {
        soundMgr.startBg();
        createSnake();
        initFood();
        startGame();
        draw();
    }
    
    const initFood = () => {
        for (let index = 0; index < numOfFood; index++) {
          createFood();
        }
        setFoods(foods);
      }
    
      const startGame = () =>  {
        startGameLoop();
        document.onkeydown = (e) => onKey(e);
      }
    
      const onKey = (e: any) => {
        console.log('set dit', e);
        //e = e || window.event;
        if (e.keyCode === 38 && dir !== Dir.DOWON) {
          dir = Dir.UP;
        } else if (e.keyCode === 40 && dir !== Dir.UP) {
          dir = Dir.DOWON;
        } else if (e.keyCode === 37 && dir !== Dir.RIGHT) {
          dir = Dir.LEFT;
        } else if (e.keyCode ===39 && dir !== Dir.LEFT) {
          dir = Dir.RIGHT;
        }
        setDir(dir);
        console.log('set dit', dir);
      }
      
      const stopGameLoop = () => {
        clearInterval(gameInterval);
      }

      const startGameLoop = () => {
        gameInterval= setInterval(() => onFrame(), 300);
        setGameInterval(gameInterval);
      }
    
      const haltGame = () => {
        stopGameLoop();
        //soundMgr.muteBg();
        setShowQuestion(true);
      }

      const resumeGame = () => {
        startGameLoop();
        document.onkeydown = (e) => onKey(e);
        //soundMgr.unMuteBg();
      }
      const createFood = () => {
        let pos = getEmptyRandomPlace();
        pos.value = `food-${Util.createRandomInt(1, 3)}`;
        foods.push(pos);
      }
      
      const getEmptyRandomPlace = (): any => {
        const row = Math.floor(Math.random() * Math.floor(bordSize-1));
        const colm = Math.floor(Math.random() * Math.floor(bordSize-1));
        const isTaken = snake.some(pos => pos.row === row && pos.colm === colm) || foods.some(pos => pos.row === row && pos.colm === colm)
        if (isTaken) {
          return getEmptyRandomPlace();
        } else {
          return {
            row,
            colm
          };
        }
      }

      const createSnake = () =>  {
        let pos: SnakePart = {
          row: Math.floor(bordSize / 2),
          colm: Math.floor(bordSize / 2),
          dir: Dir.RIGHT,
          value:'snakePart'
        };
        snake.push(pos);
        for (let index = 0; index < 5; index++) {
          pos = getNextPos(pos, dir);
          snake.push(pos);
        }
        setSnake(snake);
    
      }

      const getNextPos = (pos:any, dir: string) => {
        let resPos = Object.assign({}, pos);
        switch (dir) {
          case Dir.LEFT:
            resPos.colm = resPos.colm - 1;
            break;
          case Dir.RIGHT:
            resPos.colm = resPos.colm + 1;
            break;
          case Dir.DOWON:
            resPos.row = resPos.row + 1;
            break;
          case Dir.UP:
            resPos.row = resPos.row - 1;
            break;
        }
        return resPos;
      }
    
      const getElementByPos = (pos:any)  => {
        return document.getElementById(pos.row + '-' + pos.colm);
      }
    
      const onFrame = () =>  {
        let isGameOver = doMove();
        if (isGameOver) {
          gameOver();
        }
      }

      const snakHead = () => {
        return snake[snake.length - 1];
      }

      const gameOver = () => {
        soundMgr.stopBg();
        stopGameLoop();
        setTimeout(() => onGameEnd() , 1000);
      }
     
      const draw = ()  => {
        //this.gameRender.render(this.foods, this.snake);
        setDir(dir);
        setFoods(foods);
        setSnake(snake);
      }
      
      const doMove = () => {
        let isGameOver = false;
        const newPos = getNextPos(snakHead(), dir);
        if (!isInBoard(newPos) ) {
          isGameOver = true;
          return isGameOver;
        }
        let removedPos = snake.shift();
        snake.push(newPos);
        setDireactionSnakeParts();
        if (isEeatingMyself()) {
          isGameOver = true;
          return isGameOver;  
        }
        const eatedFood = foods.findIndex((food) => {
          return isEqual(food, newPos);
        });
    
        if (eatedFood !== -1) {
          snake.unshift(removedPos as SnakePart);
          console.log('eatedFood', eatedFood);
          score = score + 10;
          setScore(score);
          foods.splice(eatedFood, 1);
          createFood();
          if (Util.createRandomInt(0,6) > 2) {
            haltGame();  
          }
        }
        setSnake([...snake]);
        setFoods([...foods]);
        return isGameOver;
        
      }

      const setDireactionSnakeParts = () => {
        for (let index = 0; index < snake.length-1; index++){
          const currentDir = getDiffDir(snake[index] , snake[index + 1]);
          snake[index].dir = currentDir;
        }
        snake[snake.length-1].dir = dir;
      }

      const getDiffDir = (snakePartCurrent:SnakePart, snakePartNext: SnakePart): string => {
        if(snakePartCurrent.colm >  snakePartNext.colm) {
          return Dir.LEFT;
        }
        if(snakePartCurrent.colm <  snakePartNext.colm) {
          return Dir.RIGHT;
        }
        if(snakePartCurrent.row <  snakePartNext.row) {
          return Dir.DOWON;
        }
        if(snakePartCurrent.row >  snakePartNext.row) {
          return Dir.UP;
        }
        return Dir.RIGHT;
      }

      const isEqual = (pos1: any, pos2: any) =>  {
        return (pos1.row === pos2.row && pos1.colm === pos2.colm)
      }
    
      const isEeatingMyself = () => {
        let head = snakHead();
        for (let index = 0; index < snake.length - 1; index++) {
          const part = snake[index];
          if (isEqual(head, part)) {
            return true;
          }
        }
        return false;
      }

      const isInBoard = (pos:any) => {
        console.log('check if game over', pos);
        
        if (pos.row >= bordSize ||
          pos.row < 0 ||
          pos.colm >= bordSize-1 ||
          pos.colm < 0) {
          return false;
        } else {
          return true;
        }
      }
    
      return <div className="game-screen">
        <div className="game-board">
          <div className="score">נקודות: {score} </div>
          <GameView boardSize={bordSize} snake={snake} foods={foods}/>
          {showQuestion? <QuestionsModal onClose={(addedScore: number) => {
            score = score + addedScore;
            setScore(score);
            setShowQuestion(false);
            resumeGame();
          }}/>: null}
          </div>
          </div>
}


