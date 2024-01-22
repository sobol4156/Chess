import { Figure, FigureName} from "./Figure";
import {Colors} from '../Colors';
import {Cell} from '../Cell';
import blackLogo from '../../img/figuries/black/king.png'
import whiteLogo from '../../img/figuries/white/king.png'

export class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureName.KING;
    }
    canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false;
        return true
    }
}