
const userContainer = ({user, logout}) => {
    return 'hello world';
  return (
    <div className="user-container">
{user?(
    <>
    <p>Hello There, {user?.name?.toUpperCase()}</p>

        <button className="btn" onClick={logout}> 
        logout
        </button>
    </>
):(<p>Please Login</p>
)}
        
        
    </div>
  );
};

export default userContainer;