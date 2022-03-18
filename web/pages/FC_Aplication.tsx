import Header from "../src/components/Header/Header";
import Menu from "../src/components/Main/Menu/Menu";
import FC_body from "../src/components/Ankets/ForClients/ForClients";

const FC_Anket = () => {
  return (
    <div>
      <Header />
      <Menu/>
      <FC_body/>
    </div>
  );
};

export default FC_Anket;