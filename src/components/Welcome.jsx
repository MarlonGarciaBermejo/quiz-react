const Welcome = (props) => {

return (
<section>
    <h2>
        Welcome to the Quiz
    </h2>
    <p>Want to start the game?</p>
    <button onClick={props.nextScreen}>Yes!</button>
</section>

)

}
export default Welcome; 