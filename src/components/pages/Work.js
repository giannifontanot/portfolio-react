import React from 'react';

export default function Work() {
    return (
        <div>
            <div className="flex-grid">
                <div className="main-content">
                    <main>

                        <div className="mywork-container">
                            <a id="work"></a>
                            <h2>My Work</h2>
                            <hr/>
                            Some time ago, I developed some small programs using
                            HTML, CSS and Javascript to help the children get better
                            in our Math lessons:<br/><br/>
                        </div>

                        <div className="flex-grid tenths work-container">

                            <div className="col-3 col-3-md col-10-sm text-center vertical-center">
                                <img alt="" className="img-thumbnail" src="./assets/images/rounding.PNG"/></div>
                            <div className="col-4 col-4-md col-10-sm text-center vertical-center">
                                <a href="./assets/scripts/redondeo.html" target="_blank"><h4>Rounding</h4></a>
                            </div>
                            <div className="col-3 col-3-md col-10-sm text-left vertical-center">
                                Students see a number on the screen and check
                                try to round to the nearest hundred.
                            </div>

                            <div className="col-3 col-3-md col-10-sm text-center vertical-center">
                                <img alt="" className="img-thumbnail" src="./assets/images/subtraction.PNG"/>
                            </div>
                            <div className="col-4 col-4-md col-10-sm text-center vertical-center">
                                <a href="./assets/scripts/resta%20mental.html" target="_blank"><h4>Mental Math:
                                    Subtraction</h4></a>
                            </div>
                            <div className="col-3 col-3-md col-10-sm text-left vertical-center">
                                The computer show a subtraction on the
                                screen and then the student tries to solve it.
                                When the student is ready presses a button to
                                check the answer.
                            </div>

                            <div className="col-3 col-3-md col-10-sm text-center vertical-center">
                                <img alt="" className="img-thumbnail" src="./assets/images/addition.PNG"/></div>
                            <div className="col-4 col-4-md col-10-sm text-center vertical-center">
                                <a href="./assets/scripts/suma%20mental.html" target="_blank"><h4>Mental Math:
                                    Addition</h4></a>
                            </div>
                            <div className="col-3 col-3-md col-10-sm text-left vertical-center">
                                Very similar to the last one, but instead of
                                presenting substractions to the students,
                                it presents additions.
                            </div>

                            <div className="col-3 col-3-md col-10-sm text-center vertical-center">
                                <img alt="" className="img-thumbnail"
                                     src="./assets/images/HundredTableSubtraction.PNG"/>
                            </div>
                            <div className="col-4 col-4-md col-10-sm text-center vertical-center">
                                <a href="./assets/scripts/Tabla%20de%20100%20suma%20y%20resta.html" target="_blank">
                                    <h4>Addition and subtraction</h4></a>
                            </div>
                            <div className="col-3 col-3-md col-10-sm text-left vertical-center">
                                The computer presents a Hundred Table to help students
                                determine the answer to the problem on the screen.
                            </div>

                        </div>


                    </main>
                </div>
            </div>


        </div>
    );
}
