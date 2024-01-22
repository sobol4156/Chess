import { Figure, FigureName } from "./Figure";
import { Colors } from '../Colors';
import { Cell } from '../Cell';
import blackLogo from '../../img/figuries/black/bishop.png'
import whiteLogo from '../../img/figuries/white/bishop.png'

export class Bishop extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureName.BISHOP;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false;
        if (this.cell.isEmptyDiogonal(target))
            return true;
        return false
    }
}