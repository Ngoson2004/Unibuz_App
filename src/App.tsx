import Home from "./Home/HomePage.tsx";
import SigninPage from "./Home/SignInPage.tsx";
import { ComingSoon } from "./Home/ComingSoon.tsx";
import {About} from "./Home/AboutPage.tsx";
import { Feature } from "./Home/FeaturePage.tsx";
import Email from "./AccCreation/SignUpPage.tsx";
import { Code } from "./AccCreation/AuthCode.tsx";
import { Password } from "./AccCreation/Password.tsx";
import { Profile } from "./AccCreation/ProfileIn4.tsx";
import { Uni } from "./AccCreation/Uni.tsx";
import { Interest } from "./AccCreation/Interest.tsx";
import { Guide } from "./AccCreation/GoodVibeGuide.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coming" element={<ComingSoon/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<Email />} />
          <Route path="/auth" element={<Code />} />
          <Route path="/pwd" element={<Password />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/uni" element={<Uni />} />
          <Route path="/interest" element={<Interest />} />
          <Route path="/guide" element={<Guide />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
