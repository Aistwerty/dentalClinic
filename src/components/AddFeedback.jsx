import React from "react";


export class AddFeedback extends React.Component{
    constructor() {
        super();
        this.sendFeedback = this.sendFeedback.bind(this);
        this.inputFeedback = this.inputFeedback.bind(this);
        this.state={
            client:"",
            email:"",
            phone:"",
            text:""
        }
    }

    sendFeedback(event){
        event.preventDefault();
        const formData = new FormData();
        formData.append("client", this.state.client);
        formData.append("email",this.state.email);
        formData.append("phone",this.state.phone);
        formData.append("text",this.state.text);
        fetch("http://stomadent.aistwerty.beget.tech/php/addFeedback.php",{
            method: "POST",
            body: formData
        }).then(response=>response.json())
            .then(result=> {
                if (result.result === 'success') alert("Ваш отзыв успешно добавлен");
                else alert("Добавление отзыва пока недоступно, попробуйте повторить попытку позже");
                this.setState({
                    client:"",
                    email:"",
                    phone:"",
                    text:""
                })
            })
    }

    inputFeedback(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })

    }

    render() {
        return (
            <div className="container">
                <div className="row d-flex align-items-stretch no-gutters">
                    <div className="col-md-6 p-4 p-md-5 order-md-last bg-light mx-auto">
                        <form onSubmit={this.sendFeedback}>
                            <div className="container text-center">
                                <h3>Оставить отзыв</h3>
                                <p> Мы очень ценим своих клиентов и заботимся о высоком качестве наших услуг.</p>
                            </div>
                            <div className="form-group">
                                <input value={this.state.client} onChange={this.inputFeedback} name="client" placeholder="Введите Ваше имя"
                                    /*onFocus="this.placeholder = ''"
                                    onBlur="this.placeholder = 'Введите Ваше имя'"*/
                                       className="form-control" required="" type="text"/>
                            </div>
                            <div className="form-group">
                                <input value={this.state.email} onChange={this.inputFeedback} name="email" placeholder="Введите email"
                                       pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                                    //onFocus="this.placeholder = ''"
                                    //onBlur="this.placeholder = 'Введите email'"
                                       className="form-control" required=""
                                       type="email"/>
                            </div>
                            <div className="form-group">
                            <input value={this.state.phone} onChange={this.inputFeedback} name="phone" placeholder="Номер телефона для связи"
                                /*onFocus="this.placeholder = ''"
                                onBlur="this.placeholder = 'Номер телефона для связи'"*/
                                   className="form-control" required=""
                                   type="text"/>
                            </div>
                            <div className="form-group">
                            <textarea value={this.state.text} onChange={this.inputFeedback} className="form-control" cols="30" rows="4" name="text"
                                      placeholder="Текст отзыва" /*onFocus="this.placeholder = ''"
                                      onBlur="this.placeholder = 'Текст обращения'"*/ required=""/>
                            </div>
                            <div className="form-group text-center">
                                <input type="submit" value="Опубликовать отзыв" className="btn btn-primary py-3 px-5"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddFeedback;