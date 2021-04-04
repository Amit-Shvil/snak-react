import { Dir } from '../Game';
import './Cube.css'

type CubeProps  = {
    value: string,
    dir: string
}
export const Cube = ({value, dir}: CubeProps) => {
    let cssClass = 'cell ';
    if (value === 'snakePart' ) {
        cssClass = `${cssClass} snakePart ${toDirClass(dir)}`;

    } else if(value)  {
      cssClass = `${cssClass} ${value}`;
    }
    return <td className={cssClass} ></td>
            
    
}
const toDirClass = (dir: string): string => {
    switch(dir) {
      case Dir.DOWON: 
        return 'dir-down';
      case Dir.UP: 
        return 'dir-up';
      case Dir.LEFT: 
        return 'dir-left';
      case Dir.RIGHT: 
      default:
        return 'dir-right';
    }
  }