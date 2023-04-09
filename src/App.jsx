import React, { useContext } from 'react';
import { LanguageContext } from "./context/context";

import { Navbar, Applicant, Request, Rules, Footer, Form } from "./components/components";

function App() {
  const { language } = useContext(LanguageContext);

  return (
    <div className="App w-full">
      <Navbar />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
