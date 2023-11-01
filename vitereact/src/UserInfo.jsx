function UserInfo({name, age, add ="bilaspur"}){
    return(
        <div>
            <h1>user Detail</h1>
            <h2>{name}</h2>
            <h2>{age}</h2>
            <h2>{add}</h2>
        </div>
    );
}

export default UserInfo;