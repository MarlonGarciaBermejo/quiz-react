const Result = (props) => {

    return (

        <section>
            <h2>Result:  </h2>
            <p>You scored: __ !</p>
            <button onClick={props.nextScreen}>Restart</button>
        </section>


    )
}
export default Result;