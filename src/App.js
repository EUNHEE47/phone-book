import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "./component/ContactForm";
import ContactList from "./component/ContactList";

// 1. 왼쪽엔 연락처 등록하는 폼, 오른쪽에는 연락처 리스트와 search창
// 2. 리스트에 유저 이름과 연락처를 추가 할 수 있다.
// 3. 리스트에 아이템이 몇개 있는지 보임.
// 4. 사용자가 유저를 이름검색으로 찾을 수 있다.

function App() {
  return (
    <div>
      <div className="title">
        <h1>PHONE BOOK</h1>
      </div>
      <Container>
        <Row className="wrap">
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
