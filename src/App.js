import './shared/custom.css';
import { BrowserRouter } from "react-router-dom";
import Web from "./routes/Web";
import Leftbar from "./shared/Leftbar";
import Navbar from './shared/Navbar';


function App() {
  return (
    <BrowserRouter>



      <div className="flex">

        {/* leftbar component */}
        <Leftbar />

        <div className='flex flex-col w-full'>

          {/* navbar component */}
          <Navbar />

          {/* Body & all routes */}
          <Web />

        </div>

      </div>


      {/* footer component */}
      {/* ------------------ */}


    </BrowserRouter>
  );
}

export default App;
