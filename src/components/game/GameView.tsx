import React from "react";
import { Cube } from "./cube/Cube";
import { Food, SnakePart } from "./Game";

type GameProps = {
    boardSize: number,
    foods: Array<Food>,
    snake: Array<SnakePart> 
}
export const GameView = ({boardSize, foods, snake}: GameProps) =>  {
    const cloms = new Array(boardSize).fill(0,0, boardSize-1);
    for (var i = 0; i < cloms.length; i++) {
        cloms[i] = new Array(boardSize).fill(0,0,boardSize-1);
    }
    foods.forEach( (item) => {
        cloms[item.row][item.colm] = item;
    });
    snake.forEach( (item) => {
        cloms[item.row][item.colm] = item;
    });
    const renderRow = (clom: any, j: number) => {
        return clom.map( (item: any, i: number) => {
            return <Cube value={item.value} dir={item.dir} key={`${j} - ${i}`}></Cube>
        });
    }
    return (<table>
        <tbody>{cloms.map( (clom, j: number) => {
       return(<tr key={j}> 
        {renderRow(clom, j)}
        </tr>);
    })}</tbody>
    </table>);
}