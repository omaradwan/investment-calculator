export default function Input({first,second,third,fourth,onChange}){
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>{first}</label>
                    <input type="number" required onInput={(event)=>onChange(0,event)}/>
                </p>
                <p>
                    <label>{second}</label>
                    <input type="number" required onInput={(event)=>onChange(1,event)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>{third}</label>
                    <input type="number" required onInput={(event)=>onChange(2,event)}/>
                </p>
                <p>
                    <label>{fourth}</label>
                    <input type="number" required onInput={(event)=>onChange(3,event)} />
                </p>
            </div>
        </section>
    )
}