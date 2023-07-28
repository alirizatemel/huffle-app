/*!

just something

*/
import React,{createRef} from "react";


// core components
import DemoNavbar from "../components/Navbars/DemoNavbar.js";
import CardsFooter from "../components/Footers/CardsFooter.js";

// index page sections
import Hero from "./IndexSections/Hero.js";

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.mainRef = createRef();
  }
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.mainRef.current.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref={this.mainRef}>
          <Hero />
         
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Index;
