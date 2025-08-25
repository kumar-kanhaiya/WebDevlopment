
function UserGreeting(props){

    if(props.isLoggedIn){
        return <h2>Welcome {props.username}</h2>
    }
    else{
        return <h2>Please log in for continue</h2>
    }
}
export default UserGreeting