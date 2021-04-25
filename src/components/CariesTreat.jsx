import React from "react";

export class CariesTreat extends React.Component{
    render() {
        return(
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-4">
                        <img src="../images/s2.jpg"  width="100%" alt=""/>
                    </div>
                    <div className="col-sm-8">
                        <h5>Лечение кариеса</h5>
                        <p>
                            Существует несколько стадии поражения зуба кариесом. Самый простой и легкий способ вылечить пораженный зуб это обратиться к специалистам на ранних стадиях.
                            Как правило большинство людей обращаются за лечением, только когда зуб начинает болеть, что свидетельствует о последних стадиях и сильном поражении зуба.
                            Наши специалисты готовы оказать лечение на всех стадиях поражения зубы кариесом.
                        </p>
                        <div className="text-center"> <a href="" className="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">Записаться на прием</a></div>
                    </div>
                </div>
            </div>
        )
    }
}