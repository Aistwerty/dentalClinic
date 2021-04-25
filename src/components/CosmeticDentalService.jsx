import React from "react";

export class CosmeticDentalService extends React.Component{
    render() {
        return(
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-8">
                        <h5>Косметическая стоматология</h5>
                        <p>
                            Красивая улыбка всегда располагает к себе окружающих людей. Стать обладателем красивой и сияющей улыбки поможет Вам косметическая стомотология в нашей клинике.
                            В косметической стоматологию входит профессиональная чистка зубов AirFlow3d, восстановление сколотых зубов.
                            Независимо от того насколько хорошо и качественно Вы чиститы зубы, какие бы щетки и зубные пасты не использовалии, со временем на зубах образуется налет и отложения зубного камня, которые портят Вашу улыбку и являются истониками кариеса.
                            Профессиональная чистка зубов AirFlow3d поможет избавится от налета и зубного камня, тем самым вернув природный цвет Вашей улыбки.
                        </p>
                        <div className="text-center py-1"> <a href="" className="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">Записаться на прием</a></div>
                    </div>
                    <div className="col-sm-4">
                        <img src="../images/about-img.jpg"  width="100%" alt=""/>
                    </div>

                </div>
            </div>
        )
    }
}