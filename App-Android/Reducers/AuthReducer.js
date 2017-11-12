const AuthReducer = (state={token:null, LoggedIn:false},action)=>{
	if(action.type=='USER_LOG_IN'){
		console.log('Logged In Dispatched');
		state = {
			...state,
			LoggedIn : true
		}	
	}
	else if(action.type==='USER_LOG_OUT'){
		console.log('Logged Out Dispatched');
		state={
			...state,
			LoggedIn : false			
		}
	}
	return state;
}
export default AuthReducer;