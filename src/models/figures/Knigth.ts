import { Figure, FigureName} from "./Figure";
import {Colors} from '../Colors';
import {Cell} from '../Cell';
import blackLogo from '../../img/figuries/black/knight.png'
import whiteLogo from '../../img/figuries/white/knight.png'

export class Knight extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureName.KNIGHT;
    }
    canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false;
        const dx = Math.abs(this.cell.x - target.x)
        const dy = Math.abs(this.cell.y - target.y)
        return (dx === 1 && dy === 2) || (dx ===2 && dy === 1)
    }
}