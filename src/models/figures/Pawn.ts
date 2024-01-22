import { Figure, FigureName } from "./Figure";
import { Colors } from '../Colors';
import { Cell } from '../Cell';
import blackLogo from '../../img/figuries/black/pawn.png'
import whiteLogo from '../../img/figuries/white/pawn.png'

export class Pawn extends Figure {

    ifFirstStep: boolean = true;

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureName.PAWN;
    }
    canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false;
        const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1;
        const firsStepDirection = this.cell.figure?.color === Colors.BLACK ? 2 : -2;

        if ((target.y === this.cell.y + direction || this.ifFirstStep
            && (target.y === this.cell.y + firsStepDirection))
            && target.x === this.cell.x
            && this.cell.board.getCell(target.x, target.y).isEmpty()) {
            return true;
        }

        if (target.y === this.cell.y + direction
            && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
            && this.cell.isEnemy(target)) {
            return true;
        }

        return false;
    }

    moveFigure(target: Cell): void {
        super.moveFigure(target);
        this.ifFirstStep = false;
    }
}