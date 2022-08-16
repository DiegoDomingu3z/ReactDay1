// @ts-nocheck




function Header() {
    return (

        <div className="d-flex justify-content-between p-4 bg text-white">
            <div className="d-flex">
                <img className="img-fluid image" src="react.png" alt="React picture" />
                <span><h1 className="pt-3 ps-2">React</h1></span>
            </div>
            <div><h1 className="pt-3" >React Course - Project 1</h1> </div>
        </div>
    )
}



function Main() {
    return (

        <div>
            <h1 className="fw-bolder text-white ps-5 pt-4">Fun Facts about React</h1>
            <div className="ps-5 pt-3 text-white">

                <ul className="fs-3">
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100k stars on Github</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands fo enterprise apps, including mobile apps</li>
                </ul>
            </div>
        </div>
    )
}


ReactDOM.render(<Header />, document.getElementById("root"))
ReactDOM.render(<Main />, document.getElementById("main"))


