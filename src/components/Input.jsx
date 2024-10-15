export default function Input(){
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>initial investment</label>
                    <input type="number" required />
                </p>
                <p>
                    <label>annual salary</label>
                    <input type="number" required/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>expected return</label>
                    <input type="number" required/>
                </p>
                <p>
                    <label>duration</label>
                    <input type="number" required />
                </p>
            </div>
        </section>
    )
}