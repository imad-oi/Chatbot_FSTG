import React from 'react'

const home = () => {
  return (
    <div> 
        {/* nav bar */}
        <div classNameName="row">
            <nav className="navbar navbar-expand-sm navbar-light bg-secondary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">primary</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                        aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarID">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            
                        </div>
                    </div>
                </div>
            </nav>
            </div>

            {/* home page */}
            <div clasName="row">

                <div className="col">
                    <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem vero, culpa deserunt officia suscipit, veniam maiores esse, quo provident sunt ut perspiciatis distinctio itaque laboriosam repellat mollitia at voluptate tenetur.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis natus fugit nisi delectus perferendis suscipit, recusandae expedita? Quod accusamus nam ex neque facere ullam eveniet quis, nesciunt deserunt necessitatibus aliquam, harum sequi!
                    </p>
                </div>

                <div className="col-md-6">

                    <div className="card" style={{
                        width:"18em"
                    }} >
                      <img src=""  className="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted ">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        b5
                      </div>
                    </div>

                </div>
                
            </div>

            
    </div>
  )
}

export default home