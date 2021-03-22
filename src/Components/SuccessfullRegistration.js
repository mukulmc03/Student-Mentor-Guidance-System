import { Link } from "react-router-dom"


const SuccessfullRegistration=()=>{
    return(
        <div>
            <div className="container successfullRegLines">
                <h3> Thanku For Registration </h3>
                <h3> It Has Been Completed Successfully..!!!</h3>
            </div>

        
            <div className="card text-white bg-dark mb-3 successfullRegCard" >
                <div className="card-header">Hello Ajinkya Please Remember Your Details: </div>
                <div className="card-body">
                    <h5 className="card-title">Details:</h5>
                    <p className="card-text">You Have Registered With Username :-  </p>
                    <p className="card-text">Your CourseId Is :-  </p>
                    <Link to="/login">
                    <p> Click Here To Login  </p>
                    </Link>
                </div>
          </div>
        </div>
    )
}

export default SuccessfullRegistration