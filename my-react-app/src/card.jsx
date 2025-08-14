import ProfilePic from './assets/kanhaiya.jpeg'
function Card(){
    return(
        <div className="card">
            <img src={ProfilePic} alt="image hai " />
            <h2>Kanhaiya Kumar</h2>
            <p>Programming for leaving and play video games </p>


        </div>
    );
}

export default Card;