import React from "react";

export class ModalWindow extends React.Component{
    render() {
        return(
<div>

        <div class="modal fade" id="staticBackdrop" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header bg-primary">
                        <h5 className="text-white mx-auto"> <strong> Запись на прием </strong></h5>
                        <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <section className="ftco-section ftco-no-pt ftco-no-pb">
                        <div className="container-fluid px-md-0">
                            <div className="consultation consul w-100 px-1 px-md-1">
                                <form action="#" className="appointment-form">
                                        <div className="col">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="First Name"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 col-xl-4">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Last Name"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 col-xl-4">
                                            <div className="form-group">
                                                <div className="form-field">
                                                    <div className="select-wrap">
                                                        <div className="icon"><span className="ion-ios-arrow-down"></span>
                                                        </div>
                                                        <select name="" id="" className="form-control">
                                                            <option value="">Department</option>
                                                            <option value="">Neurology</option>
                                                            <option value="">Cardiology</option>
                                                            <option value="">Dental</option>
                                                            <option value="">Ophthalmology</option>
                                                            <option value="">Other Services</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 col-xl-4">
                                            <div className="form-group">
                                                <div className="input-wrap">
                                                    <div className="icon"><span className="ion-md-calendar"></span></div>
                                                    <input type="text" className="form-control appointment_date"
                                                           placeholder="Date"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 col-xl-4">
                                            <div className="form-group">
                                                <div className="input-wrap">
                                                    <div className="icon"><span className="ion-ios-clock"></span></div>
                                                    <input type="text" className="form-control appointment_time"
                                                           placeholder="Time"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                                <input type="submit" value="Appointment"
                                                       className="btn btn-secondary py-2 px-4" data-dismiss="modal"/>
                                                <button type="button" className="btn btn-secondary"
                                                        data-dismiss="modal">Записаться
                                                </button>
                                                <button type="button" className="btn btn-primary"
                                                        data-dismiss="modal">Отмена
                                                </button>
                                        </div>
                                </form>
                            </div>
                        </div>
                    </section>
                    <div class="modal-footer bg-primary">

                    </div>
                </div>
            </div>
        </div>
</div>
        )
    }
}