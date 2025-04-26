import { Link } from "react-router-dom";

const Verify = () => {
    return (
      <div className="text-center p-8  flex-col flex gap-5">
       
    
        <h1 className="text-2xl font-bold text-red-500 mb-4 ">Please verify your email</h1>
        <p>Check your inbox for the verification link. Try Going back after Verification </p>
       <div><Link className="p-3 border mt-10 rounded" to="/"> Go back</Link></div> 
      </div>
    );
  };
  
  export default Verify;
  