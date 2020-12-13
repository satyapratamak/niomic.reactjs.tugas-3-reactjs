import React, {Component} from "react";

import Footer from "./Page/Footer";
import MenuMakanan from "./Page/MenuMakanan";
import Header from "./Page/Header";
import MenuTentangKami from "./Page/MenuTentangKami";

class App extends Component {
  render(){

    return (
      <div>

        <Header />

        <MenuMakanan />
        <MenuTentangKami />

        <Footer />

      </div>
    );
  }

}
export default App;
