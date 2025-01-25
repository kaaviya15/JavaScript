

const Profile = () => {
    const user={
        name:"kaaviya",
        age:1,
        class:"home"
    };
  return (
    <div>
      <h5>Name: {user.name}</h5>
      <h5>Age: {user.age}</h5>
      <h5>Class: {user.class}</h5>
    </div>
  )
}

export default Profile
