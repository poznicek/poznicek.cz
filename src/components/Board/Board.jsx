import { Container } from "react-bootstrap";
import Square from "../Square/Square";

const Board = () => {
    return (
        <Container>
            <div className="row">
                <Square />
                <Square />
                <Square />
            </div>
        </Container>
    );
};

export default Board;
