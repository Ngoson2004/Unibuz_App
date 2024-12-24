// import { DarkThemeToggle } from "flowbite-react";
import Home from "./Home/HomePage.tsx";
import SigninPage from "./Home/SignInPage.tsx";
import Email from "./AccCreation/SignUpPage.tsx";
import { Code } from "./AccCreation/AuthCode.tsx";
import { Password } from "./AccCreation/Password.tsx";
import { Profile } from "./AccCreation/Profile.tsx";
import { Uni } from "./AccCreation/Uni.tsx";
import { Interest } from "./AccCreation/Interest.tsx";
import { Guide } from "./AccCreation/GoodVibeGuide.tsx";
import { Feed } from "./Tribes/Feed.tsx";
import { Tribe } from "./Tribes/MyTribes.tsx";
import { TribeDetail } from "./Tribes/Tribe.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<Email />} />
          <Route path="/auth" element={<Code />} />
          <Route path="/pwd" element={<Password />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/uni" element={<Uni />} />
          <Route path="/interest" element={<Interest />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/tribes" element={<Tribe />} />
          <Route path="/tribes/:id" element={<TribeDetail />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
