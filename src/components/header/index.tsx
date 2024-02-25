import { Link } from "react-router-dom";
import LOGO from "../../assets/allini/testimg.jpeg";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <h1>
              <Link to="/">
                <img src={LOGO} alt="Allini" width="50px" height="50px" />
              </Link>
            </h1>
          </li>
          <li>
            <ul>
              <li>
                <Link to="/snack-list">간식</Link>
              </li>
              <li>
                <Link to="/food-list">사료</Link>
              </li>
            </ul>
          </li>
          <li>
            {false ? (
              <ul>
                <li>
                  <button>로그인</button>
                </li>
                <li>
                  <Link to="/signup">회원가입</Link>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <button>로그아웃</button>
                </li>
                <li>
                  <Link to="/mypage">마이페이지</Link>
                </li>
                <li>
                  <Link to="/meal-registration">사료/간식 등록</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
