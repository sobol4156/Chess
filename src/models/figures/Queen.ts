import { Figure, FigureName } from "./Figure";
import { Colors } from '../Colors';
import { Cell } from '../Cell';
import blackLogo from '../../img/figuries/black/queen.png'
import whiteLogo from '../../img/figuries/white/queen.png'

export class Queen extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureName.QUEEN;
    }
    canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false;
        if (this.cell.isEmptyVertical(target))
            return true;
        if (this.cell.isEmptyHorizontal(target))
            return true;
        if (this.cell.isEmptyDiogonal(target))
            return true;
        return false;

    }
}