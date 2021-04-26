import React from "react";

export class CallMeBack extends React.Component{
    constructor(props) {
        super(props);
        this.inputCallMe = this.inputCallMe.bind(this);
        this.sendCallMe = this.sendCallMe.bind(this);
        this.cleanForm = this.cleanForm.bind(this);
        this.state={
            client:"",
            phone:"",
            reason:""
        }
    }

    inputCallMe(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    sendCallMe(event){
        event.preventDefault();
        const formData = new FormData();
        formData.append("client",this.state.client);
        formData.append("phone",this.state.phone);
        formData.append("reason",this.state.reason);
        fetch("http://stomadent.aistwerty.beget.tech/php/sendCallMe.php",{
            method: 'POST',
            body: formData
        }).then(response=>response.json())
            .then(result=> {
                if (result.result === 'success') alert("Ваше заявка успешно направлена");
                else alert("Отправка сообщения пока недоступно, попробуйте повторить попытку позже");
                this.setState({
                    client:"",
                    phone:"",
                    reason:""
                })
            })
    }

    cleanForm(event){
        this.setState({
            client:"",
            phone:"",
            reason:""
        })
    }



    render() {
        return(
            <div>
                <div class="modal fade" id="staticBackdrop" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header bg-primary">
                                <h5 className="text-white mx-auto"> <strong> Заказать обратный звонок </strong></h5>
                                <button onClick={this.cleanForm} type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span></button>
                            </div>
                            <section className="ftco-section ftco-no-pt ftco-no-pb">
                                <div className="container-fluid px-md-0" style={{background:"#24a1cd"}}>
                                    <div className="consultation consul w-100 px-1 px-md-1">
                                        <form action="#" className="appointment-form">
                                            <div className="col">
                                                <div className="form-group">
                                                    <input name="client" value={this.state.client} onChange={this.inputCallMe} type="text" className="form-control" placeholder="Введите Ваше имя"/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <input name="phone" value={this.state.phone} onChange={this.inputCallMe} type="text" className="form-control" placeholder="Контактный телефон"/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <div className="form-field">
                                                        <div className="select-wrap">
                                                            <div className="icon"><span className="ion-ios-arrow-down"/>
                                                            </div>
                                                            <select name="reason" value={this.state.reason} onChange={this.inputCallMe} id="" className="form-control">
                                                                <option value="Острая зубная боль">Острая зубная боль</option>
                                                                <option value="Консультация">Консультация</option>
                                                                <option value="Лечение зуба">Лечение зуба</option>
                                                                <option value="Протезироваание">Протезирование</option>
                                                                <option value="Иное">Иное</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col text-center">
                                                <input  onClick={this.sendCallMe} type="submit" value="Отправить" className="btn btn-secondary" data-dismiss="modal"/>
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