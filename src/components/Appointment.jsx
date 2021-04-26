import React from "react";

export class Appointment extends React.Component{
    constructor(props) {
        super(props);
        this.inputAppointment = this.inputAppointment.bind(this);
        this.sendAppointment = this.sendAppointment.bind(this);
        this.cleanForm = this.cleanForm.bind(this);
        this.state={
            client_name:"",
            client_lastname:"",
            phone:"",
            reason:"",
            planned_date:"",
            planned_time:""
        }
    }

    inputAppointment(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    sendAppointment(event){
        event.preventDefault();
        const formData = new FormData();
        formData.append("client_name",this.state.client_name);
        formData.append("client_lastname",this.state.client_lastname);
        formData.append("phone",this.state.phone);
        formData.append("reason",this.state.reason);
        formData.append("planned_date",this.state.planned_date);
        formData.append("planned_time",this.state.planned_time);
        fetch("http://stomadent.aistwerty.beget.tech/php/sendAppointment.php",{
            method: 'POST',
            body: formData
        }).then(response=>response.json())
            .then(result=> {
                if (result.result === 'success') alert("Ваше заявка успешно направлена");
                else alert("Отправка сообщения пока недоступно, попробуйте повторить попытку позже");
                this.setState({
                    client_name:"",
                    client_lastname:"",
                    phone:"",
                    reason:"",
                    planned_date:"",
                    planned_time:""
                })
            })
    }

    cleanForm(event){
        this.setState({
            client_name:"",
            client_lastname:"",
            phone:"",
            reason:"",
            planned_date:"",
            planned_time:""
        })
    }


    render() {
        return(
            <div>
                <div class="modal fade" id="staticBackdrop" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header bg-primary">
                                <h5 className="text-white mx-auto"> <strong> Запись на прием </strong></h5>
                                <button onClick={this.cleanForm} type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span></button>
                            </div>
                            <section className="ftco-section ftco-no-pt ftco-no-pb">
                                <div className="container-fluid px-md-0" style={{background:"#24a1cd"}}>
                                    <div className="consultation consul w-100 px-1 px-md-1">
                                        <form action="#" className="appointment-form">
                                            <div className="col">
                                                <div className="form-group">
                                                    <input name="client_name" value={this.state.client_name} onChange={this.inputAppointment} type="text" className="form-control" placeholder="Введите Ваше имя"/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <input name="client_lastname" value={this.state.client_lastname} onChange={this.inputAppointment} type="text" className="form-control" placeholder="Введите Вашу фамилию"/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <input name="phone" value={this.state.phone} onChange={this.inputAppointment} type="text" className="form-control" placeholder="Контактный телефон"/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <div className="form-field">
                                                        <div className="select-wrap">
                                                            <div className="icon">
                                                                <span className="ion-ios-arrow-down"/>
                                                            </div>
                                                            <select name="reason" value={this.state.reason} onChange={this.inputAppointment} id="" className="form-control">
                                                                <option value="Осмотр и консультация">Осмотр и консультация</option>
                                                                <option value="Лечение кариеса">Лечение кариеса</option>
                                                                <option value="Косметическая стоматология">Косметическая стоматология</option>
                                                                <option value="Протезироваание">Протезирование</option>
                                                                <option value="Иное">Иное</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <div className="input-wrap">
                                                        <div className="icon"><span className="ion-md-calendar"/></div>
                                                        <input name="planned_date" value={this.state.planned_date} onChange={this.inputAppointment} type="text" className="form-control appointment_date" placeholder="Укажите планируемую дату"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <div className="input-wrap">
                                                        <div className="icon"><span className="ion-ios-clock"/></div>
                                                        <input name="planned_time" value={this.state.planned_time} onChange={this.inputAppointment} type="text" className="form-control appointment_time"
                                                               placeholder="Укажите удобное время"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-10 mx-auto text-center">
                                                <p>Дождитесь обратного звонка для подтверждения Вашей записи на приём!</p>
                                            </div>
                                            <div className="col text-center">
                                                <input onClick={this.sendAppointment} type="submit" value="Записаться" className="btn btn-secondary" data-dismiss="modal"/>
                                                <button onClick={this.cleanForm} type="button" className="btn btn-primary" data-dismiss="modal">Отмена</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                 </div>
            </div>
        )
    }
}