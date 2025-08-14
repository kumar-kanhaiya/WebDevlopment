import propTypes from 'prop-types'
function Student(props){
    return(
        <div>
            <p>Name : {props.name}</p>
            <p>Age:{props.age}</p>
            <p>Student:{props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}

Student.proTypes = {
    name: propTypes.string,
    age: propTypes.number,
    Student: propTypes.bool
}


export default Student